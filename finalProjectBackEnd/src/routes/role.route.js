const express = require('express')
const role = require('../models/role.models')
const auth = require('../middleware/auth')
const router = new express.Router()

module.exports=router