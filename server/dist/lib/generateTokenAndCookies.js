"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTokenAndSetCookie = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateTokenAndSetCookie = (userId, req, res) => {
    const userAgent = req.headers["user-agent"] || "";
    const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    const token = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "1m",
    });
    res.cookie("jwt", token, {
        maxAge: 5 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: isSafari ? undefined : "strict",
        secure: isSafari ? false : process.env.NODE_ENV !== "development",
    });
};
exports.generateTokenAndSetCookie = generateTokenAndSetCookie;
