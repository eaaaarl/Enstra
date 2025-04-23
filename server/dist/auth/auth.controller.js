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
exports.AuthController = void 0;
const generateTokenAndCookies_1 = require("../lib/generateTokenAndCookies");
class AuthController {
    constructor(authService) {
        this.authService = authService;
        this.signUp = this.signUp.bind(this);
        this.signIn = this.signIn.bind(this);
    }
    signUp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const newUser = yield this.authService.signUp(payload);
                res.status(201).json({
                    message: "User created successfully",
                    data: newUser
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    signIn(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const user = yield this.authService.signIn(payload);
                (0, generateTokenAndCookies_1.generateTokenAndSetCookie)(user.id, req, res);
                res.status(200).json({
                    message: "User logged in successfully",
                    data: user
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.AuthController = AuthController;
