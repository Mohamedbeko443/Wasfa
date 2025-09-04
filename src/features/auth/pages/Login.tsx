/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */


import { ChefHat } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../schemas";
import { LoginFormInputs } from "../types";
import { authClasses } from "../utils";

import { Link } from "react-router-dom"


//todo API INTEGRATION
//TODO FORGOT PASSWORD PAGE
export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormInputs) => {
        // Simulate API call
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                console.log("Login submitted:", data);
                resolve();
            }, 1500);
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-4 sm:p-8">
                <div className="flex flex-col items-center gap-6">
                    <div className="text-orange-500 text-4xl mb-2">
                        <ChefHat size={48} />
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold mb-1">Welcome Back!</h1>
                        <p className="text-gray-500">Sign in to your Wasfa! account.</p>
                    </div>
                    <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className={authClasses.labelClass} htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                // type="email"
                                placeholder="Enter your email"
                                {...register("email")}
                                className={`${authClasses.inputClass} ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && <p className={authClasses.errorClass}>{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className={authClasses.labelClass} htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                {...register("password")}
                                className={`${authClasses.inputClass} ${errors.password ? 'border-red-500' : ''}`}
                            />
                            {errors.password && <p className={authClasses.errorClass}>{errors.password.message}</p>}
                        </div>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center space-x-2">
                                <input
                                    id="rememberMe"
                                    type="checkbox"
                                    {...register("rememberMe")}
                                    className="mt-1"
                                />
                                <label htmlFor="rememberMe" className="text-sm text-gray-600">
                                    Remember me
                                </label>
                            </div>
                            <a href="/" className="text-sm text-orange-500 hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className={`${authClasses.buttonClass} cursor-pointer ${isSubmitting ? authClasses.disabledButtonClass : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Signing In...' : 'Sign In'}
                        </button>
                        <div className="text-center text-sm text-gray-500 mt-4">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-orange-500 hover:underline">
                                Sign up
                            </Link>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}
