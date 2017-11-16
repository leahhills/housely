here are some notes so that sessions works!
For your axios calls:
- Make sure the proxy has the correct port
- Dont: axios.get('http://locahost:3002/api/something')
- DO: axios.get('/api/something')
- .env file should be on the root level of file tree
- db folder should be on the root level of the file tree
- run your nodemon process from the root of your app