const express = require("express");

const authController = require("./auth.controller");
const { registerValidation } = require("./auth.validation");
const validateRequest  = require("../../middleware/validation.middleware");
const router = express.Router();
router.post(
  "/register",
  registerValidation,
  validateRequest,
  authController.register,
);
module.exports = router;
