
import z from 'zod';

export const userSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    studentId: z.string().min(1, { message: 'Student ID is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' })
})

export const signInSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' })
})

export type signUpDTO = z.infer<typeof userSchema>
export type signInDTO = z.infer<typeof signInSchema>