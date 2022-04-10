const express = require('express');
const { createUser } = require('../services/auth.services');
const router = express.Router();


router.post('/signup', createUser);

module.exports = router;