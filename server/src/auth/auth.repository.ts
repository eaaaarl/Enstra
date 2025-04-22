import { signUpData } from "./core/entity/auth";
import { IAuthRepository } from "./core/interface/IAuth.repository";
import { PrismaClient } from "../generated/prisma";
import { DatabaseError } from "../lib/customErrors";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";


export class AuthRepository implements IAuthRepository {
    private prisma = new PrismaClient()
    async createUser(payload: signUpData) {
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