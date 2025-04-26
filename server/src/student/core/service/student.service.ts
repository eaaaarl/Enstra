import { Prisma } from "../../../generated/prisma";
import { ValidationError } from "../../../lib/customErrors";
import { StudentRepository } from "../../student.repository";
import { studentSchema } from "../schema/student.schema";



export class StudentService {
    constructor(private readonly studentRepository: StudentRepository) {}

    async createStudentCwts (data: Prisma.StudentCreateInput,userId:string) {
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
}