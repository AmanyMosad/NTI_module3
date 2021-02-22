const express = require('express')
const routes = require('../models/routes.models')
const auth = require('../middleware/auth')
const router = new express.Router()

module.exports=router