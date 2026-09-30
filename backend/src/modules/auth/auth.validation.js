const {body}=require("express-validator")

const registerValidation=[
    body("name")
    .trim()
    .notEmpty()
    .withMessage("name is required")
    .isLength({min:2,max:100})
    .withMessage("Names must be between 2 and 100 character"),

    body("email")
    .trim()
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),
    
    body("password")
    .trim()
    .notEmpty()
    .withMessage("password is required")
    .isLength({min:8})
    .withMessage("password must be atleast 8 character")
    
]
module.exports={
    registerValidation
}