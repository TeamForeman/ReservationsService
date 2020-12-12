
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
import Fees from './Fees/Fees.jsx';
import Text from './TextComponent/Text.jsx';


// eslint-disable-next-line func-style
function App() {
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [guests, setGuests] = useState(0);
  const [clean, setClean] = useState(0);
  const [service, setService] = useState(0);
  const [checkIn, setCheckIn] = useState('Add date');
  const [checkOut, setCheckOut] = useState('Add date');
  const [booked, setBooked] = useState([]);
  const [nights, setNights] = useState(0);
  const [changeAppView, setChangeAppView] = useState(false);

  useEffect(() => {
    let url = (window.location.href).split('/');
    let id = url[url.length - 1] || '75';

    axios.get(`/api/listings/${id}`)
      .then((res) => {
        let data = res.data[0];
        setGuests(data.totalcapacity);
        setPrice(data.apartmentcost);
        setRating(data.avgrating);
        setReviews(data.totalreviews);
        setClean(data.cleaningcost);
        setService(data.servicecost);
      })
      .catch(err => console.log(err));

    axios.get(`/api/reservations/${id}`)
      .then((res) => {
        setBooked(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (checkOut.length === 10) {
      console.log('checkout: ', checkOut)
      let date1 = new Date(checkIn);
      let date2 = new Date(checkOut);
      let diffTime = Math.abs(date2-date1);
      let diffDays = Math.ceil(diffTime / (1000*60*60*24));
      setNights(diffDays);
    }
  }, [checkOut]);


  return (
    <div>
      <div className="outerGrid-em">
        <Text guests = {guests} className="outerGrid-left-em"/>
        <div className ="outerGrid-right-em box-em" id = "one-em">
          <div >
            <div className="price-rating-grid-em">
              <div className="price-em" >
                <Price price = {price}/>
              </div>
              <div className="rating-em" >
                <Rating rating = {rating} reviews = {reviews} />
              </div>

            </div>
            {/* <Calendar/>
            <Guests/>
            <Button/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

