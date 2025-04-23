import { NextFunction, Request, Response } from "express";
import { AuthService } from "./core/service/authService";
import { generateTokenAndSetCookie } from "../lib/generateTokenAndCookies";



export class AuthController {
    constructor(private readonly authService: AuthService) {
        this.signUp = this.signUp.bind(this)
        this.signIn = this.signIn.bind(this)
        this.logout = this.logout.bind(this)
    }

    async signUp(req:Request, res: Response, next: NextFunction) {
        try {
            const payload = req.body;
            const newUser = await this.authService.signUp(payload);
            res.status(201).json({
                message: "User created successfully",
                data: newUser
            })
        } catch (error) {
            next(error)
        }
    }

    async signIn(req:Request, res: Response, next: NextFunction) {
        try {
            const payload = req.body;
            const user = await this.authService.signIn(payload);

            generateTokenAndSetCookie(user.id, req,res)

            res.status(200).json({
                message: "User logged in successfully",
                data: user
            })
        } catch (error) {
            next(error)
        }
    }

    async logout(req:Request, res: Response, next: NextFunction) {
        try {
            res.cookie("jwt", "", { maxAge: 0 });
            res
              .status(200)
              .json({ message: "You have been logged out successfully" });
          } catch (error) {
            next(error);
          }
    }
}   