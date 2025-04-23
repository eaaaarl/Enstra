import { signUpData } from "../entity/auth";



export interface IAuthRepository {
    createUser(payload: signUpData): Promise<signUpData>;
    findByEmail(email:string) : Promise<UserData | null>;
    findByStudentId(studentId:string): Promise<UserData | null>;
    findById(id:string): Promise<UserData | null>;
}

interface UserData {
    id:string;
    name:string;
    studentId:string;
    email:string;
    password:string;
}