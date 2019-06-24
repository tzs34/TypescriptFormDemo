import * as React from 'react'

const useRadioGroup = (label, group = []) => {
  const [state, updateState] = React.useState('')

  const RadioGroup = () => (
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
            />
            <label htmlFor={id} />
          </div>
        )
      })}
    </fieldset>
  )
  return [state, RadioGroup, updateState]
}

export default useRadioGroup
