import React, {useState, useEffect} from 'react';
import DatePicker from 'react-DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

const CalendarComponent = (props) => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [disabledDays, setDisabledDays] = useState();



  console.log(props.data);

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dayClassName={date => props.data [date.getTime()] === true ? 'disabled-date' : undefined}
      />
      <DatePicker
        selected={endDate}
        onChange={date=>setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};

export default CalendarComponent;