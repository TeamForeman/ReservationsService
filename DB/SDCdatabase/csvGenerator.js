const path = require('path');
const fs = require('fs');
const {generateListings, generateReservations} = require ('./seedscript.js');

const writeCSV = (end) => {
  var listingFilePath = path.join(__dirname, '/listings.csv');
  var reservationFilePath = path.join(__dirname, '/reservations.csv');
  let writeStreamListings = fs.createWriteStream(listingFilePath);
  let writeStreamReservations = fs.createWriteStream(reservationFilePath);

  var listingHeaders = 'ID,totalCapacity,avgRating,totalReviews,apartmentCost,cleaningCost,serviceCost\n';
  var reservationHeaders = 'reservationID,stayLength,startDate,endDate,listingID\n';


  writeStreamListings.write(listingHeaders);
  writeStreamReservations.write(reservationHeaders);

  const writeStream = (stream, func) => {
    let i = 1;
    let okay = true;
    const write = () => {
      do {
        let currentData = func(i);
        i++;
        if (i === 10000000) {
          stream.write(currentData);
          console.log('Finished writing file');
        } else {
          okay = stream.write(currentData);
        }
      } while (i < 10000001 && okay);
      if (i < 10000001 && !okay) {
        stream.once('drain', write);
      }
    };
    write();
  };
  writeStream(writeStreamListings, generateListings);
  writeStream(writeStreamReservations, generateReservations);
};
writeCSV();