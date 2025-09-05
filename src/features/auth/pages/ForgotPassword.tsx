/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { useState } from "react";
import { ChefHat } from "lucide-react";
import StepEmail from "../components/StepEmail";

import StepCode from "../components/StepCode";
import StepPassword from "../components/StepPassword";

const ForgotPassword = () => {
    const [step, setStep] = useState(1);

    const goNext = () => setStep((prev) => prev + 1);
    const goReset = () => setStep(1);

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8 flex flex-col items-center">
                <div className="text-orange-500 text-4xl mb-2">
                    <ChefHat size={48} />
                </div>
                <h1 className="text-2xl font-semibold mb-1">Forgot Password</h1>
                <p className="text-default-500 mb-6 text-center text-sm">
                    {step === 1 && "Enter your email to receive a password reset code."}
                    {step === 2 && "Enter the 4-digit code you received."}
                    {step === 3 && "Enter your new password."}
                </p>

                {step === 1 && <StepEmail onNext={goNext} />}
                {step === 2 && <StepCode onNext={goNext} />}
                {step === 3 && <StepPassword onDone={goReset} />}
            </div>
        </div>
    );
};

export default ForgotPassword;
