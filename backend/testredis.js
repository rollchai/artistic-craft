require("dotenv").config({
 path: `.env.${process.env.NODE_ENV || "development"}`
})

const { createClient } = require("redis")

const testRedis = async () => {
 const client = createClient({
  url: process.env.REDIS_URL
 })
 client.on("error", (error) => {
  console.error("Redis error", error.message)
 })
 try {
  await client.connect()
  const result = await client.ping()
  console.log("redis connect successfully", result)
 } catch (error) {
  console.error("Redis connection failed:", error.message);
  process.exitCode = 1;
 }
 finally{
  if(client.isOpen){
   await client.quit()
  }
 }
}
testRedis()