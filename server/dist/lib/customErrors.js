"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationError = exports.DatabaseError = exports.ValidationError = exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.CustomError = CustomError;
class ValidationError extends CustomError {
    constructor(message) {
        super(message, 400);
    }
}
exports.ValidationError = ValidationError;
class DatabaseError extends CustomError {
    constructor(message) {
        super(message, 500);
    }
}
exports.DatabaseError = DatabaseError;
class AuthenticationError extends CustomError {
    constructor(message = 'Authentication failed') {
        super(message, 401);
    }
}
exports.AuthenticationError = AuthenticationError;
