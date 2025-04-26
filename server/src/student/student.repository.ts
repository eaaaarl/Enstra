import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { PrismaClient, Prisma } from "../generated/prisma"; // Import Prisma types
import { DatabaseError } from "../lib/customErrors";

export class StudentRepository {
    private prisma = new PrismaClient();

    async createCwtsStudent(payload: Prisma.StudentCreateInput, userId:string) {
        try {
            const newCWstudent = await this.prisma.student.create({
                data: {
                    ...payload,
                    date_birth: new Date(payload.date_birth),
                    user: {
                        connect: { id: userId }
                    }
                }
            });

            return newCWstudent;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                throw new DatabaseError("Failed to create student cwts at createCwtsStudent method");
            }
            throw error;
        }
    }

    async findByStudentId(studentId:string){
        try {
            const student = await this.prisma.student.findUnique({
                where:{
                    student_id: studentId
                }
            })

            if(!student){
                return null
            }

            return student
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                throw new DatabaseError("Failed to find student Id at findByStudentId method");
            }
            throw error;
        }
    }

    async findByStudentEmail(email:string) {
        try {
            const student = await this.prisma.student.findUnique({
                where:{
                    email
                }
            })
            if(!student){
                return null
            }

            return student
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                throw new DatabaseError("Failed to find by email at findByStudentEmail method");
            }
            throw error;
        }
    }
}
