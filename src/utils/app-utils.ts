import { carDataProps } from '../interfaces/interfaces'

interface CurrencyOptions {
  locale: string
  style: string
  currency: string
  symbol: string
}

const defaultCurrencyOptions = {
  locale: 'en-GB',
  style: 'currency',
  currency: 'GBP',
  symbol: '£'
}

export const removePriceFormmating = (str: string, symbol: string = '£') => {
  return str.replace(symbol, '').replace(/[','  '.00']/g, '')
}

export const formatPrice = (
  value: string,
  curencyOptions: CurrencyOptions = defaultCurrencyOptions
): string => {
  const { locale, style, currency } = curencyOptions
  const formatter = new Intl.NumberFormat(locale, { style, currency })
  return formatter.format(+value)
}

export const isCurrencyFormatted = (str: string) => str.includes('.00')

export function processCarData(
  data: carDataProps,
  budget: number,
  currencyOptions: CurrencyOptions = defaultCurrencyOptions
) {
  let availableCars = data.searchResults
    .filter(obj => obj.isReserved)
    .filter(o => o.salesInfo.pricing.cashPrice >= budget)
    .sort(
      (a, b) => b.salesInfo.pricing.cashPrice - a.salesInfo.pricing.cashPrice
    )

  let formattedCars = availableCars.map(o => {
    let price = formatPrice(String(o.salesInfo.pricing.cashPrice))
    return {
      make: o.make,
      description: o.title.name,
      price
    }
  })

  return formattedCars
}

export function getMondayofMonth(year: number) {
  let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    result = {},
    month

  for (month of months) {
    let d = new Date(`${month} 01, year 00:00:00`)
    result[month] = getMondays(d)
  }

  return result
}

function getMondays(d: Date) {
  let month = d.getMonth(),
    mondays = []

  d.setDate(1)

  // Get the first Monday in the month
  while (d.getDay() !== 1) {
    d.setDate(d.getDate() + 1)
  }

  // Get all the other Mondays in the month
  while (d.getMonth() === month) {
    mondays.push(new Date(d.getTime()))
    d.setDate(d.getDate() + 7)
  }

  return mondays
}

// fees are in GDP
export const appConstants = {
  firstMonthFee: 88,
  lastMonthFee: 20,
  minDepositAmount: 15,
  displayNumberCars: 6
}
