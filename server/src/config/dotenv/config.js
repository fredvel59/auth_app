const  dotenv = require("dotenv");
dotenv.config();

module.exports = {
  dbName: process.env.dbName,
  dbUser: process.env.dbUser,
  dbPasswd: process.env.dbPasswd
}