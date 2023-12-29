

// let data =require('./api/profil.json')
// console.log(data)

const express =require('express')
// const mysql = require ('mysql')
const cors =require ('cors')
const Author =require('./models/Users')
const ProductModel=require('./models/productModel')
const postController = require('./controllers/productController')
const RegisterModel=require('./models/authModel')

const app = express()
require("dotenv").config();
const connectDB = require("./connectMongo");

connectDB();
// app.use(express.json());
// app.use(cors());
app.use(cors({
    origin:'*'
    // methods:["POST","GET"],
    // credentials:true
}));

// const mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost:27017/crud")
// mongoose.connect("mongodb+srv://ainunrofiq7:WnVhuCa5Q10nAMHc@cluster0.9bsi7nx.mongodb.net/?retryWrites=true&w=majority");
// mongoose.connect("mongodb://ainunrofiq7:WnVhuCa5Q10nAMHc@cluster0-shard-00-00.9bsi7nx.mongodb.net:27017,cluster0-shard-00-01.9bsi7nx.mongodb.net:27017,cluster0-shard-00-02.9bsi7nx.mongodb.net:27017/cluster0?ssl=true&replicaSet=atlas-shard-0&authSource=admin&retryWrites=true&w=majority",
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,

// });

const register_route=require('./routes/registerRoute')
app.use('/api',register_route)

const login_route=require('./routes/loginRoute')
app.use('/api',login_route)

const testing_route=require('./routes/testingRoute')
app.use('/api',testing_route)

// app.get('/getUsers',(req,res)=>{
//     return res.json("from Backend Side");
// })
// app.post('/register', postController.register)
    // console.log(req.body)
    // const { username, email, password }= req.body;
    // RegisterModel.findOne({email: email})
    // .then(user =>{
    //     if(user){
    //         res.json("Already have an account")
    //     }else{
    //         // const registerData = await post.save();
    //         // res.status(200).send({success:true,msg:'Account created data',data:registerData});
    //         RegisterModel.create({username: username, email: email, password: password})
    //         .then(result => res.json("Account created"))
    //         .catch(err => res.json(err))
    //     }
    // }).catch(err => res.json(err))
// })

const post_route=require('./routes/postRoute')
app.use('/api',post_route)

// ====== get Data =====
// app.get('/getData',(req,res)=>{
//     UserModel.find()
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })
app.get('/',(req,res)=>{
   res.json("Hello")
})
app.get('/product',(req,res)=>{
    ProductModel.find()
    .then(product => res.json(product))
    .catch(err => res.json(err))
})


// const db =mysql.createConnection({
//     host:"localhost",
//     user:'root',
//     password:'',
//     database:'siplah'

// })

// my sql ======

// app.get('/',(re,res)=>{
//     return res.json("from Backend Side");
// })
// app.get('/data',(re,res)=>{
//     res.json(data);
// })
// app.get('/product',(req,res)=>{
//     const sql = "SELECT * FROM product ";
//     db.query(sql,(err, result)=>{
//         if(err) return res.json({Message:"Error inside server"});
//         return res.json(result);
//     })
  
// })


// app.post('/register',(req,res)=>{
//     const sql = "INSERT INTO register (`username`, `email`,`password`) VALUES (?) ";
//     const values = [
//         req.body.username,
//         req.body.email,
//         req.body.password
//     ]
//     db.query(sql,[values],(err, data)=>{
//         if(err) {
//             return res.json("Register Failed");
//         }
//             return res.json(data);
        
//         // if (data.length > 0){
//         //     return res.json("Register Succes");
//         // }else{
//         //     return res.json("Register");
//         // }
//     })
// })
// app.post('/login',(req,res)=>{
//     const sql = "SELECT * FROM register WHERE email = ? AND password = ? ";
//     // const values = [
//     //     req.body.email,
//     //     req.body.password
//     // ]
//     db.query(sql,[ req.body.email, req.body.password],(err, data)=>{
//         if(err) return res.json("Login Failed");
//         if (data.length > 0){
//             return res.json("Login Succes");
//         }else{
//             return res.json("No Record");
//         }
//     })
// })

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("listening"+ PORT);
})