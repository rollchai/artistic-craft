const crypto = require("crypto");

const generateRefreshToken = () => {
  const sessionId = crypto.randomBytes(16).toString("hex");
  const secret = crypto.randomBytes(32).toString("base64url");
  return {
    sessionId,
    secret,
    token: `${sessionId}.${secret}`
  };
};

const hashRefreshToken = (secret) => {
  return crypto
    .createHash("sha256")
    .update(secret)
    .digest("hex");
};

module.exports = {
  generateRefreshToken,
  hashRefreshToken,
};
