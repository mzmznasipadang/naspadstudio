// src/utils/currency.ts
export function formatRupiah(amount: number): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
  
  // Format from string input (e.g., from form)
  export function parseRupiah(value: string): number {
    return Number(value.replace(/[^0-9-]/g, ''));
  }
  
  // For displaying in forms
  export function formatRupiahInput(value: string): string {
    const number = parseRupiah(value);
    if (isNaN(number)) return '';
    return formatRupiah(number);
  }