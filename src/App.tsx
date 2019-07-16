import * as React from 'react'
import { Router } from '@reach/router'
import {
  HomePage,
  CarSearchSummaryPage,
  PaymentSummaryPage
} from './components/Pages'

const App = () => {
  return (
    <div>
      <Router>
        <HomePage path="/search-details" />
        <CarSearchSummaryPage path="/" />
        <PaymentSummaryPage path="/payment-details" />
      </Router>
    </div>
  )
}

export default App
