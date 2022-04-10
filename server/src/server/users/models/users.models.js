const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/database/db.connection.js");

const users = sequelize.define('users', {
  id: {
    primaryKey: true,
    type: DataTypes.TEXT
  },
  rool: DataTypes.TEXT, // cliente || administrador
  name: DataTypes.TEXT, // no greater than 50 characterers and less than 10 
  email: DataTypes.TEXT, 
  password: DataTypes.TEXT, // no greater than 25 characterers and less than 6 
  phone: DataTypes.INTEGER, // TODO: this section must be changed for text cause "+591 62565980"
  photo: DataTypes.TEXT,
  photo_id: DataTypes.TEXT,
  verified: DataTypes.BOOLEAN,
  admin: DataTypes.BOOLEAN,
  key_email: DataTypes.TEXT // no greater than 12 chatanterers
}, {
  timestamps: false
})

module.exports = users;