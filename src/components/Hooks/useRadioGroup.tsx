import * as React from 'react'

interface GroupData {
  name: string
  value: number
}

const useRadioGroup = (
  label: string,
  group: GroupData[] = []
): [number, () => JSX.Element, (value: number) => void] => {
  const [state, updateState] = React.useState(group[0].value)

  const RadioGroup = () => {
    function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
      updateState(Number(e.currentTarget.value))
    }
    return (
      <fieldset>
        <legend>{label}</legend>
        {group.map(({ name, value }, index) => {
          let checked = value === state
          let id = `${index}${value}`
          return (
            <div>
              <input
                type="radio"
                id={id}
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
