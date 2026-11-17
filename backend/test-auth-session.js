require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});
const mongoose = require("mongoose");
const connectDatabase = require("./src/config/database");

const { connectRedis, disconnectRedis } = require("./src/config/redis");
const {
  createRefreshSession,
  getRefreshSession,
  revokeRefreshSession
} = require("./src/modules/auth/auth.session.service");

const testSession = async () => {
  try {
    await connectDatabase();
    await connectRedis();

    // use a temporary test id this does not create a mongodb user
    const userId = new mongoose.Types.ObjectId().toString();
    const created = await createRefreshSession(userId);
    console.log("1. Session created:", Boolean(created.refreshToken));

    const session = await getRefreshSession(created.refreshToken);
    console.log("2. Token validation:", Boolean(session));
    console.log("3. User ID matches:", session?.userId === userId);

    await revokeRefreshSession(userId, created.sessionId);
    const revokedSession = await getRefreshSession(created.refreshToken);
    console.log("4. Revoked token rejected:", revokedSession === null);
  } catch (error) {
    console.error("Session test failed:", error.message);
    process.exitCode = 1;
  } finally {
    await disconnectRedis();
    await mongoose.disconnect();
  }
};

testSession();
