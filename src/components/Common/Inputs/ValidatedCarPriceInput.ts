import * as React from 'react'
import {usePriceInput, useValidation} from '../../Hooks'
import {carPriceValidator} from '../../../utils/validators'
import Copy from '../../../utils/copy'

const { labels:{priceLabel},placeholders:{ carPlaceholder}} = Copy

const ValidateCarPriceInput = (disabled: boolean = false) => {
     let [price, PriceInput] = usePriceInput(priceLabel, carPlaceholder)
     return useValidation(PriceInput, 'price', price, carPriceValidator)
}

export default ValidateCarPriceInput