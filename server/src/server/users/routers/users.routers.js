import express from 'express';
import { verifyToken } from '../../auth/middlewares/jwt.verify.js';
import { getAllUsers } from '../services/users.services.js';
const router = express.Router();

router.get('/all', verifyToken ,getAllUsers);

export default router;