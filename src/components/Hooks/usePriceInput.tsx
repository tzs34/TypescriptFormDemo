import * as React from 'react'
import {
  removePriceFormmating,
  formatPrice,
  isCurrencyFormatted
} from '../../utils/app-utils'
interface StateProps {
  amount: string
}
const defaultState = {
  amount: ''
}

const usePriceInput = (
  label: string,
  placeholder: string,
  disabled: boolean = false
): [string, () => JSX.Element] => {
  const [state, updateState] = React.useState(defaultState)
  const inputRef = React.useRef(null)

  React.useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [state.amount])

  const id = `${label.replace(' ', '').toLowerCase()}`

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
    if (isCurrencyFormatted(str)) {
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
console.log(`${id} and disbaled = ${disabled}`)
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
