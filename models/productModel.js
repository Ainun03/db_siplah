const mongoose=require('mongoose')

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }, 
    desc:{
        type:String,
        required:true
    }, 
    price:{
        type:Number,
        required:true
    }, 
    stok:{
        type:Number,
        required:true
    }, 
    image:{
        type:String,
        required:true
    },

})
const ProductModel= mongoose.model('product',productSchema)
module.exports= ProductModel