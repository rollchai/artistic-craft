const env=require("../config/env")
const jwt=require("jsonwebtoken")

const generateJwtToken=(user)=>{
    return jwt.sign(
        {
            sub:user._id.tostring(),
            role:user.role
        },
        env.jwt.accessSecret,
        {
            expiresIn:env.jwt.accessExpiresIn
        }
    )
};
const generateRefreshtoken=(user)=>{
      return jwt.sign(
        {
            sub:user._id.tostring(),
            role:user.role
        },
        env.jwt.refreshSecret,
        {
            expiresIn:env.jwt.refreshExpiresIn
        }
    )
}
module.exports={
    generateJwtToken,
    generateRefreshtoken
}