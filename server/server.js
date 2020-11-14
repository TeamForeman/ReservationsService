const express = require('express');
let app = express();
app.use(express.static(__dirname + '/../client/dist'));
const bodyParser = require('body-parser');
//app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

let db = require('../DB/db.js');
let data = require('../DB/data.js');



app.get('/calendar', (req, res) => {
  console.log(req.query.ApartmentId);
  let appartmentID = req.query.ApartmentId;
  db.getCalendarDataByApartment(appartmentID, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      console.log(data);
      res.status(201).json(data);
    }
  });
});

let port = process.env.PORT || 3001;
app.listen(port, ()=> {
  console.log('listening on port', port);
});