import * as React from 'react'
import ErrorIcon from '../../assets/svg/error'
import Successicon from '../../assets/svg/success'

interface ErrorSuccessProps {
  valid: boolean
}
const ErrorSuccessIndicator: React.FunctionComponent<ErrorSuccessProps> = ({
  valid
}) => <div>{valid ? <Successicon /> : <ErrorIcon />}</div>

export default ErrorSuccessIndicator
