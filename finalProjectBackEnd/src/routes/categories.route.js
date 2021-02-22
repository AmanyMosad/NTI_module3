const express = require('express')
const categories = require('../models/categories.models')
const auth = require('../middleware/auth')
const router = new express.Router()

module.exports=router