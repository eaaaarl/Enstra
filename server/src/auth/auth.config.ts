import { AuthMiddleware } from "../middleware/auth.middleware";
import { AuthController } from "./auth.controller";
import { AuthRepository } from "./auth.repository";
import { AuthService } from "./core/service/authService";

const authRespository = new AuthRepository()
const authService = new AuthService(authRespository)
const middleware = new AuthMiddleware(authService)

export const authController = new AuthController(authService)
export const protectedRoute = middleware.protectedRoute.bind(middleware)