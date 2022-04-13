import { Sequelize } from "sequelize";
import sequelize from "../../../config/database/db.connection.js";

const users = sequelize.define('users', {
  id: {
    primaryKey: true,
    type: Sequelize.TEXT
  },
  rool: Sequelize.TEXT, // cliente || administrador
  name: Sequelize.TEXT, // no greater than 50 characterers and less than 10 
  email: Sequelize.TEXT, 
  password: Sequelize.TEXT, // no greater than 25 characterers and less than 6 
  phone: Sequelize.INTEGER, // TODO: this section must be changed for text cause "+591 62565980"
  // photo: Sequelize.TEXT,
  // photo_id: Sequelize.TEXT,
  verified: Sequelize.BOOLEAN,
  admin: Sequelize.BOOLEAN,
  key_email: Sequelize.TEXT // no greater than 12 chatanterers
}, {
  timestamps: false
})

export default users;