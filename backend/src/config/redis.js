
const { createClient } = require("redis");
const env = require("./env");

const redisClient = createClient({
  url: env.redisUrl,
});

redisClient.on("error", (error) => {
  console.error("Redis client error:", error.message);
});

redisClient.on("connect", () => {
  console.log("Connecting to Redis...");
});

redisClient.on("ready", () => {
  console.log("Redis connection is ready");
});

const connectRedis = async () => {
  if (!redisClient.isOpen) { 
    await redisClient.connect();
  }

  await redisClient.ping();
  console.log("Redis connected successfully: PONG");
};

const disconnectRedis = async () => {
  if (redisClient.isOpen) {
    await redisClient.quit();
  }
};

module.exports = {
  redisClient,
  connectRedis,
  disconnectRedis,
};
