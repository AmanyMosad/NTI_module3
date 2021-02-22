const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema({
    title:{
        type:String,
        enum:['Beef', 'Chicken', 'Fish','Happy meals', 'Dessert'],
        required:true,
        trim:true
    },
    },
    {timestamps:true}
)

//virtual relation
categoriesSchema.virtual('myList', {
    ref:'items',
    localField: '_id',
    foreignField:'category_id'
})

const categories = mongoose.model('categories', categoriesSchema)
module.exports = categories