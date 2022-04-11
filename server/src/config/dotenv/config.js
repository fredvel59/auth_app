import dotenv from "dotenv";
dotenv.config();

export default {
  dbName: process.env.dbName,
  dbUser: process.env.dbUser,
  dbPasswd: process.env.dbPasswd,
  secretKey: process.env.KEY_SECRET_JWT
}