
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


// eslint-disable-next-line func-style
function Example () {
  // Declare a new state variable, which we'll call "count"
  const [guests, setGuests] = useState(0);
  const [isBusy, setBusy] = useState({loading: true});
  const [caldendarData, setCalendarData] = useState([]);

  useEffect(() => {

    console.log('requst made');


    // axios.get('http://localhost:3001/calendar?ApartmentId=1').
    //   then(result =>
    //     setGuests(8)
    //   ).then(
    //     console.log(guests)
    //   );



    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    //setBusy(true);
    setBusy({loading: true});

    let request = $.ajax ({
      url: 'http://localhost:3001/calendar',
      method: 'GET',
      data: {'ApartmentId': 1}
    });
    request.done(function(data) {
      let arr = [];
      for (let obj of data) {
        arr.push(obj.CalendarDays.date);
      }
      setGuests(data[0].CalendarDays.totalGuests);
      setCalendarData(arr);
      setBusy({loading: false});
    });
    console.log(guests);
    request.fail(function(jqXHR, textStatus) {
      alert('Requset 25 failed:' + textStatus);
    });
  }, []);
  useEffect(() => {

  },[guests]);

  return (
    <div className ="box">
      {isBusy .loading ? (
        'Loading...'
      ) : (
        <div>
          <Price/>
          <Rating/>
          <Calendar/>
          <Guests guests = {guests}/>
          <Button/>
        </div>
      )}
    </div>
  );
}
ReactDom.render(<Example/>, document.getElementById('app') );