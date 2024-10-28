declare module 'midtrans-client' {
    export interface ClientConfig {
      isProduction: boolean;
      serverKey: string;
      clientKey: string;
    }
  
    export interface TransactionDetails {
      order_id: string;
      gross_amount: number;
    }
  
    export interface CustomerDetails {
      first_name?: string;
      last_name?: string;
      email?: string;
      phone?: string;
    }
  
    export interface ItemDetails {
      id: string;
      price: number;
      quantity: number;
      name: string;
    }

    export interface TransactionDetails {
      order_id: string;
      gross_amount: number;
    }
  
    export interface TransactionOptions {
      transaction_details: TransactionDetails;
      credit_card?: {
        secure?: boolean;
      };
      customer_details?: CustomerDetails;
      item_details?: ItemDetails[];
      callbacks?: {
        finish?: string;
        error?: string;
        pending?: string;
      };
    }

    export interface TransactionStatus {
      transaction_time: string;
      transaction_status: string;
      transaction_id: string;
      status_message: string;
      status_code: string;
      signature_key: string;
      payment_type: string;
      order_id: string;
      merchant_id: string;
      gross_amount: string;
      fraud_status: string;
      currency: string;
    }
  
    export interface NotificationRequestBody {
      transaction_time: string;
      transaction_status: string;
      transaction_id: string;
      status_message?: string;
      status_code: string;
      signature_key: string;
      payment_type: string;
      order_id: string;
      merchant_id: string;
      masked_card?: string;
      gross_amount: string;
      fraud_status?: string;
      currency: string;
      approval_code?: string;
      settlement_time?: string;
      card_type?: string;
      va_numbers?: Array<{
        bank: string;
        va_number: string;
      }>;
      payment_amounts?: number[];
      payment_code?: string;
      store?: string;
    }
  
    export interface NotificationResponse {
      transaction_time: string;
      transaction_status: string;
      transaction_id: string;
      status_message: string;
      status_code: string;
      signature_key: string;
      payment_type: string;
      order_id: string;
      merchant_id: string;
      gross_amount: string;
      fraud_status: string;
      currency: string;
    }
  
    export class Snap {
      constructor(options: ClientConfig);
      createTransaction(options: TransactionOptions): Promise<{
        token: string;
        redirect_url: string;
      }>;
    }
  
    export class Notification {
      constructor(options: Omit<ClientConfig, 'clientKey'>);
      notification(notification: NotificationResponse): Promise<NotificationResponse>;
    }
  
    export class CoreApi {
      constructor(options: ClientConfig);
      transaction: {
        status(orderId: string): Promise<TransactionStatus>;
        notification(notification: NotificationResponse): Promise<TransactionStatus>;
      };
    }
  }