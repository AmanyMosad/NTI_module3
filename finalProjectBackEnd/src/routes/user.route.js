const express = require('express')
const User = require('../models/user.models')
const auth = require('../middleware/auth')
const multer = require('multer')
const bcrypt = require('bcryptjs')
const router = new express.Router()
router.get('/test',(req,res)=>{
     res.send('ay 7aga')
})
router.post('/user', async(req, res)=>{
res.send('ay 7aga')
    const user = new User(req.body)
    try{
        await user.save()
        
        const token = await user.generateToken()
        console.log(2)
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: {user, token}
        })
    }
    catch(error){
        res.status(400).send({
            error: error.message,
            apiStatus:false,
            data: 'unauthorized user'
        })

    }
})
router.post('/user/login', async(req, res)=>{
    try{
        const user = await User.findUserByCredentials(req.body.email, req.body.password)
        const token = await user.generateToken()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: {user, token}
        })
    }
    catch(error){
        res.status(400).send({
            error: error.message,
            apiStatus:false,
            data: 'unauthorized user'
        })
    }
})

module.exports=router