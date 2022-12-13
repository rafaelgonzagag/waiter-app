export function formatCurrency(valor: number) {
  return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(valor);
}
