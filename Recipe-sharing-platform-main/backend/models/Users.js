const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    fullname:{type:String,require:true},
    username:{type:String,require:true},
    email:{type:String,require:true},
    contact: { 
        type: String, 
        required: true,
        match: [/^[0-9]{10}$/, "Contact number must be exactly 10 digits and contain only numbers"]
    },
    password:{type:String,require:true}
})

module.exports=mongoose.model('User',UserSchema)