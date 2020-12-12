const { Pool } = require('pg');
const pool = new Pool({
  user: 'zain',
  host: 'localhost',
  database: 'reservationservice',
  password: '',
  port: 5432,
});

module.exports.getListings = (params, callback) => {
  var id = params;
  var queryString = `SELECT * FROM listings where ID = ${id}`;
  pool.query(queryString, (err, results) => {
    callback(err, results.rows);
  });
};

module.exports.getReservations = (params, callback) => {
  var id = params[0];
  var start = params[1];
  var end = params[2];

  var queryString = `SELECT * FROM reservations WHERE listingid = ${id}`;
  pool.query(queryString, (err, results) => {
    callback(err, results.rows);
  });
};

module.exports.createListings = (params, callback) => {
  console.log(params);
  var id = params[0];
  var totalCapacity = params[1];
  var avgRating = params[2];
  var totalReviews = params[3];
  var apartmentCost = params[4];
  var cleaningCost = params[5];
  var serviceCost = params[6];

  var queryString = `INSERT INTO listings VALUES (${id}, ${totalCapacity}, ${avgRating}, ${totalReviews}, ${apartmentCost}, ${cleaningCost}, ${serviceCost})`;
  pool.query(queryString, (err, results) => {
    callback(err, results);
  });
};

module.exports.createReservations = (params, callback) => {
  var reservationid = params[0];
  var stayLength = params[1];
  var startDate = params[2];
  var endDate = params[3];
  var listingid = params[4];
  var queryString = `INSERT INTO reservations VALUES ('${reservationid}', ${stayLength}, '${startDate}', '${endDate}', ${listingid});`;
  pool.query(queryString, (err, results) => {
    callback(err, results);
  });
};

module.exports.updateListing = (params, callback) => {
  var id = params[0];
  var category = params[1];
  var value = params[2];

  var queryString = `UPDATE listings SET ${category} = ${value} WHERE id = ${id}`;
  pool.query(queryString, (err, results) => {
    callback(err, results);
  });
};

module.exports.deleteListing = (params, callback) => {
  var id = params;

  var queryString = `DELETE FROM listings WHERE id=${id}`;
  pool.query(queryString, (err, results) => {
    callback(err, results);
  });
};