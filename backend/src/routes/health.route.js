const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
router.get("/", (req, res) => {
  const databaseStatus = mongoose.connection.readyState === 1 ? "UP" : "DOWN";
  res.status(200).json({
    success: true,
    message: "api is healthy",
    data: {
      api: "up",
      database: databaseStatus,
      timestamp: new Date().toISOString(),
    },
  });
});
module.exports = router;   
