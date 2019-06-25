import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import usePriceInput from '../Hooks/usePriceInput'

const HomePage: React.FunctionComponent<RouteComponentProps> = () => {

const [price, PriceInput, setPrice] = usePriceInput('Price', 'enter a price')

  
  function submitFormData(e: React.FormEvent<HTMLFormElement>) {}
  return (
    <div>
      <form onSubmit={submitFormData}>
        <div>
          <PriceInput />
        </div>
      </form>
    </div>
  )
}

export default HomePage
