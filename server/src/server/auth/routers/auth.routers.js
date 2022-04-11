import express from 'express';
import { confirm_Email, createUser, registerUser } from '../services/auth.services.js';
const router = express.Router();


router.post('/signup', createUser);
router.post('/login', registerUser);
router.get('/verifyEmail/:id', confirm_Email)

export default router;