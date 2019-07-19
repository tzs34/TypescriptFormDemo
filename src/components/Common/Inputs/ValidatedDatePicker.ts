import * as React from 'react'
import {  useDatePicker, useValidation} from '../../Hooks'
import Copy from '../../../utils/copy'
import { dateValidator, carDepositValidator} from '../../../utils/validators'

const {labels:{deliveryLabel}, placeholders:{datePlaceholder}} = Copy

const ValidatedDatePicker = (disabled: boolean = false) => {

    let [deliveryDate, DatePickerInput] = useDatePicker(
    'date-picker', 
    deliveryLabel, 
    datePlaceholder, 
    disabled 
    )

    return useValidation(DatePickerInput, 'datepicker', deliveryDate, dateValidator)
 
}

export default ValidatedDatePicker