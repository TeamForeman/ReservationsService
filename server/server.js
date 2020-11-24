const express = require('express');
let app = express();
app.use(express.static(__dirname + '/../client/dist'));
const bodyParser = require('body-parser');
//app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
const path = require('path');
let db = require('../DB/db.js');
let data = require('../DB/data.js');

app.get('/listing/*', (req, res) => {


  res.sendFile (path.join(__dirname, '../client/dist/index.html'));

});

app.get('/api/reservation/calendar', (req, res) => {
  //console.log(req.query.appartmentID);
  let appartmentID = req.query.ApartmentId;

  db.getCalendarDataByApartment(appartmentID, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      //console.log(data);
      res.status(201).json(data);
    }
  });
});

app.get('/api/reservation/reservationCost', (req, res) => {
  let appartmentID = (Number) (req.query.appartmentID);
  db.getCostsByAppartment(appartmentID, (err, data) => {
    if (err) {
      console.log(appartmentID);
      res.sendStatus(400);
    } else {
      console.log('Reservation appartmentID', data);
      console.log('Reservation data', data);
      res.status(201).json(data);
    }
  });
});


app.post('/api/reservation/makeReservation', (req, res) => {
  console.log('makeReservation');
  //console.log(req.body.params);
  let params = req.body.params;
  db.makeReservation (params, (err, data) => {
    if (err) {
      console.log('error during saving reservation data');
      res.sendStatus(400);
    } else {
      console.log('Reservation Data saved');
      res.sendStatus(201);
    }
  });


});

let port = process.env.PORT || 3001;
app.listen(port, ()=> {
  console.log('listening on port', port);
});