const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const healthroute=require("./src/routes/health.route");
const errorhandler = require("./src/middleware/error.middleware");
const authRoutes=require("../backend/src/modules/auth/auth.route")
// this is security middleware
const app = express();
// all frontend to communicate with backend
app.use(cors());
// parse json request
app.use(express.json());
// this is security middleware
app.use(helmet())
app.use(errorhandler);
app.use("/api/v1/health",healthroute)
app.use("/api/v1/auth",authRoutes)
module.exports = app;

