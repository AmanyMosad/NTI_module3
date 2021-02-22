const mongoose = require('mongoose')

const rolesSchema = new mongoose.Schema({
    Rname:{
        type:String,
        enum:['admin', 'customer', 'delivaryMan'],
        required:true,
        trim:true
    },
    routes:[
        {
        route_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'routes'
        }
    }
    ],
    },
    {timestamps:true}
)

//virtual relation
rolesSchema.virtual('myRole', {
    ref:'users',
    localField: '_id',
    foreignField:'role_id'
})

const roles = mongoose.model('roles', rolesSchema)
module.exports = roles