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

import { Link } from "react-router-dom"


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

    const inputClass = "w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
    const errorClass = "text-red-500 text-sm mt-1";
    const labelClass = "block text-sm font-medium text-gray-700";
    const buttonClass = "w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors";
    const disabledButtonClass = "opacity-50 cursor-not-allowed";

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
                                <label className={labelClass} htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="First name"
                                    {...register("firstName")}
                                    className={`${inputClass} ${errors.firstName ? 'border-red-500' : ''}`}
                                />
                                {errors.firstName && (
                                    <p className={errorClass}>{errors.firstName.message}</p>
                                )}
                            </div>
                            <div className="w-full">
                                <label className={labelClass} htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    {...register("lastName")}
                                    className={`${inputClass} ${errors.lastName ? 'border-red-500' : ''}`}
                                />
                                {errors.lastName && (
                                    <p className={errorClass}>{errors.lastName.message}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label className={labelClass} htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                placeholder="Enter your email"
                                {...register("email")}
                                className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className={labelClass} htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Create a password"
                                {...register("password")}
                                className={`${inputClass} ${errors.password ? 'border-red-500' : ''}`}
                            />
                            {errors.password && <p className={errorClass}>{errors.password.message}</p>}
                        </div>
                        <div>
                            <label className={labelClass} htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                {...register("confirmPassword")}
                                className={`${inputClass} ${errors.confirmPassword ? 'border-red-500' : ''}`}
                            />
                            {errors.confirmPassword && (
                                <p className={errorClass}>{errors.confirmPassword.message}</p>
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
                        {errors.agreedToTerms && <p className={errorClass}>{errors.agreedToTerms.message}</p>}
                        <button
                            type="submit"
                            className={`${buttonClass} ${isSubmitting ? disabledButtonClass : ''}`}
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
