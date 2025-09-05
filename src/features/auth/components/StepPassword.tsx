/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordFormSchema } from "../schemas";
import { StepPasswordProps } from "../interfaces";
import { PasswordFormSchemaType } from "../types";



function StepPassword({ onDone }: StepPasswordProps) {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<PasswordFormSchemaType>({
        resolver: zodResolver(PasswordFormSchema),
    });

    const onSubmit = async (data: PasswordFormSchemaType) => {
        console.log("Resetting password:", data.password);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert("Password has been reset successfully!");
        reset();
        onDone();
    };

    return (
        <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                </label>
                <input
                    type="password"
                    placeholder="Enter new password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    {...register("password")}
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
            </div>
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                </label>
                <input
                    type="password"
                    placeholder="Confirm new password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.confirmPassword.message}
                    </p>
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
                {isSubmitting ? "Loading..." : "Reset Password"}
            </button>
        </form>
    );
}

export default StepPassword;
