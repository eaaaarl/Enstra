import { StudentService } from "./core/service/student.service";
import { StudentController } from "./student.controller";
import { StudentRepository } from "./student.repository";



const studentRepository = new StudentRepository()
const studentService = new StudentService(studentRepository)

export const studentController = new StudentController(studentService)