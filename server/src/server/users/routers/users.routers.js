import express from 'express';
import { getAllUsers } from '../services/users.services.js';
const router = express.Router();


router.get('/all', getAllUsers);

export default router;