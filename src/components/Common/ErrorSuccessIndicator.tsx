import * as React from 'react'
import ErrorIcon from '../../assets/svg/error'
import Successicon from '../../assets/svg/success'

interface ErrorSuccessProps {
  id: string
  valid: boolean
}
const ErrorSuccessIndicator: React.FunctionComponent<ErrorSuccessProps> = ({
  id,
  valid
}) => <div data-testid={`${id}-${valid}`}>{valid ? <Successicon /> : <ErrorIcon />}</div>

export default ErrorSuccessIndicator
