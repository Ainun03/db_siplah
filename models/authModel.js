const mongoose=require('mongoose')

const authSchema =new mongoose.Schema({
    // username: String,
    // email: String, 
    // password: String
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    },
    role:{
        type:String
    },

})
module.exports= mongoose.model("register",authSchema)