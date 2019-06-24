import * as React from 'react'

const defaultState = {
  value: 0,
  error: null,
}
const usePriceInput = (label, placeholder, locale = 'en-GB') => {
  const [state, updateState] = React.useState(defaultState)
  const id = `use-input-${label.replace(' ', '').toLowerCase()}`

  function formatPrice(value: number): string {
    const formatter = new Intl.NumberFormat(locale)
    return formatter.format(value)
  }

  function handleOnBlur(e: React.FormEvent<HTMLInputElement>) {
    let newState = { ...defaultState, ...{ value: +e.currentTarget.value } }
    updateState(newState)
  }

  function handleOnKeyDown(e: React.MouseEvent) {
    updateState(defaultState)
  }

  let { value, error } = state

  const PriceInput = () => (
    <>
      <label htmlFor={id}>
        {label}
        <input
          type="text"
          placeholder={placeholder}
          value={formatPrice(value)}
          onBlur={e => handleOnBlur(e)}
          onMouseEnter={handleOnKeyDown}
        />
      </label>
      {error && <span>{error}</span>}
    </>
  )
  return [state, PriceInput, updateState]
}

export default usePriceInput
