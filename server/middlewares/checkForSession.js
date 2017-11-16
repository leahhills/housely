module.exports = function (req, res, next){
    const dbInstance = req.app.get('db')
    const { session } = req;
    if(!session.user) {
        console.log('no user', session.user)
        session.user = { username:'', password:'' };
    }
  
    next();
}