export function numberWithCommas(x: string | number) {
  if (typeof x === 'string') return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
