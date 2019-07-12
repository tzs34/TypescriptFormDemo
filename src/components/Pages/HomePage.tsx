import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import DatePicker from 'react-datepicker'
import { useButtonGroup } from '../Hooks'
import { FormValidator, DepositCostField, Form } from '../../components'

import {
  carSelectValidator,
  dateValidator,
  loanPeriodValidator
} from '../../utils/validators'
import { validationProps } from '../../interfaces/interfaces'

import 'react-datepicker/dist/react-datepicker.css'
import '../../scss/styles.scss'

const initialDate = new Date().toString()
const yearOptions = ['1 Year', '2 Year', '3 Year']

let validated = {}

const NUMBER_FIELDS = 4

const HomePage: React.FunctionComponent<RouteComponentProps> = () => {
  let [validateAttempts, setValidationAttempts] = React.useState(0)
  let [date, setDate] = React.useState(initialDate)

  let validate = validateAttempts > 0

  const loanYearsValidator = loanPeriodValidator(yearOptions)

  let [period, LoanPeriodGroup] = useButtonGroup(
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

  function handleValidation({ id, isValid }: validationProps) {
    validated = { ...validated, ...{ [id]: isValid } }
    if (isFormValid(validated)) {
    }
  }

  function isFormValid(validationObj: object) {
    let validated = Object.values(validationObj)
    return (
      validated.length === NUMBER_FIELDS &&
      validated.every(value => Boolean(value))
    )
  }

  return (
    <div className="form">
      <h2> Loan Details Form </h2>
      <Form onSubmit={submitFormData}>
        <div className="form-section" data-testid="deposit-cost-section">
          <DepositCostField
            validate={validate}
            validationCallback={handleValidation}
          />
        </div>
        <div className="form-section" data-testid="delivery-section">
          <FormValidator
            id="deliveryDate"
            value={date}
            validationFunction={dateValidator}
            validate={validate}
            onValidate={handleValidation}
          >
            <div>
              <label htmlFor={'datepicker'}> Delivery date </label>
              <DatePicker
                id="datepicker"
                selected={new Date(date)}
                onChange={handleDateChange}
                data-testid="date-picker"
              />
            </div>
          </FormValidator>
        </div>
        <div className="form-section" data-testid="loan-years-section">
          <FormValidator
            id="loanPeriod"
            value={period}
            validationFunction={loanYearsValidator}
            validate={validate}
            onValidate={handleValidation}
          >
            <LoanPeriodGroup />
          </FormValidator>
        </div>
      </Form>
    </div>
  )
}

export default HomePage
