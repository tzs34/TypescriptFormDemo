const LOWEST_PRICE = 500
const HIGHEST_PRICE = 200000
const DEPOSIT = 20
const CURRENT_DATE = new Date()
const isNumeric = (value: any) => !isNaN(value - parseFloat(value))

const carPriceValidator = (price: string) => {

  console.log(` carPriceValidator price = ${price} and isNumeric(price) = ${isNumeric(price)}`)
  if (isNumeric(price)) {
    return Number(price) >= LOWEST_PRICE && Number(price) <= HIGHEST_PRICE
  }
  return false
}

const carDepositValidator = (price: string) => (deposit: string) => {
  if (isNumeric(deposit) && isNumeric(price)) {
    return Number(deposit) * DEPOSIT >= Number(price)
  }
  return false
}
const dateValidator = d => new Date(d) >= CURRENT_DATE

const loanPeriodValidator = options => period =>
  options.findIndex(el => el === period) !== -1

const carSelectValidator = options => value => {
  return options.includes(value)
}

export {
  carPriceValidator,
  carSelectValidator,
  carDepositValidator,
  dateValidator,
  loanPeriodValidator
}
