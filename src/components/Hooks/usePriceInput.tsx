import * as React from 'react'
import { useFormFieldValidation } from '../Hooks'
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
  validationFunction: (value: string) => boolean,
  validate: boolean,
  { locale, currency, style, symbol } = defaultCurrencyOptions
): [string, boolean, () => JSX.Element] => {
  const [state, updateState] = React.useState(defaultState)
  const inputRef = React.useRef(null)

  React.useEffect(() => {
    inputRef.current.focus()
  }, [state.amount])

  const id = `use-input-${label.replace(' ', '').toLowerCase()}`

  function formatPrice(value: string): string {
    const formatter = new Intl.NumberFormat(locale, { style, currency })
    return formatter.format(+value)
  }

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const {
      currentTarget: { value }
    } = e
    let amount = +value ? value : '0'
    let newState = { ...defaultState, ...{ amount } }
    updateState(newState)
  }

  function handleOnBlur(e: React.FormEvent<HTMLInputElement>) {
    let current = checkValue(state.amount)
    let amount = formatPrice(current)
    let newState = { ...defaultState, ...{ amount } }
    updateState(newState)
  }

  function checkValue(str: string) {
    if (str.length === 0) {
      return '0'
    }
    if (str.includes(symbol)) {
      return removeFormmating(str)
    }
    return str
  }

  function removeFormmating(str) {
    return str.replace(symbol, '').replace(/[','  '.00']/g, '')
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
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={state.amount}
        onChange={handleOnChange}
        onMouseEnter={handleOnKeyDown}
        onBlur={handleOnBlur}
      />
    </>
  )

  let returnedValue = removeFormmating(state.amount)
  const [isValid, InputValidator] = useFormFieldValidation(
    PriceInput,
    returnedValue,
    validationFunction,
    validate
  )
  return [returnedValue, isValid, InputValidator]
}

export default usePriceInput
