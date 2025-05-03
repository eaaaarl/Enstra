import { PrismaClient } from "../generated/prisma";
import { DatabaseError } from "../lib/customErrors";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { signUpDTO } from "./core/schema/auth";


export class AuthRepository {
    private prisma = new PrismaClient()
    
    async createUser(payload: signUpDTO) {
        try {
            const newUser = await this.prisma.user.create({
                data: {
                    name: payload.name,
                    studentId: payload.studentId,
                    email: payload.email,
                    password: payload.password
                }
            })
            
            return {
                id: newUser.id ?? "",
                name: newUser.name ?? "",
                studentId: newUser.studentId ?? "",
                email: newUser.email,
                password: newUser.password
            }
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
            }
        })

        if (!user) {
            return null;
        }

        return {
            id: user?.id ?? "",
            name: user?.name ?? "",
            studentId: user?.studentId ?? "",
            email: user?.email ?? "",
            password: user?.password ?? ""
        }
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
                Student: {
                  select: {
                    Programs: true
                  }
                }
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
              }
          })
  
          if (!user) {
              return null;
          }
  
          return {
            id: user?.id ?? "",
              name: user?.name ?? "",
              studentId: user?.studentId ?? "",
              email: user?.email ?? "",
              password: user?.password ?? ""
          }
        } catch (error) {
          if(error instanceof PrismaClientKnownRequestError) {
              throw new DatabaseError("Failed to find user studentId at findByStudentId method")
          }
          throw error;
        }
      }
}