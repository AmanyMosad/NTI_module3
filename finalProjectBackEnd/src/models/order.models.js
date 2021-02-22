const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
cart_id:{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'cart'
},
totalPrice:{
    type:String,
    required:true,
    trim:true
},
paymentMethod:{
    type:String,
    enum:['Cash', 'Visa'],
},
deliverDate:{
    type:String,
    required:true,
}
},
{timestamps:true}
)

const order = mongoose.model('order', orderSchema)
module.exports = order