
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Property;


CREATE TABLE Users (
   UserId Serial, 
   UserName TEXT NOT NULL,
   Password TEXT NOT NULL
);

CREATE TABLE Property (
    PropertyId Serial,
    Loan DECIMAL NOT NULL,
    Mortgage DECIMAL NOT NULL,  
    DesiredRent DECIMAL NOT NULL,
    AddressValue TEXT NOT NULL,
    City TEXT NOT NULL,
    State TEXT NOT NULL,
    Zip NUMERIC NOT NULL
);