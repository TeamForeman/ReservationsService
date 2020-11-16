import React, {useState, useEffect} from 'react';
import DatePicker from 'react-DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';
import axios from 'axios';

const CalendarComponent = (props) => {
  console.log(props.data.obj);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [disabledDays, setDisabledDays] = useState({});
  const [disableOnSelect, setDisabledOnSelect] = useState({});

  useEffect(() => {
    setDisabledDays(props.data.obj);
  } );

  const findIndex = (dateTime) => {
    let arr = props.data.arr;
    //console.log(arr);
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] < dateTime) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return end;
  };
  const OnSelectStartDate = () => {
    let date = startDate.getTime();
    let index = findIndex(date);
    let obj = {};
    obj.startDate = date;
    obj.endDate = props.data.arr[index];
    setDisabledOnSelect(obj);
    // console.log(date," ", props.data.arr[index]);
  };
  useEffect(() => {
    console.log(startDate.getTime());
    OnSelectStartDate();
    // OnSelectStartDate();
    return () => {
      setDisabledOnSelect({});
    };
  }, [startDate]);



  useEffect(() => {

    console.log('sendData');
    console.log(startDate , " " , endDate);
    let query = {
      startDate: startDate,
      endDate: endDate,
      appartmentID: props.appartmentID
    };

    const result = axios.get('http://localhost:3001/reservationCost',{
      params: query
    }).then (data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    });

  }, [endDate]);

  console.log(props.data);

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        //onChange={date => setEndDate(date)}
        selectsStart
        startDate={startDate}
        endDate={startDate}
        minDate={startDate}
        monthsShown={2}
        dayClassName={date => disabledDays [date.getTime()] === true ? 'disabled-date' : undefined}
      />
      <DatePicker
        selected={endDate}
        onChange={date=>setEndDate(date)}
        selectsEnd
        dayClassName={date => disabledDays [date.getTime()] === true ? 'disabled-date' : undefined}
        dayClassName ={date => disableOnSelect.startDate !== undefined ?
          date.getTime() < disableOnSelect.startDate || date.getTime() > disableOnSelect.endDate ? 'disabled-date' : null : null
        }
        startDate={startDate}
        endDate={endDate}
        monthsShown={2}
        minDate={startDate}
      />
    </>
  );
};

export default CalendarComponent;