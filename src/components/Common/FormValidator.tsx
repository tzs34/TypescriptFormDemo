import * as React from 'react'
import { ErrorSuccessIndicator } from '../../components'
import { validationProps } from '../../interfaces/interfaces'

interface FormValidatorProps {
  children: React.ReactChild
  id: string
  value: string | number
  validationFunction: (value: string | number) => boolean
  onValidate?: (obj: validationProps) => void
  validate?: boolean
}

const FormValidator: React.FunctionComponent<FormValidatorProps> = ({
  children,
  id,
  value,
  validationFunction,
  onValidate,
  validate = false
}) => {
  const [valid, setValid] = React.useState(false)

  React.useEffect(() => {
    if (validate) {
      let isValid = validationFunction(value)
      setValid(isValid)
      if (onValidate) {
        onValidate({ id, isValid })
      }
    }
  })

  return (
    <div className="validation-container">
      <div>{children}</div>
      <div className={`${validate ? 'show' : 'hide'}`}>
        <ErrorSuccessIndicator valid={valid} />
      </div>
    </div>
  )
}

export default FormValidator
