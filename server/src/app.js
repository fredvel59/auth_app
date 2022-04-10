import express from "express";
import cors from 'cors';
import morgan from "morgan";
import dotenv from 'dotenv';
import usersRouter from './server/users/routers/users.routers.js';
import authRouter from './server/auth/routers/auth.routers.js';
const app = express();
// middlewares
dotenv.config();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
// settings
app.set('port', process.env.PORT || 8080);
// routers
app.use('/users', usersRouter)
app.use('/auth', authRouter )

export default app;