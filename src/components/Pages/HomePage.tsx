import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import DatePicker from 'react-datepicker'
import { usePriceInput, useDropDown, useRadioGroup } from '../Hooks'
import { FormValidator, DepositCostField } from '../../components'

import {
  carPriceValidator,
  carSelectValidator,
  dateValidator,
  loanPeriodValidator
} from '../../utils/validators'
import { validationProps } from '../../interfaces/interfaces'

import 'react-datepicker/dist/react-datepicker.css'
import '../../scss/styles.scss'

const options = ['One', 'Two', 'Three']
const initialDate = new Date().toString()
const yearOptions = [
  { name: '1 Year', value: 1 },
  { name: '2 Year', value: 2 },
  { name: '3 Year', value: 3 }
]

const HomePage: React.FunctionComponent<RouteComponentProps> = () => {
  let [validateAttempts, setValidationAttempts] = React.useState(0)
  let [date, setDate] = React.useState(initialDate)

  let validate = validateAttempts > 0

  const carDropDownValidator = carSelectValidator(options)
  const loanYearsValidator = loanPeriodValidator(yearOptions)

  let [period, LoanPeriodGroup] = useRadioGroup(
    'Loan Period (Years)',
    yearOptions
  )

  function submitFormData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    let attempts = validateAttempts + 1
    setValidationAttempts(attempts)
  }

  function handleDateChange(d) {
    setDate(d.toString())
  }

  function handleValidation(obj: validationProps) {
    console.log(obj)
  }

  function handlValidationCallback([]: validationProps[]) {}

  return (
    <div className="form">
      <h2> Loan Details Form</h2>
      <form onSubmit={submitFormData}>
        <div className="form-section" tabIndex={0}>
          <DepositCostField
            validate={validateAttempts > 0}
            validationCallback={handlValidationCallback}
          />
        </div>
        <div className="form-section" tabIndex={0}>
          <FormValidator
            id="deliveryDate"
            value={date}
            validationFunction={dateValidator}
            validate={validateAttempts > 0}
            onValidate={handleValidation}
          >
            <div>
              <label htmlFor={'datepicker'}> Delivery date </label>
              <DatePicker
                id="datepicker"
                selected={new Date(date)}
                onChange={handleDateChange}
              />
            </div>
          </FormValidator>
        </div>
        <div className="form-section" tabIndex={0}>
          <FormValidator
            id="loanPeriod"
            value={period}
            validationFunction={loanYearsValidator}
            validate={validateAttempts > 0}
            onValidate={handleValidation}
          >
            <LoanPeriodGroup />
          </FormValidator>
        </div>
        <div className="form-section btn-centered">
          <input type="submit" value="Submit Loan" />
        </div>
      </form>
    </div>
  )
}

export default HomePage
