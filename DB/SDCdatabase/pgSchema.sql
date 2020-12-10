DROP DATABASE reservationservice;
CREATE DATABASE reservationservice;

\c reservationservice

CREATE TABLE listings (
  ID SERIAL PRIMARY KEY,
  totalCapacity INT,
  avgRating DECIMAL,
  totalReviews INT,
  apartmentCost INT,
  cleaningCost INT,
  serviceCost INT
);

CREATE TABLE reservations (
  reservationID TEXT,
  stayLength INT,
  startDate DATE,
  endDate DATE,
  listingID INT,
  FOREIGN KEY (listingID) REFERENCES listings(ID)
);

COPY listings(ID, totalCapacity, avgRating, totalReviews, apartmentCost, cleaningCost, serviceCost)
FROM '/Users/zain/Desktop/Projects/SDC/Reservation-Service/DB/SDCdatabase/listings.csv'
DELIMITER ','
CSV HEADER;

COPY reservations(reservationID, stayLength, startDate, endDate, listingID)
FROM '/Users/zain/Desktop/Projects/SDC/Reservation-Service/DB/SDCdatabase/reservations.csv'
DELIMITER ','
CSV HEADER;

