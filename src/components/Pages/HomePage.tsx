import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import DatePicker from 'react-datepicker'
import { usePriceInput, useDropDown, useRadioGroup } from '../Hooks'
import { FormValidator } from '../../components'
import {
  carPriceValidator,
  carSelectValidator,
  dateValidator,
  loanPeriodValidator
} from '../../utils/validators'

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

  let [price, ValidatingPriceInput] = usePriceInput(
    'Budget amount',
    'enter a price',
    carPriceValidator,
    validate
  )
  let [car, CarDropDown] = useDropDown('Car model', '', options)
  let [period, LoanPeriodGroup] = useRadioGroup('Loan Period', yearOptions)

  function submitFormData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    let attempts = validateAttempts + 1
    setValidationAttempts(attempts)
  }

  function handleDateChange(d) {
    setDate(d.toString())
  }

  return (
    <div className="form">
      <h2> Loan Details Form</h2>
      <form onSubmit={submitFormData}>
        <div className="form-section" tabIndex={0}>
          <ValidatingPriceInput />
        </div>
        <div className="form-section" tabIndex={0}>
          <FormValidator
            value={car}
            validationFunction={carDropDownValidator}
            validate={validateAttempts > 0}
          >
            <CarDropDown />
          </FormValidator>
        </div>
        <div className="form-section" tabIndex={0}>
          <FormValidator
            value={date}
            validationFunction={dateValidator}
            validate={validateAttempts > 0}
          >
            <label htmlFor={'datepicker'}>
              Delivery date
              <DatePicker
                id="datepicker"
                selected={new Date(date)}
                onChange={handleDateChange}
              />
            </label>
          </FormValidator>
        </div>
        <div className="form-section" tabIndex={0}>
          <FormValidator
            value={period}
            validationFunction={loanYearsValidator}
            validate={validateAttempts > 0}
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
