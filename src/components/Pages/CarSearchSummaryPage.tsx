import * as React from 'react'
import { RouteComponentProps, Link } from '@reach/router'
import mockData from '../../utils/mockData'
import { processCarData, appConstants } from '../../utils/app-utils'
import { CarList } from '..'
const SummaryPage: React.FunctionComponent<RouteComponentProps> = ({
  location,
  navigate
}) => {
  const [carData, setCarData] = React.useState([])
  React.useEffect(() => {
    // here would useFetch hook to get data from the api etc
    // But as we should not do that - we can use mock data
    //location.state.price
    let data = processCarData(mockData, 24000, appConstants.displayNumberCars)

    setCarData(data)
  }, [])

  function handleOnClick(price) {
    navigate('/payment-details', {
      state: { price }
    })
  }

  function handlePrintPDF(price) {}

  return (
    <main className="summary">
      <h1>Results of car search</h1>
      <div className="summary-table-container">
        <CarList
          data={carData}
          onClick={handleOnClick}
          printPDF={handlePrintPDF}
        />
      </div>
    </main>
  )
}

export default SummaryPage
