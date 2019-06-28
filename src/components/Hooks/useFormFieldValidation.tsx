import * as React from 'react'
import { ErrorSuccessIndicator } from '..'

const useFormValidation = (
  reactComponent: React.ReactNode,
  value: string,
  validationFunction: (value: string) => boolean,
  validate: boolean
): [boolean, () => JSX.Element] => {
  const [isValid, setIsValid] = React.useState(false)

  React.useEffect(() => {
    if (validate) {
      setIsValid(validationFunction(value))
    }
  })

  const FormValidator = () => (
    <div className="validation-container">
      <div>{reactComponent}</div>
      {validate && (
        <div>
          <ErrorSuccessIndicator valid={isValid} />
        </div>
      )}
    </div>
  )

  return [isValid, FormValidator]
}

export default useFormValidation
