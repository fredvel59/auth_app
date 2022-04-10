const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
require('dotenv').config();
const usersRouter = require('./server/users/routers/users.routers.js');
const authRouter = require('./server/auth/routers/auth.routers.js');
const app = express();
// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
// settings
app.set('port', process.env.PORT || 8080);
// routers
app.use('/users', usersRouter)
app.use('/auth', authRouter )

module.exports = app;