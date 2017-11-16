UPDATE Property
SET PropertyName = $2,
    PropertyDesc = $3,
    Loan = $4,
    Mortgage = $5,
    DesiredRent = $6,
    Address = $7,
    City = $8,
    State = $9,
    Zip = $10,
    UserID= $11
WHERE PropertyId = $1