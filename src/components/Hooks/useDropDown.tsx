import * as React from 'react'

function useDropdown(
  label: string,
  defaultState: string,
  options: string[]
): [string, () => JSX.Element, (newState: string) => void] {
  const [state, updateState] = React.useState(defaultState)
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`
  const Dropdown = () => {
    function handleOnChange(e: React.FormEvent<HTMLSelectElement>) {
      updateState(e.currentTarget.value)
    }

    return (
      <>
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          value={state}
          onChange={handleOnChange}
          disabled={!options.length}
        >
          <option />
          {options.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </>
    )
  }
  return [state, Dropdown, updateState]
}

export default useDropdown
