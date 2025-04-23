"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInSchema = exports.userSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.userSchema = zod_1.default.object({
    name: zod_1.default.string().min(1, { message: 'Name is required' }),
    studentId: zod_1.default.string().min(1, { message: 'Student ID is required' }),
    email: zod_1.default.string().email({ message: 'Invalid email address' }),
    password: zod_1.default.string().min(8, { message: 'Password must be at least 8 characters long' })
});
exports.signInSchema = zod_1.default.object({
    email: zod_1.default.string().email({ message: 'Invalid email address' }),
    password: zod_1.default.string().min(8, { message: 'Password must be at least 8 characters long' })
});
