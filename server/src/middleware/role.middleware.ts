import { NextFunction, Response } from "express";
import { Role } from "../generated/prisma";
import { CustomRequest } from "./type";

export class RoleMiddleware {
  hasRole(requiredRoles: Role[]) {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
      try {
        if (!req.user) {
           res.status(401).json({ error: "Authentication required" });
           return
        }
 
        if (!requiredRoles.includes(req.user.Role)) {
           res.status(403).json({
            error: "Access denied. You don't have permission to access this resource."
          });
          return
        }
 
        next();
      } catch (error) {
        console.error("Role authorization middleware error:", error);
        res.status(500).json({ error: "Role authorization failed" });
      }
    };
  }

  isAdmin() {
    return this.hasRole([Role.ADMIN]);
  }

 
  isStudent() {
    return this.hasRole([Role.STUDENT]);
  }

  isAdminOrStudent() {
    return this.hasRole([Role.ADMIN, Role.STUDENT]);
  }
}