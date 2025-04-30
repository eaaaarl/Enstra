import { NextFunction, Request, Response } from "express";
import { StudentService } from "./core/service/student.service";
import { CustomRequest } from "../middleware/type";
import { ValidationError } from "../lib/customErrors";
import { PrismaClient } from "../generated/prisma";



export class StudentController {
    constructor(private readonly studentService: StudentService) {
        this.createStudentCwts = this.createStudentCwts.bind(this)
    }

    async createStudentCwts(req:CustomRequest, res: Response, next:NextFunction){
        try {
            const payload = req.body;
            const userId = req.user?.id as string;

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
}