const low = require("lowdb");
// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URL);
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
  
// });

const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [], sessions: [], transfer: [] }).write();

module.exports = db;
