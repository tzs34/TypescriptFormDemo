import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import usePriceInput from '../Hooks/usePriceInput'
import useDropDown from '../Hooks/useDropDown'

const HomePage: React.FunctionComponent<RouteComponentProps> = () => {

const [price, PriceInput, setPrice] = usePriceInput('Price', 'enter a price')
const [selected, DropDown, setSelected] = useDropDown("Cars", "", ["One", "Two", "Three"])
  
  function submitFormData(e: React.FormEvent<HTMLFormElement>) {}
  return (
    <div>
      <form onSubmit={submitFormData}>
        <div>
          <PriceInput />
        </div>
        <div>
          <DropDown />
        </div>
      </form>
    </div>
  )
}

export default HomePage
