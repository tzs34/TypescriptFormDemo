import * as React from 'react'
import {usePriceInput, useValidation} from '../../Hooks'
import {carDepositValidator, carPriceValidator} from '../../../utils/validators'
import Copy from '../../../utils/copy'

const { labels:{depositLabel},placeholders:{ depositPlaceholder}} = Copy

const ValidatedCarDepositInput = (price, disabled: boolean = false) => {
   let [deposit, DepositInput] = usePriceInput(
    depositLabel,
    depositPlaceholder,
    !carPriceValidator(price)
  )
  let depositValidator = carDepositValidator(price)

  return useValidation(DepositInput, 'deposit', deposit, depositValidator)
}

export default ValidatedCarDepositInput