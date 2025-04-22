"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const customErrors_1 = require("../lib/customErrors");
const handlePrismaErrors_1 = require("../lib/handlePrismaErrors");
const zod_1 = require("zod");
const errorHandler = (err, req, res, next) => {
    console.error('ERROR HANDLER', err);
    console.error('ERROR HANDLER CONSTRUCTOR NAME', err.constructor.name);
    if (err instanceof customErrors_1.CustomError) {
        res.status(err.statusCode).json({
            message: err.message,
        });
        return;
    }
    // Prisma Errors
    if (err.constructor.name === "PrismaClientKnownRequestError") {
        const errorResponse = (0, handlePrismaErrors_1.handlePrismaErrors)(err);
        res.status(errorResponse.status === "fail" ? 400 : 500).json(errorResponse);
        return;
    }
    // Zod Validation Errors
    if (err instanceof zod_1.ZodError) {
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
};
exports.errorHandler = errorHandler;
