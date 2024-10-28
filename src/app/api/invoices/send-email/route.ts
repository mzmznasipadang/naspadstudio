import { NextResponse } from 'next/server';
import { sendEmail } from '../../../lib/email-service';
import { supabase } from '../../../lib/supabase';
import { formatRupiah } from '@/utils/currency';
import type { Invoice, InvoiceItem } from '../../../lib/types';

export async function POST(request: Request) {
  try {
    const { invoiceId } = await request.json();

    // Get invoice data from Supabase
    const { data: invoice, error } = await supabase
      .from('invoices')
      .select(`
        *,
        clients (
          name,
          email
        ),
        invoice_items (
          description,
          quantity,
          rate,
          amount
        )
      `)
      .eq('id', invoiceId)
      .single<Invoice>();

    if (error || !invoice) {
      throw new Error('Invoice not found');
    }

    // Create HTML content for the invoice
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
            .total { font-weight: bold; }
          </style>
        </head>
        <body>
          <h2>Invoice #${invoice.number}</h2>
          <p>Dear ${invoice.clients.name},</p>
          <p>Please find your invoice details below:</p>
          
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${invoice.invoice_items.map((item: InvoiceItem) => `
                <tr>
                  <td>${item.description}</td>
                  <td>${item.quantity}</td>
                  <td>${formatRupiah(item.rate)}</td>
                  <td>${formatRupiah(item.amount)}</td>
                </tr>
              `).join('')}
            </tbody>
            <tfoot>
              <tr class="total">
                <td colspan="3">Subtotal</td>
                <td>${formatRupiah(invoice.subtotal)}</td>
              </tr>
              <tr class="total">
                <td colspan="3">PPN (11%)</td>
                <td>${formatRupiah(invoice.subtotal * 0.11)}</td>
              </tr>
              <tr class="total">
                <td colspan="3">Total</td>
                <td>${formatRupiah(invoice.total)}</td>
              </tr>
            </tfoot>
          </table>

          ${invoice.payment_url ? `
            <p>To make a payment, please click the link below:</p>
            <p><a href="${invoice.payment_url}">Pay Now</a></p>
          ` : ''}

          <p>Due Date: ${new Date(invoice.due_date).toLocaleDateString('id-ID')}</p>
          
          <p>Thank you for your business!</p>
          
          <p>Best regards,<br>NasPad Studio Digital</p>
        </body>
      </html>
    `;

    await sendEmail({
      to: invoice.clients.email,
      subject: `Invoice #${invoice.number} from NasPad Studio Digital`,
      htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending invoice:', error);
    return NextResponse.json(
      { error: 'Failed to send invoice' },
      { status: 500 }
    );
  }
}