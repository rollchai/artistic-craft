const getCurrentUser=(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"current user fetched successfully",
        data:{
            user:req.user
        }
    })
}
module.exports={
    getCurrentUser
}