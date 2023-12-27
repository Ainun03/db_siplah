const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }, 

})
const AuthorSchema = new Schema({
    name:{
        type:String,
        // required:true
    },
    books:[DataSchema], 

})

const Author= mongoose.model('coba',AuthorSchema)
module.exports= Author