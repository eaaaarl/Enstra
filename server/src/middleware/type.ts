import { Request } from "express";


export interface SafeUser {
    id: string;
    email: string;
    studentId?: string;
    name: string;
}

export interface CustomRequest extends Request {
    user?: SafeUser;
}


