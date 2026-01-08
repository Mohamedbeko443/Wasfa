import { ChefHat } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas";
import { LoginFormInputs } from "../types";
import { authClasses } from "../utils";
import api from "../../../common/api";
import { Link, useNavigate } from "react-router-dom";
import { addToast } from "@heroui/react";
import useAuthStore from "../store/auth";




export default function Login() {
    const navigate = useNavigate();
    const { setAccessToken } = useAuthStore();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormInputs) => {
        try {
            const response = await api.post<{ token: string, message: string, isAdmin: boolean }>(`/auth/login`, data);
            console.log(response.data);
            setAccessToken(response.data.token);

            addToast({
                title: "Login Successful!",
                description: response.data?.message || "welcome back!",
                color: "success",
            });
            console.log(response.data.isAdmin);
            const path = response.data.isAdmin ? "/admin" : "/";
            navigate(path, { replace: true });
        } catch (error: any) {
            console.error(error);
            addToast({
                title: "Login Failed!",
                description: error.response?.data?.message || error?.response?.data?.errors[0] || "Something went wrong! please try again",
                color: "danger",
            });
        }
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
                            <Link to="/auth/forgot-password" className="text-sm text-orange-500 hover:underline">
                                Forgot Password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className={`${authClasses.buttonClass} ${!isSubmitting && "cursor-pointer"} ${isSubmitting ? authClasses.disabledButtonClass : ''}`}
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
