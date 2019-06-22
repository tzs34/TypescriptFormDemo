import * as React from 'react'
import { Router } from '@reach/router'
import { Home, Details, LoanForm } from './components'

const App = () => (
  <div>
    <Router>
      <Home path="/" />
      <Details path="/details/:id" />
      <LoanForm path="/search-params" />
    </Router>
  </div>
)

export default App
