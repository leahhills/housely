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
( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10 )