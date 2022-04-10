const express = require('express');
const { getAllUsers } = require('../services/users.services.js');
const router = express.Router();


router.get('/all', getAllUsers);

module.exports = router;