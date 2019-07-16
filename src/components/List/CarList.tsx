import * as React from 'react'

interface dataProps {
  make: string
  description: string
  price: string
}
interface ListProps {
  data: dataProps[]
  onClick: (price: string) => void
  printPDF?: (price: string) => void
}
const CarList: React.FunctionComponent<ListProps> = ({
  data,
  onClick,
  printPDF = null
}) => {
  return (
    <li>
      {data.map(({ make, description, price }, index) => (
        <div className="car-display-container" key={`${index}${description}`}>
          <div>
            <div>{`Car Make:  ${make}`}</div>
            <div>{`Car Details:  ${description}`}</div>
            <div>{`Car Price:  ${price}`}</div>
          </div>
          <div>
            <button onClick={() => onClick(price)}>
              {'Loan Payment Summary'}
            </button>
            {printPDF && (
              <button onClick={() => printPDF(price)}>{'Print PDF'}</button>
            )}
          </div>
        </div>
      ))}
    </li>
  )
}

export default CarList
