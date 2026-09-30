//This file actually start the sserver
const env = require("../backend/src/config/env.js");
const app = require("./app");
const connectDatabase = require("../backend/src/config/database");
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`server is running on PORT ${PORT}`);
      console.log(`Environment: ${env.NODE_ENV}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};
startServer();
