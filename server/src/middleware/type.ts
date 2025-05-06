import { Request } from "express";
import { Role } from "../generated/prisma";


export interface SafeUser {
    id: string;
    email: string;
    studentId?: string;
    name: string;
    avatarUrl?:string;
    Role: Role;
}

export interface CustomRequest extends Request {
    user?: SafeUser;
}


