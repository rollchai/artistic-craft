const dotenv = require("dotenv");
const environment = process.env.NODE_ENV || "development";
dotenv.config({
  path: `.env.${environment}`,
});
const requiredVariables = ["MONGO_URI"];

for (const variable of requiredVariables) {
  if (!process.env[variable]) {
    throw new Error(`Missing required environment variable: ${variable}`);
  }
}
const env = {
  NODE_ENV: process.env.NODE_ENV,
  port: Number(process.env.PORT) || 5000,
  mongoUri: process.env.MONGO_URI,
  frontendUrl: process.env.FRONTEND_URL,
};
module.exports = env;
