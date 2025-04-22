"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordCompare = exports.passwordHash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const passwordHash = (password) => {
    const salt = bcrypt_1.default.genSaltSync(10);
    return bcrypt_1.default.hashSync(password, salt);
};
exports.passwordHash = passwordHash;
const passwordCompare = (password, hash) => {
    return bcrypt_1.default.compareSync(password, hash);
};
exports.passwordCompare = passwordCompare;
