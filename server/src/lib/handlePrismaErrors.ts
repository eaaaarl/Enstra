import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const handlePrismaErrors = (error: PrismaClientKnownRequestError) => {
    switch (error.code) {
        case "P2002": // Unique constraint violation
          return {
            status: "fail",
            message: "A record with this value already exists",
          };
        case "P2014": // Invalid ID
          return {
            status: "fail",
            message: "Invalid ID provided",
          };
        case "P2025": // Record not found
          return {
            status: "fail",
            message: "Record not found",
          };
        case "P2003": // Foreign key constraint violation
          return {
            status: "fail",
            message: "Related record not found",
          };
        default:
          return {
            status: "error",
            message: "Database operation failed",
          };
      }
};
