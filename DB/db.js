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

let getCalendarDataByApartment = (id, callback) => {
  //console.log('getCalendarDataByApartment', appartmentID);
  Calendar.find({apartmentId: id, 'CalendarDays.available': false }, (err, result) => {
    if (err) {
      console.log('Error in DBFetch');
      throw (err);
    } else {
      callback(null, result);
    }
  });
};

module.exports = mongoose.connection;

module.exports.Calendar = Calendar;
module.exports.ApartmentCalendar = ApartmentCalendar;

module.exports.getCalendarDataByApartment = getCalendarDataByApartment;