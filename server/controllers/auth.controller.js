module.exports = {
    login: (req, res) => {
        const { username, password } = req.body;
        const{ session } = req;
        console.log(`U: ${username} P: ${password}`);

        if(username && password) {
            const dbInstance = req.app.get('db');
            dbInstance.validate_login(username, password)
            .then(response => {
                if(response.length > 0) {
                    console.log('checking loginresponse',response[0])
                    session.user = response[0];
                    
                    console.log('comingfromlogin',session.user);
                    res.status(200).send('Successfully Logged In!');
                
                } else {
                    res.status(400).send('Unable to login: Invalid username or password')
                    
                }
                console.log(session.user)
            })
            .catch(err => {
                console.log(`Error validating login: `, err);
                res.status(500).send('Error validation login');
            });
        } else {
            if(!username)
                
               return res.status(400).send('Invalid Login: missing username');
            if(!password)
                res.status(400).send('Invalid Login: missing password');
          
        }
       
    },
    register: (req,res) => {
        const { username, password } = req.body;
        const{ session } = req;

        if(username && password) {
            const dbInstance = req.app.get('db');

            dbInstance.check_user_exists(username)
            .then(response => {
                if(response.length > 0) {
                    res.status(400).send('Unable to register: user already exists');
                } else {
                    dbInstance.create_user(username, password)
                    .then(response => {
                        session.user=response[0];
                        res.status(200).send(`Successfully created user ${username}`);
                    })
                }
            })
            .catch(err => {
                console.log(`Error creating new user: `, err);
                res.status(500).send('Error creating user');
            });
        } else {
            console.log(`Error registering user: missing username or password`);
            if(!username)
                res.status(400).send('Invalid Registration: missing username');
            if(!password)
                res.status(400).send('Invalid Registration: missing password');
            res.status(400).send('Invalid Registration: missing username AND password');
        }
    },
    logout: (req, res) => {
        const { session } = req;
        session.destroy();
        console.log('logging out');
        res.status(200).send();
        
    }
}