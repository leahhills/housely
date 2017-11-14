module.exports = function (req, res, next){
    let { session } = req;
    console.log(JSON.stringify(session));
    if(!session.user) {
        console.log('no user', session.user)
        session.user = { username:'', password:'' };
    }
    console.log('user', session.user);
    next();
}