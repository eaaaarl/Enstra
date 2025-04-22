import { AuthController } from "./auth.controller";
import { AuthRepository } from "./auth.repository";
import { AuthService } from "./core/service/authService";


const authRespository = new AuthRepository()
const authService = new AuthService(authRespository)
export const authController = new AuthController(authService)