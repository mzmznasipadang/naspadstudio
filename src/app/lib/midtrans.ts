import midtransClient from 'midtrans-client';

const isSandbox = process.env.NODE_ENV !== 'production';

// Initialize CoreApi client
export const coreApi = new midtransClient.CoreApi({
  isProduction: !isSandbox,
  serverKey: isSandbox 
    ? process.env.MIDTRANS_SANDBOX_SERVER_KEY! 
    : process.env.MIDTRANS_PRODUCTION_SERVER_KEY!,
  clientKey: isSandbox
    ? process.env.MIDTRANS_SANDBOX_CLIENT_KEY!
    : process.env.MIDTRANS_PRODUCTION_CLIENT_KEY!
});

// Initialize Snap client
export const snap = new midtransClient.Snap({
  isProduction: !isSandbox,
  serverKey: isSandbox 
    ? process.env.MIDTRANS_SANDBOX_SERVER_KEY! 
    : process.env.MIDTRANS_PRODUCTION_SERVER_KEY!,
  clientKey: isSandbox
    ? process.env.MIDTRANS_SANDBOX_CLIENT_KEY!
    : process.env.MIDTRANS_PRODUCTION_CLIENT_KEY!
});

export type PaymentStatus = 'pending' | 'success' | 'failed' | 'expired';

// Get payment status using CoreApi
export async function getPaymentStatus(orderId: string): Promise<PaymentStatus> {
  try {
    const response = await coreApi.transaction.status(orderId);
    
    switch (response.transaction_status) {
      case 'capture':
      case 'settlement':
        return 'success';
      case 'pending':
        return 'pending';
      case 'deny':
      case 'cancel':
        return 'failed';
      case 'expire':
        return 'expired';
      default:
        return 'pending';
    }
  } catch (error) {
    console.error('Error checking payment status:', error);
    throw error;
  }
}

// Create payment function
interface CreatePaymentOptions {
  orderId: string;
  amount: number;
  customerDetails: {
    firstName: string;
    email: string;
    phone?: string;
  };
  items: Array<{
    id: string;
    price: number;
    quantity: number;
    name: string;
  }>;
}

export async function createPayment({
  orderId,
  amount,
  customerDetails,
  items
}: CreatePaymentOptions) {
  try {
    const transaction = await snap.createTransaction({
      transaction_details: {
        order_id: orderId,
        gross_amount: amount,
      },
      credit_card: {
        secure: true
      },
      customer_details: {
        first_name: customerDetails.firstName,
        email: customerDetails.email,
        phone: customerDetails.phone,
      },
      item_details: items,
      callbacks: {
        finish: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
        error: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/error`,
        pending: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/pending`
      }
    });

    return transaction;
  } catch (error) {
    console.error('Midtrans payment creation error:', error);
    throw error;
  }
}