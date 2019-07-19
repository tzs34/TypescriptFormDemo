import * as React from 'react'
import { ErrorSuccessIndicator } from '../../components'

interface returnObjProps{
    value: any,
    isValid: boolean
}

const useValidation = (	  
    Element: () => JSX.Element,
    id: string,
    value: any,
    validationFunction: (value: any) => boolean): [returnObjProps, () => JSX.Element ] => {
    const [isValid, setValidation] = React.useState(false)
    

    React.useEffect(()=>{
        if(value){
            setValidation(validationFunction(value))
        }
    }, [value])

    const Validator = () =>(
            <div data-testid={`validator-${id}`}  className="validation-container">
            <div><Element/></div>
             <div className={`${value ? 'show' : 'hide'}`}>
                <ErrorSuccessIndicator id={id} valid={isValid} />
            </div>
         </div>
        )

    return [{value, isValid}, Validator]
  }


export default useValidation