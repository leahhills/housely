module.exports = function (req, res, next){
    const { session } = req;
    console.log('checking4session',session.user);
    if(!session.user) {
        console.log('no user', session.user)
       session.user = { username:'', password:'' };
    }
  
    next();
}