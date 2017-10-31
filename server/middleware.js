module.exports ={
    middleware() {
        if (req.body.password ==='mylittlepony'){
            next()
        }
        else{
            res.status(403).send('nice try haha')
        }
    }

}