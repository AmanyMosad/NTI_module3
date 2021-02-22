const mongoose = require('mongoose')

const routesSchema = new mongoose.Schema({
    
    },
    {timestamps:true}
)

//virtual relation
routesSchema.virtual('myroutes', {
    ref:'roles',
    localField: '_id',
    foreignField:'routes.route_id'
})

const categories = mongoose.model('categories', categoriesSchema)
module.exports = categories