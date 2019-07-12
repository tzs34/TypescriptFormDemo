import * as React from 'react'
import { usePriceInput } from '../Hooks'
import { FormValidator } from '../../components'
import { carPriceValidator, carDepositValidator } from '../../utils/validators'

import { validationProps } from '../../interfaces/interfaces'

interface DepositCostProps {
  validate: boolean
  validationCallback: (obj: validationProps) => void
  disabled?: boolean
}
const DepositCostField: React.FunctionComponent<DepositCostProps> = ({
  validate,
  validationCallback
}) => {
  let [price, PriceInput] = usePriceInput('Car Price', 'Enter a total price')

  let [deposit, DepositInput] = usePriceInput(
    'Deposit amount',
    'Enter a deposit',
    !carPriceValidator(price)
  )
  function handleOnValidate(obj: validationProps) {
    if (validationCallback) {
      validationCallback(obj)
    }
  }

  return (
    <div data-testid="cost-price">
      <div className="form-section">
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
      <div className="form-section">
        <FormValidator
          id="deposit"
          value={deposit}
          validationFunction={carDepositValidator(price)}
          validate={validate}
          onValidate={handleOnValidate}
        >
          <DepositInput />
        </FormValidator>
      </div>
    </div>
  )
}

export default DepositCostField
