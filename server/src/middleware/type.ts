import { Request } from "express";


export interface SafeUser {
    id: string;
    email: string;
    studentId?: string;
    name: string;
    avatarUrl?:string;
    Role:string;
}

export interface CustomRequest extends Request {
    user?: SafeUser;
}


