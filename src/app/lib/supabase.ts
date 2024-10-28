// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// lib/types.ts
export interface Client {
  id: string
  name: string
  email: string
  address?: string
  phone?: string
  created_at: string
}

export interface Invoice {
  id: string
  number: string
  client_id: string
  issue_date: string
  due_date: string
  subtotal: number
  tax_percent: number
  total: number
  status: 'draft' | 'pending' | 'paid'
  payment_url?: string
  paid_at?: string
  created_at: string
  updated_at: string
}

export interface InvoiceItem {
  id: string
  invoice_id: string
  description: string
  quantity: number
  rate: number
  amount: number
  created_at: string
}

// utils/currency.ts
export const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount)
}

// utils/date.ts
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}