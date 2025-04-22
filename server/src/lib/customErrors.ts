
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