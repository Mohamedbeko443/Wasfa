/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */

import { ChefHat } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignUpFormInputs } from "../types";
import { signUpSchema } from "../schemas";

import { Link } from "react-router-dom";
import { authClasses } from "../utils";

//todo API INTEGRATION 
export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormInputs>({
        resolver: zodResolver(signUpSchema),
    });
    const onSubmit = (data: SignUpFormInputs) => {
        // Simulate API call
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                console.log("Form submitted:", data);
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
                        <h1 className="text-2xl font-semibold mb-1">Join Wasfa!</h1>
                        <p className="text-gray-500">Create your account to start cooking</p>
                    </div>
                    <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full">
                                <label className={authClasses.labelClass} htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="First name"
                                    {...register("firstName")}
                                    className={`${authClasses.inputClass} ${errors.firstName ? 'border-red-500' : ''}`}
                                />
                                {errors.firstName && (
                                    <p className={authClasses.errorClass}>{errors.firstName.message}</p>
                                )}
                            </div>
                            <div className="w-full">
                                <label className={authClasses.labelClass} htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    {...register("lastName")}
                                    className={`${authClasses.inputClass} ${errors.lastName ? 'border-red-500' : ''}`}
                                />
                                {errors.lastName && (
                                    <p className={authClasses.errorClass}>{errors.lastName.message}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label className={authClasses.labelClass} htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
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
                                placeholder="Create a password"
                                {...register("password")}
                                className={`${authClasses.inputClass} ${errors.password ? 'border-red-500' : ''}`}
                            />
                            {errors.password && <p className={authClasses.errorClass}>{errors.password.message}</p>}
                        </div>
                        <div>
                            <label className={authClasses.labelClass} htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                {...register("confirmPassword")}
                                className={`${authClasses.inputClass} ${errors.confirmPassword ? 'border-red-500' : ''}`}
                            />
                            {errors.confirmPassword && (
                                <p className={authClasses.errorClass}>{errors.confirmPassword.message}</p>
                            )}
                        </div>
                        <div className="pt-2 flex items-start space-x-2">
                            <input
                                id="terms"
                                type="checkbox"
                                {...register("agreedToTerms")}
                                className="mt-1"
                            />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                I agree to the{" "}
                                <span  className="text-orange-500 hover:underline cursor-pointer ">
                                    Terms of Service
                                </span>{" "}
                                and{" "}
                                <span  className="text-orange-500 hover:underline cursor-pointer ">
                                    Privacy Policy
                                </span>
                            </label>
                        </div>
                        {errors.agreedToTerms && <p className={authClasses.errorClass}>{errors.agreedToTerms.message}</p>}
                        <button
                            type="submit"
                            className={`${authClasses.buttonClass} ${isSubmitting ? authClasses.disabledButtonClass : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Creating...' : 'Create Account'}
                        </button>
                        <div className="text-center text-sm text-gray-500 mt-4">
                            Already have an account?{" "}
                            <Link to="/login" className="text-orange-500 hover:underline">
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
