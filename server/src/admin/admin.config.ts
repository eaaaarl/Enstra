import { AdminController } from "./admin.controller";
import { AdminRepository } from "./admin.repository";
import { AdminService } from "./core/service/admin.service";

const adminRepository = new AdminRepository()
const adminService = new AdminService(adminRepository)

export const adminController = new AdminController(adminService)