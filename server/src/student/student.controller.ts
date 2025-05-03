import { NextFunction, Request, Response } from "express";
import { StudentService } from "./core/service/student.service";
import { CustomRequest } from "../middleware/type";
import { ValidationError } from "../lib/customErrors";
import { string } from "zod";



export class StudentController {
    constructor(private readonly studentService: StudentService) {
        this.createStudentCwts = this.createStudentCwts.bind(this)
        this.updateImageCertificate = this.updateImageCertificate.bind(this)
        this.getStudentRegistrationStatus = this.getStudentRegistrationStatus.bind(this)
    }

    async createStudentCwts(req:CustomRequest, res: Response, next:NextFunction){
        try {
            const payload = req.body;
            const userId = req.user?.id as string;
            console.log(payload)

            if (!userId) {
               throw new ValidationError('User Id is not found...')
            }
            
            const newStudent = await this.studentService.createStudentCwts(payload,userId)

            res.status(201).json({
                message:'You are successfully registered',
                data: newStudent
            })
        } catch (error) {
            next(error)
        }
     
    }


    async updateImageCertificate(req: Request, res: Response, next: NextFunction){
        try {
            const { file } = req;
            const userId = req.params.id;
           
            if (!file) {
                res.status(400).json({ message: "No file uploaded" });
                return;
            }

            const imageCert = await this.studentService.updateImageCertificate(userId, file);

            res.status(200).json({ "message": "Image Certificate has been updated", imageCertificate: imageCert });
        } catch (error) {
            next(error);
        }
    }

    async getStudentRegistrationStatus(req:Request, res:Response, next:NextFunction){
        try {
            const {studentId} = req.params;

            if(!studentId) {
                throw new ValidationError('Student Id is not found')
            }

            const getStudentRegStat = await this.studentService.getStudentProgramRegistrationStatus({studentId})

            res.status(200).json({resource:{
                studentId: getStudentRegStat?.student_id,
                program: getStudentRegStat?.Programs,
                isRegistered: getStudentRegStat !== null,
                registeredAt: getStudentRegStat?.createdAt,
                status: getStudentRegStat ? 'Active' : 'False'
        }})
        } catch (error) {
            next(error)
        }
    }
}