const bcrypt = require("bcrypt");
const User = require("../users/user.model");
const { generateJwtToken, generateRefreshtoken } = require("../../utils/jwt");
const registeUser = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const error = new Error("user with this email is already exsist");
    error.statusCode = 409;
    throw error;
  }
  const hashedpassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email,
    password: hashedpassword,
  });
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
    isEmailVerified: user.isEmailVerified,
  };
};
const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    const error = new Error("invalid email and password");
    error.statusCode = 401;

    throw error;
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    const error = new Error("invalid email and password");
    error.statusCode = 401;
    throw error;
  }
  if (user.status !== "active") {
    const error = new Error("user status should be active");
    error.statusCode = 403;
    throw error;
  }
  user.lastLoginAt = new Date();
  await user.save();
  const accessToken = generateJwtToken(user);
  const refreshToken = generateRefreshtoken(user);
  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      isEmailVerified: user.isEmailVerified,
    },
    accessToken,
    refreshToken,
  };
};

module.exports = {
  registeUser,
  loginUser
};
