module.exports={
    
    //Properties endpoints

    createProp: (req, res, next)=>{
        const dbInstance = req.app.get('db')
        const { propertyName, propertyDesc, loan, mortgage, desiredRent, address, city, state, zip, userID }= req.body;

        dbInstance.create_property([ propertyName, propertyDesc,
             loan, mortgage, desiredRent, address, city, state, zip, userID])
            .then(()=>res.status(200).send('Wahoo Property was created!!'))
            .catch(err=>res.status(500).send(err))

    
    },
    getProp:(req,res,next)=>{
        const dbInstance = req.app.get('db')

        dbInstance.read_property(req.params.id)
        .then((property)=>res.status(200).send(property))
        .catch((err)=>res.status(500).send(err));
    },

    deleteProp: (req,res,next)=>{
        const dbInstance = req.app.get('db')

        dbInstance.delete_prop(req.params.id)
        .then(()=>res.status(200).send('Property deleted'))
        .catch((err)=>res.status(500).send(err));

    },

    getPropRent:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        const { desiredrent, userID } = req.body;


        dbInstance.read_property_rent([desiredrent, req.params.id])
        .then((properties)=>res.status(200).send(properties))
        .catch((err)=>res.status(500).send(err));
        
    }

}