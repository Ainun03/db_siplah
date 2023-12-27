const ProductModel=require('../models/productModel')

const createPost = async(req,res)=>{
    try{
        const post = new ProductModel({
            productName:req.body.productName,
            category:req.body.category,
            desc:req.body.desc,
            price:req.body.price,
            stok:req.body.stok,
            image:req.body.image

        });
        const postData = await post.save();

        res.status(200).send({success:true,msg:'Post data',data:postData});

    }catch(error){
        res.status(400).send({success:false,msg:error.massage});
    }

}


module.exports={
    createPost,
}