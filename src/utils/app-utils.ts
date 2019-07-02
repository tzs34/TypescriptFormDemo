export const removePriceFormmating = (str: string, symbol: string = '£') => {
  return str.replace(symbol, '').replace(/[','  '.00']/g, '')
}
