import * as React from 'react'
import { RouteComponentProps, Link } from '@reach/router'
import { calculateMonthlyPayments } from '../../utils/app-utils'

const PaymentPage: React.FunctionComponent<RouteComponentProps> = ({
  location
}) => {
  const [carSummary, setCarSummary] = React.useState([])
  React.useEffect(() => {
    // here would useFetch hook to get data from the api etc
    // But as we should not do that - we can use mock data

    //const { price, period } = location.state

    let summary = calculateMonthlyPayments(24000, 1)
  }, [])

  return (
    <main className="summary">
      <h1>Loan repayment schedule</h1>
    </main>
  )
}

export default PaymentPage
