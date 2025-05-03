import { signUpDTO } from "../schema/auth";



export interface IAuthRepository {
    createUser(payload: signUpDTO): Promise<signUpDTO>;
    findByEmail(email:string) : Promise<UserData | null>;
    findByStudentId(studentId:string): Promise<UserData | null>;
    //findById(id:string): Promise<null>;
}

interface BaseUserData {
    id:string;
    name:string;
    studentId:string;
    email:string;
    avatarUrl?:string;
}

type UserData = Omit<BaseUserData,''> & {
    password:string
}

type UserStudentData = Omit<BaseUserData, ''> & {
    Student: {
        Programs:string
    }
}