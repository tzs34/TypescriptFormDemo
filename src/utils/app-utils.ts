import { carDataProps } from '../interfaces/interfaces'
import { isNumericLiteral } from '@babel/types'
import { dateValidator } from './validators'
import { number, object } from 'prop-types'

const YEAR_MONTHS = 12
const ADD_MONTH = 1

const months = [
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
]
// fees are in GDP
export const appConstants = {
  firstMonthFee: 88,
  lastMonthFee: 20,
  minDepositAmount: 15,
  displayNumberCars: 6
}

const { firstMonthFee, lastMonthFee } = appConstants

const DEFAULT_LOCALE = 'en-GB'
const dateFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

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

const isNumeric = (value: string): boolean => !isNaN(Number(value))

function formatLocalDateString(
  date: Date,
  locale: string = DEFAULT_LOCALE,
  options: object = dateFormatOptions
) {
  return date.toLocaleDateString(locale, options)
}

export const removePriceFormmating = (str: string, symbol: string = '£') => {
  return str.replace(symbol, '').replace(/[','  '.00']/g, '')
}

export function calculateMonthlyPayments(price: number, period: number): {} {
  let repaymentDates = {}
  let yearIndex = 1
  let currentDate = new Date()
  let currentYear = currentDate.getFullYear()
  let firstPaymentMonth = currentDate.getMonth() + ADD_MONTH
  let monthyFee = monthlyCost(price, period)
  let numberMonths = period * YEAR_MONTHS
  let remainingMonthsCurrentYear = YEAR_MONTHS - firstPaymentMonth

  if (remainingMonthsCurrentYear > 0) {
    let months = getFirstMondayofMonth(currentYear, firstPaymentMonth)
    repaymentDates[currentYear] = months

    numberMonths = numberMonths - remainingMonthsCurrentYear
  }

  while (numberMonths > 0) {
    currentYear++
    let months = getFirstMondayofMonth(currentYear)
    repaymentDates[currentYear] = months
    yearIndex++
    numberMonths = numberMonths - YEAR_MONTHS
  }

  repaymentDates['monthlyCost'] = monthyFee
  repaymentDates['firstMonthFee'] = firstMonthFee
  repaymentDates['lastMonthFee'] = lastMonthFee
  return repaymentDates
}

function monthlyCost(price: number, period: number): number {
  let cost = price - (firstMonthFee + lastMonthFee)
  let loanTerm = period * YEAR_MONTHS
  return cost / loanTerm
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
  displayCarNumber: number,
  currencyOptions: CurrencyOptions = defaultCurrencyOptions
) {
  let availableCars = data.searchResults
    .filter(obj => obj.isReserved)
    .filter(o => o.salesInfo.pricing.cashPrice >= budget)
    .sort(
      (a, b) => b.salesInfo.pricing.cashPrice - a.salesInfo.pricing.cashPrice
    )

  let formattedCars = availableCars.map(o => {
    let realPrice = o.salesInfo.pricing.cashPrice + lastMonthFee + firstMonthFee
    let price = formatPrice(String(realPrice))
    return {
      make: o.make,
      description: o.title.name,
      price
    }
  })
  return formattedCars
}

export function getFirstMondayofMonth(year: number, startMonth: number = 0) {
  let result = [],
    month

  let monthsToUse = startMonth > 0 ? months.slice(startMonth, -1) : months

  for (month of monthsToUse) {
    let d = new Date(`${month} 01,  ${year}  00:00:00`)
    let dateStr = getMondays(d)[0].toDateString()
    result.push(dateStr)
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
