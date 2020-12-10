
const moment = require ('moment');
const momentRandom = require('moment-random');


const generateReservations = (index) => {
  const bookedReservations = Math.floor(Math.random() * 15) + 1;
  let reservationsData = '';
  for (let j = 1; j < bookedReservations; j++) {
    const reservationID = Math.random().toString(36).substr(2, 9);
    const stayLength = Math.floor(Math.random() * 15) + 1;
    const startDate = momentRandom('12/31/2021', '12/25/2020').format('YYYY-MM-DD');
    const endDate = moment(startDate, 'YYYY-MM-DD').add(stayLength, 'days').format('YYYY-MM-DD');
    const listingID = index;

    let reservation = `${reservationID},${stayLength},${startDate},${endDate},${listingID}\n`;
    reservationsData += reservation;
  }
  return reservationsData;
};


const generateListings = (index) => {
  const ID = index;
  const totalCapacity = Math.floor(Math.random() * 10) + 1;
  const avgRating = (Math.random() * 5 + 1).toFixed(2);
  const totalReviews = Math.floor(Math.random() * 5000) + 50;
  const apartmentCost = Math.floor(Math.random() * 400) + 100;
  const cleaningCost = Math.floor(Math.random() * 100) + 20;
  const serviceCost = Math.floor(Math.random() * 60) + 20;

  let listingData = `${ID},${totalCapacity},${avgRating},${totalReviews},${apartmentCost},${cleaningCost},${serviceCost}\n`;

  return listingData;
};

module.exports = {
  generateListings,
  generateReservations
};



