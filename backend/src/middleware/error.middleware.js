const errorhandler=(error,res,req,next)=>{
    console.error(error)
    const statusCode=error.statusCode || 500;
    return res.status(statusCode).json({
        success:false,
        message:
            statusCode===500
            ? "Interval server error":
            error.message
        
    })
}
module.exports=errorhandler;