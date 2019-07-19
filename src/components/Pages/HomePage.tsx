import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { 
  FormValidator, 
  Form, 
  ValidatedCarPriceInput, 
  ValidatedCarDepositInput, 
  ValidatedDatePicker,
  ValidatedLoanPeriod
} from '../../components'
import Copy from '../../utils/copy'
import { carDepositValidator } from '../../utils/validators'

import '../../scss/styles.scss'

const { headers:{loadHeader} } = Copy

const HomePage: React.FunctionComponent<RouteComponentProps> = ({
  navigate
}) => {

  let [{value:price, isValid:validPrice}, ValidatedPriceInput] = ValidatedCarPriceInput()
  let [{value: deposit, isValid:validDeposit}, ValidatedDepositInput] =  ValidatedCarDepositInput(price)
  let disabledDeliveryDate = carDepositValidator(price)(deposit)
  let [{value: deliveryDate, isValid:validDeliveryDate}, ValidatedDatePickerInput] = ValidatedDatePicker(!disabledDeliveryDate)
  let [{value: loanPeriod, isValid:validLoanPeriod}, ValidatedLoanPeriodBtnGroup] = ValidatedLoanPeriod()

  function submitFormData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(isValidForm()){
      navigate('/search-details', {
        state: {price}
      })
    }
  }

  function isValidForm(){
    return validPrice && validDeposit && validDeliveryDate && validLoanPeriod
  }

  return (
    <main>
      <div className="form">
        <h2> Loan Details Form </h2>
        <Form onSubmit={submitFormData}>
          <div className="form-section">
              <ValidatedPriceInput/>
          </div>
          <div className="form-section">
              <ValidatedDepositInput/>
          </div>
          <div className="form-section">
              <ValidatedDatePickerInput/>
          </div>
          <div className="form-section">
              <ValidatedLoanPeriodBtnGroup/>
          </div>
        </Form>
      </div>
    </main>
  )
}

export default HomePage
