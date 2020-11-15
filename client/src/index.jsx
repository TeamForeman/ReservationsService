
import ReactDom from 'react-dom';
import React, { useState, useEffect } from 'react';
import Calendar from './Calendar/Calendar.jsx';
import Guests from './Guests/Guests.jsx';
import './CSS/Style.css';
import $ from 'jquery';
import axios from 'axios';
import Price from './Price/Price.jsx';
import Rating from './Rating/Rating.jsx';


// eslint-disable-next-line func-style
function Example () {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [caldendarData, setCalendarData] = useState([]);
  useEffect(() => {
    console.log('requst made');
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
      console.log(arr);
      //setCalendarData(arr);

      //parent.setState({repos: data});
    }, caldendarData);

    request.fail(function(jqXHR, textStatus) {
      alert('Requset 25 failed:' + textStatus);
    });
  });

  return (
    <div>
      <Price/>
      <Rating/>
      <Calendar/>
      <Guests/>
      <p>You clicked {count} times</p>
      <button onClick= {()=> count++} className = "row">
        Click me
      </button>
    </div>
  );
}
ReactDom.render(<Example/>, document.getElementById('app') );