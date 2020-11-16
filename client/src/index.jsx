
import ReactDom from 'react-dom';
import React, { useState, useEffect } from 'react';
import Calendar from './Calendar/Calendar.jsx';
import Guests from './Guests/Guests.jsx';
import './CSS/Style.css';
import $ from 'jquery';
import axios from 'axios';
import Price from './Price/Price.jsx';
import Button from './Button/Button.jsx';
import Rating from './Rating/Rating.jsx';
import beforeRender from './Hooks/beforerender.js';
import Fees from './Fees/Fees.jsx';


// eslint-disable-next-line func-style
function Example () {
  // Declare a new state variable, which we'll call "count"
  const [guests, setGuests] = useState(0);
  const [isBusy, setBusy] = useState({loading: true});
  const [caldendarData, setCalendarData] = useState({});
  const [appartmentID, setAppartmentID] = useState(1);
  const [fees, setFees] = useState({});
  const [showFees, setShowFees] = useState(false);

  /*
    this function received dates from server and changes format and
    saves them into sorted array and object to pass it to calendar
  **/
  const disaBleDays = (dates) => {
    //2020-11-14T03:50:11.071Z
    let objDisabledDates = {};
    let arr = [];
    for (let date of dates) {
      let dateSubs = date.substring(0, 10);
      let dateFormated = date.substring(5, 7) + '/' + date.substring(8, 10)
      + '/' + date.substring(0, 4);
      let time = new Date(dateFormated).getTime();
      arr.push(time);
      objDisabledDates[time] = true;
    }
    let obj = {};
    obj.obj = objDisabledDates;
    arr.sort();
    obj.arr = arr;
    return obj;
  };

  /*
    this function will be invoked before renderin
    it will retreive data about appartment from server
    and sets this data to
  **/
  useEffect(() => {
    console.log('requst made');
    setBusy({loading: true});

    let request = $.ajax ({
      url: 'http://localhost:3001/calendar',
      method: 'GET',
      data: {'ApartmentId': appartmentID}
    });
    request.done(function(data) {
      let arr = [];
      for (let obj of data) {
        arr.push(obj.CalendarDays.date);
      }
      setGuests(data[0].CalendarDays.totalGuests);
      let disabledDays = disaBleDays(arr);
      setCalendarData( disabledDays);
      setBusy({loading: false});
    });
    console.log(guests);
    request.fail(function(jqXHR, textStatus) {
      alert('Requset Fetch Booked days failed:' + textStatus);
    });
  }, []);

  /*
    This function will be invoked on end date click
    from Calendar Component

  **/
  const endDateClick = (startDate, endDate) => {
    console.log('sendData');
    console.log(startDate , " ", endDate);
    let query = {
      startDate: startDate,
      endDate: endDate,
      appartmentID: appartmentID
    };
    const result = axios.get('http://localhost:3001/reservationCost',{
      params: query
    }).then (data => {
      console.log('Data Received', data);
    }).catch(error => {
      console.log('request Cost data error', error);
    });

  };


  return (
    <div className ="box">
      {isBusy .loading ? (
        'Loading...'
      ) : (
        <div>
          <Price/>
          <Rating/>
          <Calendar data = {caldendarData} endDateClick = {endDateClick}/>
          <Guests guests = {guests}/>
          <Button/>
          <Fees prive = {5} nights = {5} fees = {fees} />
        </div>
      )}
    </div>
  );
}
ReactDom.render(<Example/>, document.getElementById('app') );