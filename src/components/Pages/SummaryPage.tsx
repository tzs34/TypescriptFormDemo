import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

const SummaryPage: React.FunctionComponent<
  RouteComponentProps<{ id: string }>
> = ({ location }) => {
  console.log(location.state)
  return <div>Summary</div>
}

export default SummaryPage
