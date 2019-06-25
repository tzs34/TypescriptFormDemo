import * as React from 'react'
import DatePicker from 'react-datepicker'

const date = new Date()
const useDatePicker = ( handleChangeTo, initialDate = date ) => {
    const [selectedDate, handleDateChange] = React.useState(initialDate);
  
    return (
      <div className="picker">
        <DatePicker/>
      </div>
    );
  }

  export default useDatePicker