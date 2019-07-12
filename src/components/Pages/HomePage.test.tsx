/** Import React */
import * as React from 'react'

/** Import Test Enviroment */
import { render, fireEvent } from '@testing-library/react'

/** Import Tested Component */
import HomePage from './HomePage'

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
  it('should render the deposit cost section', () => {
    const { getByTestId } = wrapper
    expect(getByTestId('deposit-cost-section')).toBeDefined()
    expect(getByTestId('cost-price')).toBeDefined()
  })

  it('should render the deposit cost section', () => {
    const { getByTestId } = wrapper
    expect(getByTestId('delivery-section')).toBeDefined()
  })
  it('should render the loan period  section', () => {
    const { getByTestId } = wrapper
    expect(getByTestId('loan-years-section')).toBeDefined()
  })
  it('should render the loan period  section', () => {
    const { getByTestId } = wrapper
    expect(getByTestId('submit-section')).toBeDefined()
  })
  it('should have a functional submit button', () => {
    const handler = jest.fn(e => e.preventDefault())
    const { getByText } = wrapper
    fireEvent.submit(getByText('Submit Loan'))
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
