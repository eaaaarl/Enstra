import { NextFunction, Request, Response } from "express";
import { AdminService } from "./core/service/admin.service";





export class AdminController {
    constructor(private readonly adminService: AdminService){
        this.getTotalStudent = this.getTotalStudent.bind(this)
    }

    async getTotalStudent (req:Request,res:Response,next:NextFunction) {
        try {
            const student = await this.adminService.getTotalStudent()
            res.status(200).json({data: student})
        } catch (error) {
            next(error)
        }
    }
}