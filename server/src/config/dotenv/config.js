import dotenv from "dotenv";
dotenv.config();

export default {
  dbName: process.env.dbName,
  dbUser: process.env.dbUser,
  dbPasswd: process.env.dbPasswd,
  secretKey: process.env.KEY_SECRET_JWT,
  // list of admins
  admin1: process.env.ADMIN1,
  admin2: process.env.ADMIN2,
  admin3: process.env.ADMIN3
}