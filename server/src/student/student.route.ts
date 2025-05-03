import express from 'express'
import { studentController } from './student.config'
import { protectedRoute } from '../auth/auth.config';
import { upload } from '../middleware/upload.middleware';


const router = express.Router()

router.post('/create/cwts', protectedRoute, studentController.createStudentCwts)
router.put('/image-certificate/:id', protectedRoute, upload.single('imageCert'), studentController.updateImageCertificate)
router.get('/:studentId/check-registration', protectedRoute, studentController.getStudentRegistrationStatus)

export const studentRoute = router;