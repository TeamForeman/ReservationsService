DROP DATABASE reservationservice;
CREATE DATABASE reservationservice;

\c reservationservice

CREATE TABLE listings (
  ID SERIAL PRIMARY KEY,
  totalCapacity INT,
  minimumDays INT,
  avgRating DECIMAL,
  totalReviews INT,
  apartmentCost INT,
  cleaningCost INT,
  serviceCost INT
);

CREATE TABLE reservations (
  reservationID SERIAL PRIMARY KEY,
  partySize INT,
  stayLength INT,
  startDate DATE,
  endDate DATE,
  totalCost INT,
  listingID INT,
  FOREIGN KEY (listingID) REFERENCES listings(ID)
);

COPY listings(ID, totalCapacity, minimumDays, avgRating, totalReviews, apartmentCost, cleaningCost, serviceCost)
FROM '/Users/zain/Desktop/Projects/SDC/Reservation-Service/DB/postgres/listings.csv'
DELIMITER ','
CSV HEADER;
