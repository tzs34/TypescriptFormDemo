import * as React from 'react'
import { usePriceInput } from '../Hooks'
import { FormValidator } from '../../components'
import { carPriceValidator, carDepositValidator } from '../../utils/validators'

import { validationProps } from '../../interfaces/interfaces'

interface DepositCostProps {
  validate: boolean
  validationCallback: ([]: validationProps[]) => void
}
const DepositCostField: React.FunctionComponent<DepositCostProps> = ({
  validate,
  validationCallback
}) => {
  let [deposit, DepositInput] = usePriceInput(
    'Deposit amount',
    'enter a deposit'
  )
  let [price, PriceInput] = usePriceInput(
    'Budget amount',
    'enter a total price'
  )
  let [validationValues, setValidationValues] = React.useState([])

  React.useEffect(() => {
    if (validationCallback) {
      validationCallback(validationValues)
    }
  }, [validate])

  function handleOnValidate(obj: validationProps) {
    setValidationValues(validationValues.concat(obj))
  }
  return (
    <>
      <div className="form-section" tabIndex={0}>
        <FormValidator
          id="price"
          value={price}
          validationFunction={carPriceValidator}
          validate={validate}
          onValidate={handleOnValidate}
        >
          <PriceInput />
        </FormValidator>
      </div>
      <div className="form-section" tabIndex={0}>
        {price && (
          <FormValidator
            id="deposit"
            value={deposit}
            validationFunction={carDepositValidator(price)}
            validate={validate}
            onValidate={handleOnValidate}
          >
            <DepositInput />
          </FormValidator>
        )}
      </div>
    </>
  )
}

export default DepositCostField
