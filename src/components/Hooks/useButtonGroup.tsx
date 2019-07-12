import * as React from 'react'

const useButtonGroup = (
  label: string,
  buttons: string[] = []
): [string, () => JSX.Element] => {
  const [state, updateState] = React.useState('')
  const [focused, setFocused] = React.useState('')

  const ButtonGroup = () => {
    function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
      updateState(e.currentTarget.value)
    }

    return (
      <div className="button-row">
        <div>{label}</div>

        {buttons.map((name, index) => {
          let id = `${index}${name}`
          return (
            <div key={name} data-testid={`group-button-${index}`}>
              <button
                type="button"
                value={name}
                onClick={handleOnClick}
                className="group-btn"
              >
                {name}
              </button>
            </div>
          )
        })}
      </div>
    )
  }

  return [state, ButtonGroup]
}

export default useButtonGroup
