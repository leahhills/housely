require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const checkForSession = require('./middlewares/checkForSession');
const endpoints = require('./endpoints');

const authController = require('./controllers/auth.controller');
const propertyController = require('./controllers/property.controller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());



app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    
    
}));

app.use((req,res,next)=>{
    console.log('checkingfrom indexjs',req.session); 
    next()
})

app.use(checkForSession);

// endpoints.buildEndPoints(app);

massive(process.env.CONNECTION_STRING).then(dbInstance =>{
    app.set('db', dbInstance);
} ).catch(err=> {
    console.log(err)
})

app.post('/api/auth/login', authController.login)
app.post('/api/auth/register', authController.register)
app.post('/api/auth/logout', authController.logout)

//property endpoints
app.post('/api/properties', propertyController.createProperty);
app.get('/api/properties', propertyController.getProperties);
app.delete('/api/properties/:id', propertyController.deleteProperty);
app.get('/api/properties/filter', propertyController.getPropertiesByRent);

const PORT= process.env.SERVER_PORT || 3005;
app.listen(PORT,()=>console.log(`listening on port: ${PORT}`));

