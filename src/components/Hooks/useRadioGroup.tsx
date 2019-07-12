import * as React from 'react'

interface GroupData {
  name: string
  value: number
}

const useRadioGroup = (
  label: string,
  group: GroupData[] = []
): [number, () => JSX.Element, (value: number) => void] => {
  const [state, updateState] = React.useState(0)

  const RadioGroup = () => {
    function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
      updateState(Number(e.currentTarget.value))
    }
    return (
      <fieldset data-testid="radio-group">
        <legend>{label}</legend>
        {group.map(({ name, value }, index) => {
          let checked = value === state
          let id = `${index}${value}`
          return (
            <div
              key={id}
              className="radio-button"
              data-testid={`radio-button-${index}`}
            >
              <label htmlFor={name}>{value}</label>
              <input
                type="radio"
                id={name}
                name={name}
                value={value}
                key={`${index}${value}`}
                checked={checked}
                onChange={handleOnChange}
              />
              <label htmlFor={id} />
            </div>
          )
        })}
      </fieldset>
    )
  }

  return [state, RadioGroup, updateState]
}

export default useRadioGroup
