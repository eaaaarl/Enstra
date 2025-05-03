import { uploadImage } from "../../../lib/cloudinary";
import { NotFoundError, ValidationError } from "../../../lib/customErrors";
import { StudentRepository } from "../../student.repository";
import { FileInput } from "../interface/IStudent.repository";
import { studentDTO, studentSchema } from "../schema/student.schema";



export class StudentService {
    constructor(private readonly studentRepository: StudentRepository) {}

    async createStudentCwts (data: studentDTO,userId:string) {
       const payload = studentSchema.parse(data);
       const existingStudent = await this.studentRepository.findByStudentId(payload.student_id)
        const existingEmailStudent = await this.studentRepository.findByStudentEmail(payload.email)
       if(existingStudent) {
        throw new ValidationError('Student ID is already exist')
       }
       if (existingEmailStudent) {
        throw new ValidationError("Email already exists")

       }
        const newStudent = await this.studentRepository.createCwtsStudent(payload, userId);
        return newStudent;
    }

    async updateImageCertificate(userId:string, file:FileInput){
        if(!file){
            throw new NotFoundError('Image file not found')
        }

        const imageUrl = await uploadImage({
            filePath: file.path,
            folder: 'documents',
            deleteLocalFile: true
        })

        const updatedImageCertificate = await this.studentRepository.updateImageCertificate({userId, imageUrl})

        return updatedImageCertificate
    }

    async getStudentProgramRegistrationStatus({studentId}: {studentId:string}) {
        const getStudentRegStat = await this.studentRepository.findByStudentId(studentId)
        return getStudentRegStat
    }
}