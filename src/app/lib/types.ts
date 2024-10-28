export interface InvoiceItem {
    description: string;
    quantity: number;
    rate: number;
    amount: number;
  }
  
  export interface Client {
    name: string;
    email: string;
  }
  
  export interface Invoice {
    id: string;
    number: string;
    due_date: string;
    subtotal: number;
    total: number;
    payment_url?: string;
    clients: Client;
    invoice_items: InvoiceItem[];
  }