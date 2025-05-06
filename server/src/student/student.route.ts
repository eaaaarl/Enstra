import express from 'express'
import { studentController } from './student.config'
import { isStudent, protectedRoute } from '../auth/auth.config';
import { upload } from '../middleware/upload.middleware';


const router = express.Router()
router.post('/create/cwts', protectedRoute, isStudent(), studentController.createStudentCwts)
router.put('/image-certificate/:id', protectedRoute, isStudent(), upload.single('imageCert'), studentController.updateImageCertificate)
router.get('/:studentId/check-registration', protectedRoute, isStudent(), studentController.getStudentRegistrationStatus)

export const studentRoute = router;