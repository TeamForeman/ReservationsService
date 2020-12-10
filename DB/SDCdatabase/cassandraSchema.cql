DROP KEYSPACE IF EXISTS reservationservice;

CREATE KEYSPACE reservationservice
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
AND durable_writes = 'true';

USE reservationservice;

CREATE TABLE listings(
  ID INT PRIMARY KEY,
  totalCapacity INT,
  avgRating FLOAT,
  totalReviews INT,
  apartmentCost INT,
  cleaningCost INT,
  serviceCost INT,
);

CREATE TABLE reservations(
  reservationID TEXT,
  stayLength INT,
  startDate DATE,
  endDate DATE,
  listingID INT,
  PRIMARY KEY (listingID, reservationID),
);

COPY listings(ID, totalCapacity,avgRating,totalReviews,apartmentCost,cleaningCost,
serviceCost)
FROM '/Users/zain/Desktop/Projects/SDC/Reservation-Service/DB/SDCdatabase/listings.csv'
WITH DELIMITER=','
AND HEADER=TRUE;

COPY reservations(reservationID, stayLength, startDate, endDate, listingID)
FROM '/Users/zain/Desktop/Projects/SDC/Reservation-Service/DB/SDCdatabase/reservations.csv'
WITH DELIMITER=','
AND HEADER=TRUE;

