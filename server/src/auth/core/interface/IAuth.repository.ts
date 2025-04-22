import { signUpData } from "../entity/auth";



export interface IAuthRepository {
    createUser(payload: signUpData): Promise<signUpData>;
    findByEmail(email:string) : Promise<signUpData | null>;
    findByStudentId(studentId:string): Promise<signUpData | null>;
}