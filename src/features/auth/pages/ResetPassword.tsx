import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordFormSchema } from "../schemas";
import { PasswordFormSchemaType } from "../types";
import api from "../../../common/api";
import { addToast, Spinner, Button } from "@heroui/react";
import { useNavigate, useParams } from "react-router-dom";
import { ChefHat } from "lucide-react";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";


function ResetPassword() {
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<"SUCCESS" | "FAILED" | null>(null);
    const { userId, token } = useParams<{
        userId: string,
        token: string
    }>();
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<PasswordFormSchemaType>({
        resolver: zodResolver(PasswordFormSchema),
    });


    useEffect(() => {
        const getResetPassword = async () => {
            try {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 2000));
                const response = await api.get<{ message: string }>(`/password/reset-password/${userId}/${token}`);
                console.log(response.data?.message);
                setStatus("SUCCESS");
            }
            catch (err: unknown) {
                if (err instanceof AxiosError) {
                    addToast({
                        title: "Reset Password",
                        description: "Something Went Wrong, Please Try Again Later.",
                        color: "danger"
                    })
                    setStatus("FAILED");
                }
            }
            finally {
                setLoading(false);
            }
        }
        getResetPassword();
    }, [token, userId])


    const onSubmit = async (data: PasswordFormSchemaType) => {
        try {
            const response = await api.post<{ message: string }>(`/password/reset-password/${userId}/${token}`, {
                password: data.password
            });
            console.log(response.data);
            addToast({
                title: "Password Reset",
                description: "Your password has been reset successfully.",
                color: "success",
            });
            navigate("/login");
        } catch (error: unknown) {
            console.error(error);
            if (error instanceof AxiosError) {
                addToast({
                    title: "Password Reset Failed!",
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
                {loading && <div className="mt-7"> <Spinner color="warning" size="lg" /> </div>}
                {status === "FAILED" && (
                    <>
                        <p className=" text-red-500 font-bold my-5">Unexpected Error Happened </p>
                        <Button onClick={() => navigate("/")} className="bg-orange-500 text-white font-bold" >Go Home</Button>
                    </>
                )}
                {status === "SUCCESS" && (
                    <>
                        <p className="text-default-500 mb-6 text-center text-sm">
                            Enter your new password
                        </p>
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
                    </>
                )}
            </div>
        </div>
    );
}

export default ResetPassword