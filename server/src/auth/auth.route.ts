import express from 'express';
import { authController, protectedRoute } from './auth.config';


const router = express.Router();

router.post('/signup', authController.signUp); 
router.post('/signin', authController.signIn);
router.post('/logout', authController.logout);
router.get('/me',protectedRoute, authController.me);

export default router;