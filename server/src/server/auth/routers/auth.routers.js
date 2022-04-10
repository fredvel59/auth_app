import express from 'express';
import { createUser } from '../services/auth.services.js';
const router = express.Router();


router.post('/signup', createUser);

export default router;