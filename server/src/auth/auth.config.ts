import { AuthMiddleware } from "../middleware/auth.middleware";
import { RoleMiddleware } from "../middleware/role.middleware";
import { AuthController } from "./auth.controller";
import { AuthRepository } from "./auth.repository";
import { AuthService } from "./core/service/authService";
import { Role } from "../generated/prisma";

const authRepository = new AuthRepository();
const authService = new AuthService(authRepository);
const authMiddleware = new AuthMiddleware(authService);
const roleMiddleware = new RoleMiddleware();

export const authController = new AuthController(authService);
export const protectedRoute = authMiddleware.protectedRoute.bind(authMiddleware);

export const isAdmin = roleMiddleware.isAdmin.bind(roleMiddleware);
export const isStudent = roleMiddleware.isStudent.bind(roleMiddleware);
export const isAdminOrStudent = roleMiddleware.isAdminOrStudent.bind(roleMiddleware);

export const hasRole = (roles: Role[]) => roleMiddleware.hasRole(roles);