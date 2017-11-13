module.exports = {
    buildEndPoints: (app, controller) => {
        //authorization endpoint

        app.post('/api/auth/login', controller.loggingin)
        app.post('/api/auth/register', controller.registering)
        app.post('/api/auth/logout', controller.loggingout)

        
        
        //property endpoints
        app.post('/api/properties', controller.createProp);
        app.get('/api/properties', controller.getProp);
        app.delete('/api/properties/:id', controller.deleteProperty);
        app.get('/api/properties/filter', controller.getPropRent);
        
    }
}