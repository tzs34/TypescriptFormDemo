import * as React from 'react'
import { Router } from '@reach/router'
import { HomePage, SummaryPage } from './components'

const App = () => (
  <div>
    <Router>
      <HomePage path="/" />
      <SummaryPage path="/details/:id" />
    </Router>
  </div>
)

export default App
