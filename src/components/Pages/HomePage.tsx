import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import DatePicker from 'react-datepicker'
import { useButtonGroup, usePriceInput } from '../Hooks'
import { FormValidator, Form } from '../../components'

import {
  carPriceValidator,
  carDepositValidator,
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

const HomePage: React.FunctionComponent<RouteComponentProps> = ({
  navigate
}) => {
  let [price, PriceInput] = usePriceInput('Car Price', 'Enter a total price')

  let [deposit, DepositInput] = usePriceInput(
    'Deposit amount',
    'Enter a deposit',
    !carPriceValidator(price)
  )
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
      navigate('/details', {
        state: { validated, price, deposit, date, period }
      })
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
    <main>
      <div className="form">
        <h2> Loan Details Form </h2>
        <Form onSubmit={submitFormData}>
          <div className="form-section">
            <FormValidator
              id="price"
              value={price}
              validationFunction={carPriceValidator}
              validate={validate}
              onValidate={handleValidation}
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
              onValidate={handleValidation}
            >
              <DepositInput />
            </FormValidator>
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
    </main>
  )
}

export default HomePage
