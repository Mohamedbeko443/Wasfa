/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputOtp } from "@heroui/react";
import { CodeFormSchema } from "../schemas";
import { StepCodeProps } from "../interfaces";
import { CodeFormSchemaType } from "../types";

function StepCode({ onNext }: StepCodeProps) {
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<CodeFormSchemaType>({
        resolver: zodResolver(CodeFormSchema),
    });

    const onSubmit = async (data: CodeFormSchemaType) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        if (data.code === "1234") {
            onNext();
        } else {
            alert("Incorrect code. Please try again.");
        }
    };

    return (
        <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="code"
                render={({ field }) => (
                    <div className="flex flex-col gap-2 items-center w-full ">
                        <InputOtp
                            length={4}
                            value={field.value || ""}
                            onValueChange={field.onChange}
                            errorMessage={" "}
                        />
                        {errors.code && (
                            <p className="text-red-500 text-sm mt-1">{errors.code.message}</p>
                        )}
                    </div>
                )}
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting
                        ? "bg-orange-400 cursor-not-allowed"
                        : "bg-orange-500 cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    }`}
            >
                {isSubmitting ? "Loading..." : "Verify Code"}
            </button>
            <div className="text-center text-sm text-gray-500 mt-4">
                <a href="/" className="text-orange-500">
                    Resend code
                </a>
            </div>
        </form>
    );
}

export default StepCode;
