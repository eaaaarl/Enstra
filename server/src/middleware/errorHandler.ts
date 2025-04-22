import { NextFunction, Request, Response } from "express";
import { CustomError } from "../lib/customErrors";
import { handlePrismaErrors } from "../lib/handlePrismaErrors";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";



export const errorHandler = (
err: Error | CustomError,
req: Request,
res: Response,
next: NextFunction
) => {
    console.error('ERROR HANDLER', err)
    console.error('ERROR HANDLER CONSTRUCTOR NAME', err.constructor.name)

    if (err instanceof CustomError) {
        res.status(err.statusCode).json({
            message: err.message,
        });
        return;
    }

    // Prisma Errors
    if (err.constructor.name === "PrismaClientKnownRequestError") {
    const errorResponse = handlePrismaErrors(err as any);
        res.status(errorResponse.status === "fail" ? 400 : 500).json(errorResponse);
        return; 
    } 

    // Zod Validation Errors
    if (err instanceof ZodError) {
        const formattedErrors = err.errors.map(error => ({
          path: error.path.join('.'),
          message: error.message
        }));
        
        res.status(400).json({
          message: "Validation Error",
          errors: formattedErrors
        });
        return;
      }

    res.status(500).json({
        message: "Internal Server Error",
    });
}