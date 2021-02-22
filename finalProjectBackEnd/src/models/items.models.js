const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
category_id:{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'categories'
},
itemName:{
    type:String,
    required:true,
    trim:true
},
price:{
    type:String,
    required:true,
    trim:true
},
description:{
    type:String,
    required:true,
    trim:true
},
status:{
    type:String,
    enum:['Avaliable', 'Not avaliable'],
    default:'Avaliable'
},
},
{timestamps:true}
)

//virtual relation
itemsSchema.virtual('mySelectedItems', {
    ref:'cart',
    localField: '_id',
    foreignField:'items.item_id'
})
const items = mongoose.model('items', itemsSchema)
module.exports = items