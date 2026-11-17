const path = require("path");

// Switch process working directory to backend so .env and relative paths resolve properly
process.chdir(path.join(__dirname, "backend"));

// Run the backend auth session test
require("./backend/test-auth-session.js");

