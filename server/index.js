require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , session = require('express-session')
    , checkForSession = require('./middlewares/checkForSession')
    , controller = require('./controller')
    , endpoints = require('./endpoints');

    

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.user(middleware.isAuthed);
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(checkForSession)
endpoints.buildEndPoints(app, controller);

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`listening on port: ${PORT}`));

