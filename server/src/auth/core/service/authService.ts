import { passwordHash } from "../../../lib/bcrypt";
import { ValidationError } from "../../../lib/customErrors";
import { signUpData } from "../entity/auth";
import { IAuthRepository } from "../interface/IAuth.repository";
import { userSchema } from "../schema/auth";



export class AuthService {
   constructor(private readonly authRespository: IAuthRepository) {}


   async signUp(signUpData: signUpData){
        const {email,name,password,studentId} = userSchema.parse(signUpData)
        const existingUser = await this.authRespository.findByEmail(email)

        const existingStudentId = await this.authRespository.findByStudentId(studentId)
        if (existingUser) {
            throw new ValidationError("Email already exists")
        }

        if(existingStudentId) {
            throw new ValidationError("Student ID already exists")
        }

        const toHashPassword = passwordHash(password)

        const newUser = await this.authRespository.createUser({
            email,
            name,
            password:toHashPassword,
            studentId
        })
       

        return newUser;
   }
}