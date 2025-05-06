import express from 'express'
import { isAdmin, protectedRoute } from '../auth/auth.config'
import { adminController } from './admin.config'


const router = express.Router()

router.get('/students', protectedRoute , isAdmin(), adminController.getTotalStudent )


export const adminRoute = router;