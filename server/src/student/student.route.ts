import express from 'express'
import { studentController } from './student.config'
import { protectedRoute } from '../auth/auth.config';


const router = express.Router()

router.post('/create/cwts', protectedRoute, studentController.createStudentCwts)

export const studentRoute = router;