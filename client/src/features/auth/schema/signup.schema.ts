import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    studentId: z.string().min(7, "Student Id must be at least 7 characters."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type signUpValues = z.infer<typeof signUpSchema>;
