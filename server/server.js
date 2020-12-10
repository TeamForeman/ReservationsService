const express = require('express');
let app = express();
app.use(express.static(__dirname + '/../client/dist'));
const bodyParser = require('body-parser');
//app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
const path = require('path');
let db = require('../DB/SDCdatabase/pgdb.js');

app.get('/listing/*', (req, res) => {
  res.sendFile (path.join(__dirname, '../client/dist/index.html'));
});

app.get('/api/listings/:id', (req, res) => {
  let params = req.params.id;
  db.getListings(params, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).json(data);
    }
  });
});


app.get('/api/reservations/:id', (req, res) => {
  let params = [
    req.params.id,
    req.body.startMonth,
    req.body.endMonth
  ];

  db.getReservations(params, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).json(data);
    }
  });
});


app.post('/api/listings', (req, res) => {
  let params = [
    req.body.id,
    req.body.totalCapacity,
    req.body.avgRating,
    req.body.totalReviews,
    req.body.apartmentCost,
    req.body.cleaningCost,
    req.body.serviceCost
  ];
  db.createListings(params, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  });
});

app.post('/api/reservations', (req, res) => {
  let params = [
    req.body.reservationid,
    req.body.stayLength,
    req.body.startDate,
    req.body.endDate,
    req.body.listingid,
  ];
  db.createReservations(params, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  });
});

app.put('/api/listings', (req, res) => {
  let params = [
    req.body.id,
    req.body.category,
    req.body.value
  ];
  db.updateListing(params, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  });
});

app.put('/api/listings/:id', (req, res) => {
  let params = [
    req.params.id,
    req.body.category,
    req.body.value
  ];
  db.updateListing(params, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

app.delete('/api/listings/:id', (req, res) => {
  let params = req.params.id;
  db.deleteListing(params, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

let port = process.env.PORT || 3001;
app.listen(port, ()=> {
  console.log('listening on port', port);
});

