UPDATE User
SET UserName = $2, Password= $3
WHERE UserID = $1
