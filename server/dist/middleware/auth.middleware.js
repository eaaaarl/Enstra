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
exports.AuthMiddleware = void 0;
class AuthMiddleware {
    constructor(authService) {
        this.authService = authService;
    }
    protectedRoute(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.cookies.jwt;
                console.log("Req cookies:", req.cookies);
                console.log("get token: ", token);
                if (!token) {
                    res.status(401).json({ error: "No Token was provided" });
                    return;
                }
                const user = yield this.authService.validateToken(token);
                if (!user) {
                    res.status(401).json({ error: "Invalid or Token expired" });
                    return;
                }
                req.user = user;
                next();
            }
            catch (error) {
                console.error("Authentication middleware error:", error);
                res
                    .status(401)
                    .json({ error: "Authentication failed at the middleware" });
            }
        });
    }
}
exports.AuthMiddleware = AuthMiddleware;
