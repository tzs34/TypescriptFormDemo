import * as React from 'react'

interface CurrencyOptions{
  locale: string
  style: string
  currency: string
  symbol: string
}

interface StateProps{
  value: string
  error: boolean
  success: boolean
  displayPrice: string
}
const defaultState = {
  value: '',
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
  }, [state.value])
  
  const id = `use-input-${label.replace(' ', '').toLowerCase()}`

  function formatPrice(value: string): string {
    const {locale, currency, style} = currencyOptions
    const formatter = new Intl.NumberFormat(locale,  { style, currency})
    return formatter.format(+value)
  }



  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const {currentTarget:{value}} = e
    let newState = {...defaultState, ...{value}}
    updateState(newState)
  }

  function handleOnBlur() {
    let value = formatPrice(state.value)
    let newState = {...defaultState, ...{value}}
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

  const {error, success, value} = state
  const PriceInput  = () => (
    <>
      <label htmlFor={id}>
        <div>{label}</div>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          onMouseEnter={handleOnKeyDown}
          onBlur={handleOnBlur}
        />
      </label>
  
    </>
  )
  return [state.value, PriceInput, updatePrice]
}

export default usePriceInput
