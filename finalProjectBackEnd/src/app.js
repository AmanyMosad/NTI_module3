const express= require('express')
require('./dbConnection/db')
const userRoutes=require('./routes/user.route')
const categoriesRoutes=require('./routes/categories.route')
const itemsRoutes=require('./routes/items.route')
const cartRoutes=require('./routes/cart.route')
const orderRoutes=require('./routes/order.route')

 const app=express()
 
 app.use(express.json)
 app.use(userRoutes)
 app.use(categoriesRoutes)
 app.use(itemsRoutes)
 app.use(cartRoutes)
 app.use(orderRoutes)
 module.exports=app