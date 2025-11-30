import {  useState } from "react";
import { ChefHat } from "lucide-react";
import StepPassword from "../components/StepPassword";
import { Link } from "react-router-dom";
import { addToast } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailFormSchema } from "../schemas";
import { EmailFormSchemaType } from "../types";
import api from "@/common/api";
import { AxiosError } from "axios";


const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<EmailFormSchemaType>({
        resolver: zodResolver(EmailFormSchema),
    });

    const onSubmit = async (data: EmailFormSchemaType) => {
        try {
            const response = await api.post<{message: string}>("/password/reset-link",{
                email: data.email
            });
            console.log(response.data?.message);
            addToast({
                title: "Reset Password Request",
                description: "please check your email to reset your password.",
                color: "success",
            });

        } catch (error: unknown) {
            console.error(error);
            if(error instanceof AxiosError)
            {
                addToast({
                title: "Reset Password Request Failed!",
                description: error.response?.data?.message || "Something went wrong! please try again",
                color: "danger",
            });
            }
            
        }
    };



    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8 flex flex-col items-center">
                <div className="text-orange-500 text-4xl mb-2">
                    <ChefHat size={48} />
                </div>
                <h1 className="text-2xl font-semibold mb-1">Forgot Password</h1>
                <p className="text-default-500 mb-6 text-center text-sm">
                    {step === 1 && "Enter your email to receive an email to reset your password."}
                    {step === 2 && "Enter your new password."}
                </p>

                <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            placeholder="Enter your email"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                          focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting
                            ? "bg-orange-400 cursor-not-allowed"
                            : "bg-orange-500 cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            }`}
                    >
                        {isSubmitting ? "Loading..." : "Send Reset Link"}
                    </button>
                    <div className="text-center text-sm text-gray-500 mt-4">
                        Remember your password?{" "}
                        <Link to="/login" className="text-orange-500">
                            Sign in
                        </Link>
                    </div>
                </form>



                {step === 2 && <StepPassword />}
            </div>
        </div>
    );
};

export default ForgotPassword;
