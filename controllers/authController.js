const Auth =require('../models/authModel')

const registerPost = async(req,res)=>{
    const {username,email,password,role}=req.body
    console.log(username)
    try{
        const register = new Auth({
            username:username,
            email:email,
            password:password,
            role:role
        });
        // const registerData = await register.save();
        // res.status(200).send({success:true,msg:'Account created data',data:registerData});
        Auth.findOne({email:email})
        .then(user =>{
            if(user){
                res.json("Already have an account")
            }else{
                // const registerData = await post.save();
                // res.status(200).send({success:true,msg:'Account created data',data:registerData});
                Auth.create({username:username,email:email,password:password,role:role})
                .then(result => res.json("Account created"))
                .catch(err => res.json("Eror"))
            }
        })
    }catch(error){
        res.status(400).send({success:false,msg:error.massage});
    }

}
const loginPost = async(req,res)=>{
    const {email,password}=req.body
    try{
        const login = new Auth({
            email:email,
            password:password
        });
        Auth.findOne({email:email})
        .then(user =>{
            if(user){
                if(user.password === password){
                    res.json({username:user.username,email:user.email,role:user.role,status:"success"})
                }else{
                    res.json("Password incorrect")
                }
            }else{
                res.json("Tidaka ada data")
            }
        })
    }catch(error){
        res.status(400).send({success:false,msg:error.massage});
    }

}

module.exports={
    registerPost,
    loginPost
}