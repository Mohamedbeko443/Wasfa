/* eslint-disable prettier/prettier */
import { z } from "zod";

import { PasswordFormSchema, signUpSchema, loginSchema, EmailFormSchema, CodeFormSchema } from "../schemas";


export type SignUpFormInputs = z.infer<typeof signUpSchema>;

export type LoginFormInputs = z.infer<typeof loginSchema>;

export type EmailFormSchemaType = z.infer<typeof EmailFormSchema>;

export type CodeFormSchemaType = z.infer<typeof CodeFormSchema>;

export type PasswordFormSchemaType = z.infer<typeof PasswordFormSchema>;
