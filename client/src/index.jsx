
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
import moment from 'moment';

// eslint-disable-next-line func-style
function Example () {
  // Declare a new state variable, which we'll call "count"
  const [guests, setGuests] = useState(0);
  const [selectedGuests, setSelectedGuests] = useState({});
  const [isBusy, setBusy] = useState({loading: true});
  const [caldendarData, setCalendarData] = useState({});
  const [appartmentID, setAppartmentID] = useState(1);
  const [fees, setFees] = useState({});
  const [showFees, setShowFees] = useState(true);
  const [buttonTitle, setButtonTitle] = useState('Check Availability');
  const [reservationDates, setReservationDates] = useState({startDate: '', endDate: ''});
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
      let dateFormated = date.substring(5, 7) + '' + date.substring(8, 10)
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
    //console.log(guests);
    request.fail(function(jqXHR, textStatus) {
      alert('Requset Fetch Booked days failed:' + textStatus);
    });
  }, []);


  /*
    This function will be invoked on end date click
    from Calendar Component

  **/

  const endDateClick = (startDate, endDate) => {
    setReservationDates({startDate:startDate, endDate:endDate});
    setShowFees(true);
    console.log('sendData');
    console.log(startDate, " ", endDate);
    let query = {
      startDate: startDate,
      endDate: endDate,
      appartmentID: appartmentID
    };
    let nights = (endDate - startDate) / (1000 * 60 * 60 * 24);
    console.log(nights);
    const result = axios.get('http://localhost:3001/reservationCost',{
      params: query
    }).then (data => {
      if (nights >= 1) {
        let receivedObj = data.data[0];
        let objFees = {
          nights: nights,
          price: receivedObj.CalendarDays.apartmentCost,
          cleanigFee: receivedObj.CalendarDays.cleaningCost,
          serviceFee: receivedObj.CalendarDays.serviceCost,
          total: receivedObj.CalendarDays.totalCost
        };
        setFees(objFees);
        console.log('obj', fees," ", objFees, ' ', showFees);
        setShowFees(false);
        setButtonTitle('Reserve');
      }
      console.log('Data Received', data.data[0]);
    }).catch(error => {
      console.log('request Cost data error', error);
    });
    // return () => { ignore = true; };
    return () => {
      setShowFees(true);
    };

  };

  /***
   * makes reservation ob button click
  */


  const makeReservation = () => {
    let query = {
      apptId: appartmentID,
      startDate: reservationDates.startDate,
      endDate: reservationDates.endDate,
      fee: {
        nights: fees.nights,
        cleanigFee: fees.cleanigFee * fees.nights,
        price: fees.price * fees.nights,
        serviceFee: fees.serviceFee * fees.nights,
        total: fees.total * fees.nights,
      },
      guests: selectedGuests

    };
    const result = axios.post('http://localhost:3001/makeReservation',{
      params: query
    }).then ()
      .catch();
  };

  /**
   * updates selected guests everu time guests anount is changed
   */

  const guestsUpdate = (adults, children, infants) => {
    let obj = {
      adult: adults,
      children: children,
      infants: infants

    };
    console.log(obj);
    setSelectedGuests(obj);
  };



  return (
    <div className ="box" id = "one">
      {isBusy .loading ? (
        'Loading...'
      ) : (
        <div >
          <div className="price-rating">
            <Price/>
            <Rating/>
          </div>
          <Calendar data = {caldendarData} endDateClick = {endDateClick}/>
          <Guests guests = {guests} guestsUpdate = {guestsUpdate}/>
          <Button buttonTitle = {buttonTitle} makeReservation={makeReservation} />
          {showFees ? null : <Fees fees = {fees} /> }
        </div>
      )}
    </div>
  );
}
ReactDom.render(<Example/>, document.getElementById('app') );