import { NextFunction, Response } from "express";
import { CustomRequest, SafeUser } from "./type";
import { AuthService } from "../auth/core/service/authService";

export class AuthMiddleware {
  constructor(private authService: AuthService) {}

  async protectedRoute(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.jwt;
      
      console.log("Req cookies:", req.cookies);
      console.log("get token: ", token);

      if (!token) {
        res.status(401).json({ error: "No Token was provided" });
        return;
      }

      const user = await this.authService.validateToken(token);
      if (!user) {
        res.status(401).json({ error: "Invalid or Token expired" });
        return;
      }

      req.user = user as SafeUser;
      next();
    } catch (error) {
      console.error("Authentication middleware error:", error);
      res
        .status(401)
        .json({ error: "Authentication failed at the middleware" });
    }
  }
}