import express from 'express';
import { authController, isAdmin, isStudent, protectedRoute } from './auth.config';

const router = express.Router();

router.post('/signup', authController.signUp); 
router.post('/signin', authController.signIn);
router.post('/logout', authController.logout);

router.get('/student/me', protectedRoute, isStudent(), authController.me);
router.get('/admin/me' , protectedRoute, isAdmin(), authController.me)

export default router;