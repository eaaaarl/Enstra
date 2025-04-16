import z from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .email("Please provide a valid email address.")
    .min(1, "Emails is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .min(1, "Password is required"),
});

export type signInValues = z.infer<typeof signInSchema>;
