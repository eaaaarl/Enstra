import { PrismaClientUnknownRequestError } from "@prisma/client/runtime/library";
import { PrismaClient } from "../generated/prisma";
import { DatabaseError } from "../lib/customErrors";




export class AdminRepository {
    private prisma = new PrismaClient()

    async getTotalStudent () {
        try {
            const student = await this.prisma.student.findMany()
            return student
        } catch (error) {
            if(error instanceof PrismaClientUnknownRequestError){
                console.error(error)
                throw new DatabaseError('Failed to get total student at getTotalStudent method')
            }
            throw error;
        }
    }
}