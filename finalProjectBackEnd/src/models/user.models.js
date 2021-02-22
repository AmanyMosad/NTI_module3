const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
    uName:{
        type:String,
        required: [true, 'name is required'],
        trim:true
    },
    password:{
        type:String,
        required: [true, 'password is required'],
        trim:true,
        validate(value){
            if(!validator.isStrongPassword(value)) throw new Error('Password should contain minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1')

        }
    
    },
    phoneNumber:{
        type:Number,
        required: [true, 'phone number is required'],
        validate(value){
            if(!validator.isMobilePhone(value,'ar-EG')) throw new Error('must be valid egyptian phone number')
        }
        
    },
    email:{
        type: String,
        unique: [true, 'This email is used before'],
        required: [true, 'User email required'],
        trim:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('email not valid')
        }
    },
    age:{
        type:Number,
    },
    address:{
        type:String,
    }, 
    role_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'roles'
    },
    tokens:[{
        token: {type:String}
    }
    ], 
},{timestamps:true})

//virtual relation
userSchema.virtual('myOrders', {
    ref:'cart',
    localField: '_id',
    foreignField:'user_id'
})
userSchema.pre('save',async function(next){
    console.log(1)
    const user=this
    if(user.isModified('password')){
        user.password=await bcrybtjs.hash(user.password, 12)
    }
    next()
})

userSchema.methods.toJSON= function(){
    const user =this.toObject()
    delete user.password
    return user
}

userSchema.methods.generateToken =async function()
{
    try{
        const user = this;
        const token = jwt.sign({_id :user._id.toString()},process.env.JWTKEY)
        user.tokens=user.tokens.concat({token})
        await user.save()
        return token
    }
    catch(e){
        console.log(e.message)
    }
    
}

userSchema.statics.findUserByCredentials = async function(email, password){
    const user = await user.findOne({email})
    if (!user)
        throw new Error("Invalid Email");
    
    const matched = await bcryptjs.compare(password, user.password);
    if (!matched)
        throw new Error("Invalid Password");

    return user;
}

const users = mongoose.model('users', userSchema)
module.exports = users