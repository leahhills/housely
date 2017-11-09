
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
    Address TEXT NOT NULL,
    City TEXT NOT NULL,
    State TEXT NOT NULL,
    Zip NUMERIC NOT NULL
);


INSERT INTO Property(
    Loan,
    Mortgage,
    DesiredRent,
    Address,
    City,
    State,
    Zip
)
VALUES
(3000,50,700, '842 west 1075 south','Brigham City','UT',84302);


INSERT INTO Property(
    Loan,
    Mortgage,
    DesiredRent,
    Address,
    City,
    State,
    Zip
)
VALUES
(3000,50,700, '115 341 east','Sandy','UT',84111);



INSERT INTO Property(
    Loan,
    Mortgage,
    DesiredRent,
    Address,
    City,
    State,
    Zip
)
VALUES
(3000,50,700, '842 west 1075 south','Brigham City','UT',84302);



INSERT INTO Property(
    Loan,
    Mortgage,
    DesiredRent,
    Address,
    City,
    State,
    Zip
)
VALUES
(300,50,1000,'F easy street','NYC','NY',11515);



INSERT INTO Property(
    Loan,
    Mortgage,
    DesiredRent,
    Address,
    City,
    State,
    Zip
)
VALUES
(3000,50,700, '842 west 1075 south','Brigham City','UT',84302);



INSERT INTO Property(
    Loan,
    Mortgage,
    DesiredRent,
    Address,
    City,
    State,
    Zip
)
VALUES
(3000,50,700, '842 west 1075 south','Brigham City','UT',84302);



INSERT INTO Property(
    Loan,
    Mortgage,
    DesiredRent,
    Address,
    City,
    State,
    Zip,
    
)
VALUES
(3000,50,700, '842 west 1075 south','Brigham City','UT',84302);