
import ReactDom from 'react-dom';
import React, { useState, useEffect } from 'react';
import Calendar from './Calendar/Calendar.jsx';
import Guests from './Guests/Guests.jsx';
import './CSS/Style.css';
import $ from 'jquery';
import axios from 'axios';
// eslint-disable-next-line func-style
function Example () {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(() =>   {
    console.log('requst made');
    // axios.get('https://localhost:3001/calendar')
    //   .then((response) => {
    //     console.log(response.data);

    //   }), (error) => {
    //   console.log(error);
    // };

    let request = $.ajax ({
      url: 'http://localhost:3001/calendar',
      method: 'GET',
      data: {'ApartmentId': 1}
    });

    request.done(function(data) {
      console.log(data);
      //parent.setState({repos: data});
    });

    request.fail(function(jqXHR, textStatus) {
      alert('Requset 25 failed:' + textStatus);
    });
  });

  return (
    <div>
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