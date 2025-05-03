import { PrismaClient } from "../generated/prisma";
import { DatabaseError } from "../lib/customErrors";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { signUpDTO } from "./core/schema/auth";

export class AuthRepository {
    private prisma = new PrismaClient()
    
    async createUser(payload: signUpDTO) {
        try {
            const newUser = await this.prisma.user.create({
                data: payload,
                select: {
                  id: true,
                  name: true,
                  studentId: true,
                  avatarUrl: true,
                  email: true,
                }
            })
            
           return newUser;
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError) {
                throw new DatabaseError("Failed to create user at createUser method")
            }
            throw error;
        }
    }

    async findByEmail(email: string) {
      try {
        const user = await this.prisma.user.findUnique({
            where: {
                email
            },
            select: {
              id: true,
              name: true,
              studentId: true,
              avatarUrl: true,
              email: true,
              password: true
            }
        })

        if (!user) {
            return null;
        }

        return user;
      } catch (error) {
        if(error instanceof PrismaClientKnownRequestError) {
            throw new DatabaseError("Failed to find user email at findByEmail method")
        }
        throw error;
      }
    }

    async findById(id: string) {
        try {
          const user = await this.prisma.user.findUnique({
              where: {
                id
              },
              select: {
                id: true,
                name: true,
                studentId: true,
                avatarUrl: true,
                email: true,
              }
          })
  
          if (!user) {
              return null;
          }
  
          return user;
        } catch (error) {
          if(error instanceof PrismaClientKnownRequestError) {
              throw new DatabaseError("Failed to find user ID at findById method")
          }
          throw error;
        }
      }

    async findByStudentId(studentId: string) {
        try {
          const user = await this.prisma.user.findUnique({
              where: {
                studentId
              },
              select: {
                id:true,
                studentId: true,
                email: true,
                password: true
              }
          })
  
          if (!user) {
              return null;
          }

          return user
        } catch (error) {
          if(error instanceof PrismaClientKnownRequestError) {
              throw new DatabaseError("Failed to find user studentId at findByStudentId method")
          }
          throw error;
        }
      }
}