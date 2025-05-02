import z from "zod";

export const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "The password must be at least 8 characters."),
});

export type signInValues = z.infer<typeof signInSchema>;
