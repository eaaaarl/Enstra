
export class CustomError extends Error {
    constructor(public message: string, public statusCode: number) {
        super(message);
    }
}


export class ValidationError extends CustomError {
    constructor(message: string) {
        super(message, 400);
    }
}

export class DatabaseError extends CustomError {
    constructor(message: string) {
        super(message, 500);
    }
}

export class AuthenticationError extends CustomError {
    constructor(message: string = 'Authentication failed') {
        super(message, 401);
    }
}

export class CloudinaryError extends CustomError {
    constructor(message: string = "Cloudinary Upload Error") {
        super(message, 500);
    }
}

export class NotFoundError extends CustomError {
    constructor(resource: string) {
        super(`${resource} is not found`, 404);
    }
}