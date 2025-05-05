import { passwordCompare, passwordHash } from "../../../lib/bcrypt";
import { AuthenticationError, ValidationError } from "../../../lib/customErrors";
import { verifyToken } from "../../../lib/verifyToken";
import { AuthRepository } from "../../auth.repository";
import { signInDTO, signInSchema, signUpDTO, userSchema } from "../schema/auth";



export class AuthService {
   constructor(private readonly authRespository: AuthRepository) {}

   async signUp(signUpData: signUpDTO){
        const payload = userSchema.parse(signUpData)
        const existingUser = await this.authRespository.findByEmail(payload.email)

        const existingStudentId = await this.authRespository.findByStudentId(payload.studentId)
        if (existingUser) {
            throw new ValidationError("Email already exists")
        }

        if(existingStudentId) {
            throw new ValidationError("Student ID already exists")
        }

        const toHashPassword = passwordHash(payload.password)

        const newUser = await this.authRespository.createUser({
           ...payload,
           password: toHashPassword
        })
       

        return newUser;
   }

   async signIn(signInData: signInDTO) {
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
        Role: user.Role
       };
    }

   async validateToken(token: string) {
    try {
      const decoded = verifyToken(token);
      const user = await this.authRespository.findById(decoded.userId);
      if (user) {
        return {
          ...user
        };
      }
    } catch (error) {
      throw new AuthenticationError("Invalid or Token expired");
    }
  }
}