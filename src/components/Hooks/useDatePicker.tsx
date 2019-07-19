import * as React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const initialDate = new Date()

const useDatePicker = (	  
    id: string, 
    label: string, 
    placeholder: string,
    disabled: boolean=false): [Date, () => JSX.Element ] => {
    const [date, setDate] = React.useState(null)
    
    const DatePickerComponent= () =>(
        <div>
            <label htmlFor={id}> {label} </label>
                <DatePicker
                  id={id}
                  onChange={(selectedDate) => { setDate(selectedDate)}}
                  placeholderText={placeholder}
                  disabled={disabled}
                />
         </div>
        )

    return [date, DatePickerComponent]
  }


export default useDatePicker