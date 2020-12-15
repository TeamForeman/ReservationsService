import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '60s',
};

export default function stressTest() {
  // // stress test get requests for listing and its reservations
  var listID = Math.floor(Math.random() * 10000000) + 1;
  var resID = Math.random().toString(36).substr(2, 9);
  // http.get(`http://127.0.0.1:3001/api/listings/${listID}`
  // );
  // http.get(`http://127.0.0.1:3001/api/reservations/${listID}`
  // );
  // sleep(1);

  // stress test post request for new listings
  // http.post('http://127.0.0.1:3001/api/listings', {
  //   totalCapacity: 5,
  //   avgRating: 5,
  //   totalReviews: 1000,
  //   apartmentCost: 1000,
  //   cleaningCost: 10,
  //   serviceCost: 10
  // });
  // sleep(1);


  // stress test post requests for reservations to existing listing
  http.post('http://127.0.0.1:3001/api/reservations', {
    reservationid: resID,
    stayLength: 15,
    startDate: '2021-01-22T05:00:00.000Z',
    endDate: '2021-02-06T05:00:00.000Z',
    listingid: listID
  });
  sleep(1);

}