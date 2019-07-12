import * as React from 'react'

interface FormProps {
  onSubmit: (e: React.FormEvent) => void
  buttonLabel?: string
}

const LoanForm: React.FunctionComponent<FormProps> = ({
  onSubmit,
  buttonLabel = 'Submit',
  children
}) => (
  <form onSubmit={onSubmit} noValidate>
    {children}
    <div className="form-button">
      <button type="submit">{buttonLabel}</button>
    </div>
  </form>
)

export default LoanForm
