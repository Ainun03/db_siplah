const Author =require('../models/Users')

const testingPost = async(req,res)=>{
    const {name,books}=req.body
    try{
        const register = new Author({
            name:name,
            books:books,
        });
        // const registerData = await register.save();
        // res.status(200).send({success:true,msg:'Account created data',data:registerData});
        Author.findOne({name:name})
        .then(user =>{
            if(user){
                res.json("Already have an account")
            }else{
                Author.create({name:name,books:books})
                .then(result => res.json("Author created"))
                .catch(err => res.json("Eror"))
            }
        })
    }catch(error){
        res.status(400).send({success:false,msg:error.massage});
    }

}
module.exports={
    testingPost,
}