export const refunds = {
  title: 'Refunds',
  columns: ['order', 'amount', 'status'],
  export: { label: 'Export CSV', scope: 'refunds:export', href: '/api/billing/refunds.csv' },
}
