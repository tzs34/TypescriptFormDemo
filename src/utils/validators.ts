const LOWEST_PRICE = 500
const HIGHEST_PRICE = 200000
const CURRENT_DATE = new Date()
const isNumeric = (value: any) => !isNaN(value - parseFloat(value))

const carPriceValidator = (value: string) => {
  if (isNumeric(value)) {
    return Number(value) >= LOWEST_PRICE && Number(value) <= HIGHEST_PRICE
  }
  return false
}

const dateValidator = d => {
  console.log(d >= CURRENT_DATE)
  return new Date(d) >= CURRENT_DATE
}

const loanPeriodValidator = options => period =>
  options.find(el => el.value === period)

const carSelectValidator = options => value => {
  return options.includes(value)
}

export {
  carPriceValidator,
  carSelectValidator,
  dateValidator,
  loanPeriodValidator
}
