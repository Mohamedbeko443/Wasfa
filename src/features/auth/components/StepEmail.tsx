/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { EmailFormSchema } from "../schemas";
import { StepEmailProps } from "../interfaces";
import { EmailFormSchemaType } from "../types";

function StepEmail({ onNext }: StepEmailProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<EmailFormSchemaType>({
        resolver: zodResolver(EmailFormSchema),
    });

    const onSubmit = async (data: EmailFormSchemaType) => {
        console.log("Sending email to:", data.email);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        onNext();
    };

    return (
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
                {isSubmitting ? "Loading..." : "Send Reset Code"}
            </button>
            <div className="text-center text-sm text-gray-500 mt-4">
                Remember your password?{" "}
                <Link to="/login" className="text-orange-500">
                    Sign in
                </Link>
            </div>
        </form>
    );
}

export default StepEmail;
