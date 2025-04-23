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
exports.AuthRepository = void 0;
const prisma_1 = require("../generated/prisma");
const customErrors_1 = require("../lib/customErrors");
const library_1 = require("@prisma/client/runtime/library");
class AuthRepository {
    constructor() {
        this.prisma = new prisma_1.PrismaClient();
    }
    createUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const newUser = yield this.prisma.user.create({
                    data: {
                        name: payload.name,
                        studentId: payload.studentId,
                        email: payload.email,
                        password: payload.password
                    }
                });
                return {
                    id: (_a = newUser.id) !== null && _a !== void 0 ? _a : "",
                    name: (_b = newUser.name) !== null && _b !== void 0 ? _b : "",
                    studentId: (_c = newUser.studentId) !== null && _c !== void 0 ? _c : "",
                    email: newUser.email,
                    password: newUser.password
                };
            }
            catch (error) {
                if (error instanceof library_1.PrismaClientKnownRequestError) {
                    throw new customErrors_1.DatabaseError("Failed to create user at createUser method");
                }
                throw error;
            }
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            try {
                const user = yield this.prisma.user.findUnique({
                    where: {
                        email
                    }
                });
                if (!user) {
                    return null;
                }
                return {
                    id: (_a = user === null || user === void 0 ? void 0 : user.id) !== null && _a !== void 0 ? _a : "",
                    name: (_b = user === null || user === void 0 ? void 0 : user.name) !== null && _b !== void 0 ? _b : "",
                    studentId: (_c = user === null || user === void 0 ? void 0 : user.studentId) !== null && _c !== void 0 ? _c : "",
                    email: (_d = user === null || user === void 0 ? void 0 : user.email) !== null && _d !== void 0 ? _d : "",
                    password: (_e = user === null || user === void 0 ? void 0 : user.password) !== null && _e !== void 0 ? _e : ""
                };
            }
            catch (error) {
                if (error instanceof library_1.PrismaClientKnownRequestError) {
                    throw new customErrors_1.DatabaseError("Failed to find user email at findByEmail method");
                }
                throw error;
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            try {
                const user = yield this.prisma.user.findUnique({
                    where: {
                        id
                    }
                });
                if (!user) {
                    return null;
                }
                return {
                    id: (_a = user === null || user === void 0 ? void 0 : user.id) !== null && _a !== void 0 ? _a : "",
                    name: (_b = user === null || user === void 0 ? void 0 : user.name) !== null && _b !== void 0 ? _b : "",
                    studentId: (_c = user === null || user === void 0 ? void 0 : user.studentId) !== null && _c !== void 0 ? _c : "",
                    email: (_d = user === null || user === void 0 ? void 0 : user.email) !== null && _d !== void 0 ? _d : "",
                    password: (_e = user === null || user === void 0 ? void 0 : user.password) !== null && _e !== void 0 ? _e : ""
                };
            }
            catch (error) {
                if (error instanceof library_1.PrismaClientKnownRequestError) {
                    throw new customErrors_1.DatabaseError("Failed to find user ID at findById method");
                }
                throw error;
            }
        });
    }
    findByStudentId(studentId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            try {
                const user = yield this.prisma.user.findUnique({
                    where: {
                        studentId
                    }
                });
                if (!user) {
                    return null;
                }
                return {
                    id: (_a = user === null || user === void 0 ? void 0 : user.id) !== null && _a !== void 0 ? _a : "",
                    name: (_b = user === null || user === void 0 ? void 0 : user.name) !== null && _b !== void 0 ? _b : "",
                    studentId: (_c = user === null || user === void 0 ? void 0 : user.studentId) !== null && _c !== void 0 ? _c : "",
                    email: (_d = user === null || user === void 0 ? void 0 : user.email) !== null && _d !== void 0 ? _d : "",
                    password: (_e = user === null || user === void 0 ? void 0 : user.password) !== null && _e !== void 0 ? _e : ""
                };
            }
            catch (error) {
                if (error instanceof library_1.PrismaClientKnownRequestError) {
                    throw new customErrors_1.DatabaseError("Failed to find user studentId at findByStudentId method");
                }
                throw error;
            }
        });
    }
}
exports.AuthRepository = AuthRepository;
