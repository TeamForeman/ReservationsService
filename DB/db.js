const mongoose = require('mongoose');
const dates = require ('./data.js');
const mongodbURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/bear';
mongoose.connect(mongodbURL, {})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



let ApartmentCalendar = mongoose.Schema ({
  apartmentId: Number,
  commonID: Number,
  CalendarDays: {
    date: Date,
    available: Boolean,
    totalGuests: Number,
    apartmentCost: Number,
    cleaningCost: Number,
    serviceCost: Number,
    totalCost: Number
  }
});

let Calendar = mongoose.model('Calendar', ApartmentCalendar);

module.exports = mongoose.connection;

module.exports.Calendar = Calendar;
module.exports.ApartmentCalendar = ApartmentCalendar;