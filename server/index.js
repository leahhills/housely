require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , session = require('express-session');
    


const app = express();

app.use(bodyParser.json());
app.use(cors());
// app.user(middleware.isAuthed);
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))


const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`listening on port: ${PORT}`));

