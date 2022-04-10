const Users = require("../models/users.models.js");

exports.getAllUsers = async (_req, res) => {
  const users = await Users.findAll();
  if(users.length > 0) {
    res.json(users);
  }else {
    res.json({
      message: 'there are no users yet'
    })
  }
}