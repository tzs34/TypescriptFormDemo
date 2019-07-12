import * as React from 'react'
import { Router } from '@reach/router'
import HomePage from './components/Pages/HomePage'
import SummaryPage from './components/Pages/SummaryPage'

const App = () => {
  return (
    <div>
      <Router>
        <HomePage path="/" />
        <SummaryPage path="/details" />
      </Router>
    </div>
  )
}

export default App
