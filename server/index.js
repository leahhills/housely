require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const checkForSession = require('./middlewares/checkForSession');
const endpoints = require('./endpoints');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,

}));

app.use(checkForSession);

endpoints.buildEndPoints(app);

const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`listening on port: ${PORT}`));

