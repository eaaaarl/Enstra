import express from 'express';
import { authController } from './auth.config';


const router = express.Router();

router.post('/signup', authController.signUp); 
router.post('/signin', authController.signIn);

export default router;