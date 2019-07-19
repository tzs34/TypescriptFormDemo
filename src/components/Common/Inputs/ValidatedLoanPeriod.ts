import * as React from 'react'
import {useButtonGroup, useValidation} from '../../Hooks'
import {loanPeriodValidator} from '../../../utils/validators'
import Copy from '../../../utils/copy'

const { labels:{periodLabel}, yearOptions} = Copy

const ValidatedLoanPeriod = (disabled: boolean = false) => {
   const loanYearsValidator = loanPeriodValidator(yearOptions)
    let [loanPeriod, LoanPeriodGroup] = useButtonGroup(
    periodLabel,
    yearOptions
  )
     return useValidation(LoanPeriodGroup, 'period', loanPeriod, loanYearsValidator)
}

export default ValidatedLoanPeriod