import { passwordCompare, passwordHash } from "../../../lib/bcrypt";
import { AuthenticationError, ValidationError } from "../../../lib/customErrors";
import { verifyToken } from "../../../lib/verifyToken";
import { signInData, signUpData } from "../entity/auth";
import { IAuthRepository } from "../interface/IAuth.repository";
import { signInSchema, userSchema } from "../schema/auth";



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

   async signIn(signInData: signInData) {
        const { email, password } = signInSchema.parse(signInData);
        const user = await this.authRespository.findByEmail(email);
        if (!user) {
            throw new ValidationError("Email or password is incorrect");
        }

        const isValidPassword = passwordCompare(password, user.password );
        if (!isValidPassword) {
            throw new ValidationError("Email or password is incorrect");
        }

       return {
        id: user.id,
        name:user.name,
        studentId: user.studentId,
        email: user.email,
       };
    }

   async validateToken(token: string) {
    try {
      const decoded = verifyToken(token);
      const user = await this.authRespository.findById(decoded.userId);
      if (user) {
        return {
          id: user.id,
          email: user.email,
          studentId: user.id,
          name: user.name,
        };
      }
    } catch (error) {
      throw new AuthenticationError("Invalid or Token expired");
    }
  }
}