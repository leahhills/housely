const authController = require('./controllers/auth.controller');
const propertyController = require('./controllers/property.controller');

module.exports = {
    buildEndPoints: (app) => {
        //authorization endpoint
        app.post('/api/auth/login', authController.login)
        app.post('/api/auth/register', authController.register)
        app.post('/api/auth/logout', authController.logout)

        //property endpoints
        app.post('/api/properties', propertyController.createProp);
        app.get('/api/properties', propertyController.getProp);
        app.delete('/api/properties/:id', propertyController.deleteProperty);
        app.get('/api/properties/filter', propertyController.getPropRent);
    }
}