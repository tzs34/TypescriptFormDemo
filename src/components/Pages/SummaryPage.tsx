import * as React from 'react'
import { RouteComponentProps, Link } from '@reach/router'
import mockData from '../../utils/mockData'
import { processCarData, appConstants } from '../../utils/app-utils'
import { CarList } from '../../components'
const SummaryPage: React.FunctionComponent<
  RouteComponentProps<{ id: string }>
> = ({ location }) => {
  const [carData, setCarData] = React.useState([])
  React.useEffect(() => {
    // here would useFetch hook to get data from the api etc
    // But as we should not do that - we can use mock data

    let data = processCarData(mockData, location.state.price)
    const { displayNumberCars } = appConstants
    if (data.length < displayNumberCars) {
      setCarData(data)
    } else {
      setCarData(data.slice(0, displayNumberCars))
    }
  }, [])

  return (
    <div>
      <CarList data={carData} />
    </div>
  )
}

export default SummaryPage
