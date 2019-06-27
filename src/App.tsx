import * as React from 'react'
import { Router } from '@reach/router'
import HomePage from './components/Pages/HomePage'
import SummaryPage from './components/Pages/SummaryPage'

const App = () => (
  <div>
    <Router>
      <HomePage path="/" />
      <SummaryPage path="/details/:id" />
    </Router>
  </div>
)

export default App
