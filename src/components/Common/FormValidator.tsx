import * as React from 'react'
import { ErrorSuccessIndicator } from '../../components'

interface validatioProps {
  id: string
  isValid: boolean
}
interface FormValidatorProps {
  value: string | number
  validationFunction: (value: string | number) => boolean
  validate?: boolean
}

const FormValidator: React.FunctionComponent<FormValidatorProps> = ({
  children,
  value,
  validationFunction,
  validate = false
}) => {
  const [valid, setValid] = React.useState(false)

  React.useEffect(() => {
    if (validate) {
      let isValid = setValid(validationFunction(value))
    }
  })

  return (
    <div className="validation-container">
      <div>{children}</div>
      {validate && (
        <div>
          <ErrorSuccessIndicator valid={valid} />
        </div>
      )}
    </div>
  )
}

export default FormValidator
