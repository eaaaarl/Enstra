import { NextFunction, Request, Response } from "express";
import { AuthService } from "./core/service/authService";



export class AuthController {
    constructor(private readonly authService: AuthService) {
        this.signUp = this.signUp.bind(this)
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
}   