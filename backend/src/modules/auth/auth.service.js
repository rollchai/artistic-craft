const bcrypt = require("bcrypt");
const User = require("../users/user.model");
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

module.exports = {
  registeUser,
};
