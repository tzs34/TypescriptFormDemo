import * as React from 'react'

interface CurrencyOptions{
  locale: string
  style: string
  currency: string
  symbol: string
}

interface StateProps{
  amount: string
  error: boolean
  success: boolean
}
const defaultState = {
  amount: '',
  error: false,
  success: false
}

const defaultCurrencyOptions = {
  locale: 'en-GB',
  style: 'currency',
  currency: 'GBP',
  symbol: '£'
}

const usePriceInput = (label:string, placeholder:string, currencyOptions = defaultCurrencyOptions) : [string, () => JSX.Element, (value: string) => void] => {
  const [state, updateState] = React.useState(defaultState)
  const inputRef = React.useRef(null)

  React.useEffect(()=>{
    inputRef.current.focus()
  }, [state.amount])

  const id = `use-input-${label.replace(' ', '').toLowerCase()}`

  function formatPrice(value: string): string {
    const {locale, currency, style} = currencyOptions
    const formatter = new Intl.NumberFormat(locale,  { style, currency})
    return formatter.format(+value)
  }


  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const {currentTarget:{value}} = e
     let amount = +value ? value : '0'
    let newState = {...defaultState, ...{amount}}
    updateState(newState)
  }

  function handleOnBlur() {
    let amount = formatPrice(state.amount)
    let newState = {...defaultState, ...{amount}}
    updateState(newState)
  }


  function handleOnKeyDown(e: React.MouseEvent) {
    updateState(defaultState)
  }

  function updatePrice(val: string) {
    let value = formatPrice(val)
    let newState = {...defaultState, ...{value}}
    updateState(newState)
  }


  const {error, success, amount} = state
  const PriceInput  = () => (
    <>
      <label htmlFor={id}>
        <div>{label}</div>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={amount}
          onChange={handleOnChange}
          onMouseEnter={handleOnKeyDown}
          onBlur={handleOnBlur}
        />
      </label>
  
    </>
  )
  return [state.amount, PriceInput, updatePrice]
}

export default usePriceInput
