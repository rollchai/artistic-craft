const jwt = require("jsonwebtoken")
const env = require("../config/env")
const User = require("../modules/users/user.model")

const authenticate = async (req, res, next) => {
 try {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith("Bearer")) {
   return res.status(401).json({
    success: false,
    message: "authentication required"
   })
  }
  const accesstoken = authHeader.split(" ")[1];
  if (!accesstoken) {
   return res.status(401).json({
    success: false,
    message: "Access token is missing",
   })
  }
  const decoded = jwt.verify(
   accesstoken,
   env.jwt.accessSecret
  )
  // find user
  const user = await User.findById(decoded.sub)
  if (!user) {
   return res.status(401).json({
    success: false,
    message: "User no longer exists",
   });
  }

  if (user.status !== "active") {
   return res.status(403).json({
    success: false,
    message: "your account is not active"
   })
  }

  // 6. Attach authenticated user to the request
  req.user = {
   id: user._id.toString(),
   name: user.name,
   email: user.email,
   role: user.role,
   status: user.status,
  };
  next()
 } catch (error) {
  if (
   error.name === "TokenExpiredError" ||
   error.name === "JsonWebTokenError" ||
   error.name === "NotBeforeError"
  ) {
   return res.status(401).json({
    success: false,
    message: "Invalid or expired access token",
   });
  }
  next(error);
 }
}
// authroization middleware
const authorize=(...allowedRoles)=>{
 return (req,res,next)=>{
  if(!req.user){
   return res.status(401).json({
    success:false,
    message:"Authentication required"
   })
  }
  if(!allowedRoles.includes(req.user.role)){
   return res.status(403).json({
    success:false,
    message:"you do not have permission to access this resources"
   })
  }
  next()
 }
}
module.exports = {authenticate,authorize};