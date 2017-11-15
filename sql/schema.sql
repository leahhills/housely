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
('Banana','Its a banana boat',3000,50,700, '842 west 1075 south','Brigham City','UT',84302,1),
('shoe','grandmothers shoe',3000,50,700, '115 341 east','Sandy','UT', 84111,2),
('PRETTY','oh my',3000,50,700, '842 west 1075 south','Brigham City','UT',84302,4),
('Cat House','cats here',300,50,1000,'F easy street','KittyLand','UT', 88383,5),
('Large Rock','for homeless',234,12,4035,'Rock City','ROckland','CO',34412,5),
('Tin shed','for people',555,553,140,'F easy street','LA','CA',49343,5),
('Big DUmp','for poodoo',3233,43,35,'rock road','Nowhere','NV',11544,5),
('Hammer and nails','small and big5_to_utf8',23433,243,6565,'1 lane lane','SOmehwer','VA',34455,5),
('SOme Trees and stones','red pain',52533,253,65436,'4444 east 5 south','Big town','FL',72734,5),
('Big Boat','needs fixing',4233,243,455,'99 baker baker baker street','A city','WA',15444,5),
('A Tub','cool thoo',2343,253,3455,'43 font road','cooksville','WA',45625,5),
('Yellow Brick House','fun',2323,2353,775,'some dirt road','hahatown','NM',65635,5);

INSERT INTO Users(UserName, Password)
VALUES('Helga', 'Butt'), ('Xena', 'Puppy');
