/* eslint-disable prettier/prettier */
import { z } from "zod";


export const signUpSchema = z.object({
    username: z.string().trim().min(3, { message: "Username must be at least 3 characters" }).max(20, { message: "Username must be at most 20 characters" })
    .regex(/^\S*$/, { message: "username cannot contain spaces" }),

    email: z.string().trim().min(1, { message: "Email is required" }).email("Email is invalid"),

    phoneNumber: z.string().trim()
        .length(11, { message: "Phone number must be exactly 11 digits" })
        .regex(/^(010|011|012|015)\d{8}$/, { message: "Phone number must start with 010, 011, 012, or 015 followed by 8 digits" }),

    password: z.string().trim()
        .min(8, { message: "Password must be at least 8 characters" })
        .regex(/^\S*$/, { message: "Password cannot contain spaces" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[^A-Za-z0-9]/, { message: "Password must include a special symbol like !, @, #, or $" }),

    confirmPassword: z.string().trim().min(1, { message: "Confirm your password" })
    .regex(/^\S*$/, { message: "Password cannot contain spaces" }),

    agreedToTerms: z.boolean().refine((val) => val === true, {
        message: "You must agree to the Terms of Service and Privacy Policy",
    }),

}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});



export const loginSchema = z.object({
    email: z.string().trim().min(1, { message: "Email is required" }).email("Email is invalid"),
    password: z.string().trim().min(1, { message: "Password is required" }).regex(/^\S*$/, { message: "Password cannot contain spaces" }),
    rememberMe: z.boolean().default(false).optional(),
});


export const EmailFormSchema = z.object({
    email: z.string().trim().email("Invalid email address"),
});


//!
export const CodeFormSchema = z.object({
    code: z.string().min(4, "Invalid code"),
});


export const PasswordFormSchema = z.object({
    password: z.string().trim()
        .min(8, { message: "Password must be at least 8 characters" })
        .regex(/^\S*$/, { message: "Password cannot contain spaces" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[^A-Za-z0-9]/, { message: "Password must include a special symbol like !, @, #, or $" }),
    confirmPassword: z
        .string()
        .trim()
        .min(8, "Password must be at least 8 characters")
        .regex(/^\S*$/, { message: "Password cannot contain spaces" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});
