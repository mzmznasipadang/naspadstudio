import { NextResponse } from 'next/server';
import { coreApi } from '../../../lib/midtrans';
import { supabase } from '../../../lib/supabase';
import { sendEmail } from '../../../lib/email-service';
// import type { NotificationResponse } from 'midtrans-client';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Use CoreApi to verify and handle the notification
    const notification = await coreApi.transaction.notification(body);

    // Get the order ID and status
    const orderId = notification.order_id;
    const transactionStatus = notification.transaction_status;
    const fraudStatus = notification.fraud_status;

    // Update invoice status based on payment status
    if (transactionStatus === 'capture') {
      if (fraudStatus === 'challenge') {
        await updateInvoiceStatus(orderId, 'pending');
      } else if (fraudStatus === 'accept') {
        await updateInvoiceStatus(orderId, 'paid');
        await sendPaymentConfirmation(orderId);
      }
    } else if (transactionStatus === 'settlement') {
      await updateInvoiceStatus(orderId, 'paid');
      await sendPaymentConfirmation(orderId);
    } else if (transactionStatus === 'cancel' ||
              transactionStatus === 'deny' ||
              transactionStatus === 'expire') {
      await updateInvoiceStatus(orderId, 'cancelled');
    } else if (transactionStatus === 'pending') {
      await updateInvoiceStatus(orderId, 'pending');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

type InvoiceStatus = 'pending' | 'paid' | 'cancelled';

async function updateInvoiceStatus(invoiceNumber: string, status: InvoiceStatus) {
  const { error } = await supabase
    .from('invoices')
    .update({ 
      status,
      paid_at: status === 'paid' ? new Date().toISOString() : null
    })
    .eq('number', invoiceNumber);

  if (error) {
    console.error('Error updating invoice:', error);
    throw error;
  }
}

interface InvoiceWithClient {
  number: string;
  total: number;
  clients: {
    name: string;
    email: string;
  };
}

async function sendPaymentConfirmation(invoiceNumber: string) {
  const { data: invoice, error } = await supabase
    .from('invoices')
    .select(`
      number,
      total,
      clients (
        name,
        email
      )
    `)
    .eq('number', invoiceNumber)
    .single<InvoiceWithClient>();

  if (error || !invoice) {
    console.error('Error fetching invoice:', error);
    return;
  }

  await sendEmail({
    to: invoice.clients.email,
    subject: `Payment Confirmation for Invoice #${invoiceNumber}`,
    htmlContent: `
      <h2>Payment Confirmation</h2>
      <p>Dear ${invoice.clients.name},</p>
      <p>We have received your payment for Invoice #${invoiceNumber}.</p>
      <p>Amount: ${new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR' 
      }).format(invoice.total)}</p>
      <p>Thank you for your business!</p>
      <p>Best regards,<br>NasPad Studio Digital</p>
    `
  });
}