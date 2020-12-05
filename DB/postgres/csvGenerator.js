const path = require('path');
const fs = require('fs');
const {generateListings} = require ('./seedscript.js');

const writeListingCSV = (end) => {
  var listingFilePath = path.join(__dirname, '/listings.csv');
  let writeStreamListings = fs.createWriteStream(listingFilePath);


  var listingHeaders = 'ID,totalCapacity,minimumDays,avgRating,totalReviews,apartmentCost,cleaningCost,serviceCost\n';

  writeStreamListings.write(listingHeaders);

  const writeTenMillion = () => {
    let i = 1;
    let okayListing = true;
    const write = () => {
      do {
        let currentListing = generateListings(i);
        i++;
        if (i === 10000000) {
          writeStreamListings.write(currentListing);
          console.log('Finished writing file');
        } else {
          okayListing = writeStreamListings.write(currentListing);
        }
      } while (i < 10000001 && okayListing);
      if (i < 10000001 && !okayListing) {
        writeStreamListings.once('drain', write);
      }
    };
    write();
  };
  writeTenMillion();
};
writeListingCSV();