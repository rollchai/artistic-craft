
const env = require("./src/config/env");
const app = require("./app");
const connectDatabase = require("./src/config/database");
const {
  connectRedis,
  disconnectRedis,
} = require("./src/config/redis");

let server;
let isShuttingDown = false;

const PORT = env.port || process.env.PORT || 5000;  

const startServer = async () => {
  try {
    // 1. Connect to MongoDB
    await connectDatabase();

    // 2. Connect to Redis
    await connectRedis();

    // 3. Start the Express server only after both connections succeed
    server = app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
      console.log(`Environment: ${env.NODE_ENV}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);

    try {
      await disconnectRedis();
    } catch (redisError) {
      console.error("Re dis cleanup failed:", redisError.message);
    }

    process.exitCode = 1;
  }
};

const shutdown = async (signal) => {
  if (isShuttingDown) return;
  isShuttingDown = true;

  console.log(`${signal} received. Shutting down server...`);

  try {
    // Stop accepting new HTTP requests and wait for active requests
    if (server) {
      await new Promise((resolve, reject) => {
        server.close((error) => {
          if (error) reject(error);
          else resolve();
        });
      });
    }

    // Close Redis connection
    await disconnectRedis();

    // Close MongoDB connection
    const mongoose = require("mongoose");
    await mongoose.disconnect();

    console.log("Server shut down successfully.");
    process.exitCode = 0;
  } catch (error) {
    console.error("Error during shutdown:", error.message);
    process.exitCode = 1;
  }
};

process.once("SIGINT", () => shutdown("SIGINT"));
process.once("SIGTERM", () => shutdown("SIGTERM"));

startServer();
