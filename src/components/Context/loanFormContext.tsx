import * as React from 'react'

interface ContextProps {
  state: object
  dispatch: (obj: object) => void
}

const LoanFormContext = React.createContext({} as ContextProps)

const LoanFormProvider = props => {
  const [loanFormState, setLoanFormState] = React.useState({})
  return (
    <LoanFormContext.Provider value={props.value}>
      {props.children}
    </LoanFormContext.Provider>
  )
}

export { LoanFormContext, LoanFormProvider }
