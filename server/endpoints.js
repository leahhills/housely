module.exports = {
    buildEndPoints: (app, controller) => {
        
        
        //properties property
        app.post('/api/properties', controller.createProp);
        app.get('/api/properties', controller.getProp);
        app.delete('/api/properties:id', controller.deleteProp);
        app.get('/api/properties/filter', controller.getPropRent);
        
    }
}