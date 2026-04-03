const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
  try {
    // Kết nối database
    await MongoDB.connect(config.db.uri);
    console.log("✅ Connected to the database!");

    // Chạy server
    const PORT = config.app.port || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Cannot connect to the database!", error);
    process.exit(1);
  }
}

startServer();