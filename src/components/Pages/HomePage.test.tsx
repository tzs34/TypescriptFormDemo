/** Import React */
import * as React from 'react'

/** Import Test Enviroment */
import { render, fireEvent } from '@testing-library/react'

/** Import Tested Component */
import HomePage from './HomePage'
import Copy from '../../utils/copy'

const {
  labels:{deliveryLabel, depositLabel, submitLabel, priceLabel, periodLabel}, 
  headers:{loadHeader}, 
  placeholders:{ carPlaceholder, depositPlaceholder, datePlaceholder}
} = Copy

describe(`<HomePage/>`, () => {
  let wrapper
  beforeEach(() => {
    wrapper = render(<HomePage />)
  })

  it('should render without error', () => {
    expect(wrapper.container).toBeDefined()
    expect(wrapper.container).not.toBeNull()
  })
  it('should render the title text', () => {
    const { getByText, gtByTestId } = wrapper
    expect(getByText('Loan Details Form')).toBeDefined()
    expect(getByText('Loan Details Form')).toBeVisible()
  })
  it('should render the expected labels of the form', () => {
    const { getByLabelText, getByText } = wrapper
    expect(getByLabelText(priceLabel)).toBeDefined()
    expect(getByLabelText(depositLabel)).toBeDefined()
    expect(getByLabelText(deliveryLabel)).toBeDefined()
    expect(getByText(periodLabel)).toBeDefined()
  })
  it('should render the expected inputs of the form', () => {
    const { getByLabelText, getByText } = wrapper
    expect(getByLabelText(priceLabel)).toBeDefined()
    expect(getByLabelText(depositLabel)).toBeDefined()
  })
  it('should have the deposit input disabled on first render of the form', () => {
    const { getByLabelText}  = wrapper
    expect(getByLabelText(depositLabel)).toBeDisabled()
  })
  it('should render the submit button of the form', () => {
    const { getByLabelText, getByText } = wrapper
    expect(getByText(submitLabel)).toBeDefined()
  })
  it('should render the inputs of the form', () => {
    const { getByPlaceholderText } = wrapper
    expect(getByPlaceholderText(carPlaceholder)).toBeDefined()
    expect(getByPlaceholderText(depositPlaceholder)).toBeDefined()
  })
  it('should render the correct input placeholder texts', () => {
    const { getByPlaceholderText} = wrapper
    expect(getByPlaceholderText(carPlaceholder)).toBeDefined()
    expect(getByPlaceholderText(depositPlaceholder)).toBeDefined()
    expect(getByPlaceholderText(datePlaceholder)).toBeDefined()
  })
  it('should render the buttons to select loan period of the form', () => {
    const { getByTestId } = wrapper
    expect(getByTestId('group-button-0')).toBeDefined()
    expect(getByTestId('group-button-1')).toBeDefined()
    expect(getByTestId('group-button-2')).toBeDefined()
  })
  it('should display a formatted  price when value entered into the price input', () => {
    const { getByLabelText, getByText } = wrapper
    const priceInput = getByLabelText(priceLabel)

    fireEvent.change(priceInput, {target:{value: 24000}})
    expect(getByLabelText(priceLabel)).toHaveAttribute('value', '£24,000.00')
    
  })
  it('should display an active deposit input when value entered into the price input', () => {
    const { getByLabelText, getByText } = wrapper
    const priceInput = getByLabelText(priceLabel)

    fireEvent.change(priceInput, {target:{value: 24000}})
    expect(getByLabelText(depositLabel)).toHaveAttribute('disabled', '')
    
  })
  it('should validate the from as expected', () => {
    const { getByTestId, getByLabelText, getByText } = wrapper
    const priceInput = getByLabelText(priceLabel)
    const depositInput = getByLabelText(depositLabel)
    const deliveryInput =  getByLabelText(deliveryLabel)
    

    fireEvent.change(priceInput, {target:{value: 24000}})
    fireEvent.change(depositInput, {target:{value: 2400}})
    fireEvent.change(deliveryInput, {target:{value: new Date().toDateString()}})
    
    fireEvent.click(getByTestId('group-button-0'))

    fireEvent.click(getByText(submitLabel))

    expect(getByTestId('price-true')).toBeDefined
  })
})
