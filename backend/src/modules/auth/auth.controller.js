const authService = require("./auth.service.js");
const register = async (req, res, next) => {
  try {
    const user = await authService.registeUser(req.body);
    return res.status(201).json({
      success: true,
      message: "user register successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  register,
};
