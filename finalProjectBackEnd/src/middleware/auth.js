const jwt = require('jsonwebtoken')
const users = require('../models/user.models')
const auth = async(req, res, next)=>{
    try{
        // return res.send(req.originalUrl)
        const token = req.header('Authorization').replace('Bearer ', '')
        const decodedToken = jwt.verify(token, process.env.JWTKEY)
        const user = await users.findOne({_id: decodedToken._id, 'tokens.token':token})
        
        if(!user) throw new Error()
        //if(!user.status) throw new Error()
        req.token = token
        req.user= user
        next()
    }
    catch(error){
        res.status(400).send({
            error: error,
            apiStatus:false,
            data: 'unauthorized user'
        })
    }
}

module.exports = auth