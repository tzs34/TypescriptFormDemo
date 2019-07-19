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

  let isValid = validationFunction(value)
  return (
    <div className="validation-container">
      <div>{children}</div>
      <div className={`${isValid ? 'show' : 'hide'}`}>
        <ErrorSuccessIndicator id={id} valid={isValid} />
      </div>
    </div>
  )
}

export default FormValidator
