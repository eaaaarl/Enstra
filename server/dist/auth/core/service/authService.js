"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = require("../../../lib/bcrypt");
const customErrors_1 = require("../../../lib/customErrors");
const auth_1 = require("../schema/auth");
class AuthService {
    constructor(authRespository) {
        this.authRespository = authRespository;
    }
    signUp(signUpData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, name, password, studentId } = auth_1.userSchema.parse(signUpData);
            const existingUser = yield this.authRespository.findByEmail(email);
            const existingStudentId = yield this.authRespository.findByStudentId(studentId);
            if (existingUser) {
                throw new customErrors_1.ValidationError("Email already exists");
            }
            if (existingStudentId) {
                throw new customErrors_1.ValidationError("Student ID already exists");
            }
            const toHashPassword = (0, bcrypt_1.passwordHash)(password);
            const newUser = yield this.authRespository.createUser({
                email,
                name,
                password: toHashPassword,
                studentId
            });
            return newUser;
        });
    }
}
exports.AuthService = AuthService;
