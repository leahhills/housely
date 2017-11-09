
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Property;


CREATE TABLE Users (
   UserID Serial, 
   UserName TEXT NOT NULL,
   Password TEXT NOT NULL
);

CREATE TABLE Property (
    PropertyId Serial,
    PropertyName TEXT NULL,
    PropertyDesc TEXT  NULL,
    Loan DECIMAL  NULL,
    Mortgage DECIMAL  NULL,  
    DesiredRent DECIMAL  NULL,
    Address TEXT  NULL,
    City TEXT  NULL,
    State TEXT  NULL,
    Zip NUMERIC  NULL,
    UserID INTEGER NOT NULL
    
    
);







-- Dummy Data to add to db
INSERT INTO Property(
    PropertyName,
    PropertyDesc,
    Loan,
    Mortgage,
    DesiredRent,
    Address,
    City,
    State,
    Zip,
    UserID
)
VALUES
('Banana','Its a banana boat',3000,50,700, '842 west 1075 south','Brigham City','UT',84302,1);


INSERT INTO Property(
    PropertyName,
    PropertyDesc,
    Loan,
    Mortgage,
    DesiredRent,
    Address,
    City,
    State,
    Zip,
    UserID
)
VALUES
('shoe','grandmothers shoe',3000,50,700, '115 341 east','Sandy','UT', 84111,2);



INSERT INTO Property(
    PropertyName,
    PropertyDesc,
    Loan,
    Mortgage,
    DesiredRent,
    Address,
    City,
    State,
    Zip,
    UserID
)
VALUES
('PRETTY','oh my',3000,50,700, '842 west 1075 south','Brigham City','UT',84302,4);



INSERT INTO Property(
    PropertyName,
    PropertyDesc,
    Loan,
    Mortgage,
    DesiredRent,
    Address,
    City,
    State,
    Zip,
    UserID
)
VALUES
('DOghouse','for misbehaving inlaws',300,50,1000,'F easy street','NYC','NY',11515,6);



