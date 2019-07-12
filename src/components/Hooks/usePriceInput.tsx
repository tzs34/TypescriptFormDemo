import * as React from 'react'
import { removePriceFormmating } from '../../utils/app-utils'

interface CurrencyOptions {
  locale: string
  style: string
  currency: string
  symbol: string
}

interface StateProps {
  amount: string
}
const defaultState = {
  amount: ''
}

const defaultCurrencyOptions = {
  locale: 'en-GB',
  style: 'currency',
  currency: 'GBP',
  symbol: '£'
}

const usePriceInput = (
  label: string,
  placeholder: string,
  disabled: boolean = false,
  { locale, currency, style, symbol } = defaultCurrencyOptions
): [string, () => JSX.Element] => {
  const [state, updateState] = React.useState(defaultState)
  const inputRef = React.useRef(null)

  React.useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [state.amount])

  const id = `${label.replace(' ', '').toLowerCase()}`

  function formatPrice(value: string): string {
    const formatter = new Intl.NumberFormat(locale, { style, currency })
    return formatter.format(+value)
  }

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const {
      currentTarget: { value }
    } = e
    let current = checkValue(value)
    let amount = formatPrice(current)
    let newState = { ...defaultState, ...{ amount } }
    updateState(newState)
  }

  function checkValue(str: string) {
    if (str.length === 0) {
      return '0'
    }
    if (str.includes(symbol)) {
      return removePriceFormmating(str)
    }
    return str
  }

  function handleOnKeyDown(e: React.MouseEvent) {
    updateState(defaultState)
  }

  function updatePrice(val: string) {
    let value = formatPrice(val)
    let newState = { ...defaultState, ...{ value } }
    updateState(newState)
  }

  const PriceInput = () => (
    <div data-testid={`price-input-${id}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={inputRef}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        value={state.amount}
        onChange={handleOnChange}
        onMouseEnter={handleOnKeyDown}
        tabIndex={0}
      />
    </div>
  )

  let returnedValue = removePriceFormmating(state.amount)
  return [returnedValue, PriceInput]
}

export default usePriceInput
