const users = require('../models/users');

module.exports = {
    createProp:(req, res, next) => {
        const dbInstance = req.app.get('db')
        const { propertyName, propertyDesc, loan, mortgage, desiredRent, address, city, state, zip, userID }= req.body;

        dbInstance.create_property([ propertyName, propertyDesc,
             loan, mortgage, desiredRent, address, city, state, zip, userID])
            .then(() => res.status(200).send('Wahoo Property was created!!'))
            .catch(err => res.status(500).send(err))

    
    },
    getProp: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_property(5)
        .then(property => {
            res.status(200).send(property)
            console.log(property)
            
        })
        .catch(err => res.status(500).send(err));
    },
    deleteProperty: (req, res, next) => {
        const dbInstance = req.app.get('db')
     
        console.log(req.params.id)
        dbInstance.delete_property(req.params.id)
        .then(property => res.status(200).send(req.params.id))
        .catch(err => res.status(500).send(err));

    },
    getPropRent: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { desiredrent } = req.query

        console.log(req.query)

        dbInstance.read_property_rent([desiredrent, 6])
        .then(properties => res.status(200).send(properties))
        .catch(err => res.status(500).send(err));   
    }
}