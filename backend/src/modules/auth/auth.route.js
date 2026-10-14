const express = require("express");

const authController = require("./auth.controller");
const meController=require("./auth.me.controller")
const authenticate=require("../../middleware/auth.middleware")
const { registerValidation, loginValidation } = require("./auth.validation");
const validateRequest = require("../../middleware/validation.middleware");
const router = express.Router();
router.post(
  "/register",
  registerValidation,
  validateRequest,
  authController.register,
);
router.post("/login", 
  loginValidation,
   validateRequest,
   authController.login);
   
   router.get("/me",
    authenticate,
    meController.getCurrentUser
   )
module.exports = router;
