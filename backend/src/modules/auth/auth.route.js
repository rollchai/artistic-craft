const express = require("express");

const authController = require("./auth.controller");
const meController = require("./auth.me.controller");
const {authenticate,authorize} = require("../../middleware/auth.middleware");
const { registerValidation, loginValidation } = require("./auth.validation");
const validateRequest = require("../../middleware/validation.middleware");
const accessController=require("../auth/auth.access.controller")
const router = express.Router();
router.post(
  "/register",
  registerValidation,
  validateRequest,
  authController.register,
);
router.post("/login", loginValidation, validateRequest, authController.login);

router.get("/me", authenticate, meController.getCurrentUser);

router.get(
  "/customer-test",
  authenticate,
  authorize("customer"),
  accessController.customerAcess,
);
router.get(
  "/artistic-test",
  authenticate,
  authorize("artist"),
  accessController.artisticAcess,
);
router.get(
  "/admin-test",
  authenticate,
  authorize("admin"),
  accessController.adminAcess,
);
module.exports = router;
