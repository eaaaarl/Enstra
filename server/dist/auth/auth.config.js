"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_controller_1 = require("./auth.controller");
const auth_repository_1 = require("./auth.repository");
const authService_1 = require("./core/service/authService");
const authRespository = new auth_repository_1.AuthRepository();
const authService = new authService_1.AuthService(authRespository);
exports.authController = new auth_controller_1.AuthController(authService);
