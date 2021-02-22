const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
user_id:{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'users'
},
items:[
    {
    item_id:{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'items'
    }
}
],

quantity:{
    type:String,
    required:true,
    trim:true
},
status:{
    type:String,
    enum:['Confirmed', 'Not confirmed'],
    default:'Not confirmed'
},

},
{timestamps:true}
)

//virtual relation
cartSchema.virtual('myConfirmedOrders', {
    ref:'order',
    localField: '_id',
    foreignField:'cart_id'
})

const cart = mongoose.model('cart', cartSchema)
module.exports = cart