/* eslint-disable prettier/prettier */
import { z } from "zod";

import { signUpSchema } from "../schemas";
import { loginSchema } from "../schemas";


export type SignUpFormInputs = z.infer<typeof signUpSchema>;


export type LoginFormInputs = z.infer<typeof loginSchema>;
