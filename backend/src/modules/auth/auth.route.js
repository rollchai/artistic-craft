const express = require("express");

const authController = require("./auth.controller");
const { registerValidation, loginValidation } = require("./auth.validation");
const validateRequest = require("../../middleware/validation.middleware");
const router = express.Router();
router.post(
  "/register",
  registerValidation,
  validateRequest,
  authController.register,
);
router.post("/login", loginValidation, validateRequest,authController.login);
module.exports = router;
