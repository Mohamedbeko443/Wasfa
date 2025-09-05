/* eslint-disable prettier/prettier */
import { z } from "zod";


export const signUpSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email("Email is invalid"),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string().min(1, { message: "Confirm your password" }),
    agreedToTerms: z.boolean().refine((val) => val === true, {
        message: "You must agree to the Terms of Service and Privacy Policy",
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});



export const loginSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email("Email is invalid"),
    password: z.string().min(1, { message: "Password is required" }),
    rememberMe: z.boolean().default(false).optional(),
});


export const EmailFormSchema = z.object({
    email: z.string().email("Invalid email address"),
});



export const CodeFormSchema = z.object({
    code: z.string().min(4, "Invalid code"),
});


export const PasswordFormSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
        .string()
        .min(8, "Password must be at least 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});
