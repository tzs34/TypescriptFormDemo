import * as React from 'react'

interface dataProps {
  make: string
  description: string
  price: string
}
interface ListProps {
  data: any[]
  onClick?: (e: React.MouseEvent) => void
}
const CarList: React.FunctionComponent<ListProps> = ({ data, onClick }) => (
  <li>
    {data.map(({ make, description, price }) => {
      return (
        <div className="car-list-container">
          <div>make</div>
          <div>description</div>
          <div>price</div>
        </div>
      )
    })}
  </li>
)

export default CarList
