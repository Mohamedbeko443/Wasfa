/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { ChefHat } from "lucide-react";
import StepEmail from "../components/StepEmail";

import StepPassword from "../components/StepPassword";
import { useSearchParams } from "react-router-dom";
import {Spinner} from "@heroui/react";


const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const [loading , setLoading] = useState<boolean>(false)
    const [searchParams] = useSearchParams();
    const token =   searchParams.get("token");
    const userId =   searchParams.get("userId");

    
    const simulate = async ()=>{
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 4000));
        setLoading(false);
        setStep(2);
    }

    useEffect(() => {
        if (!token || !userId) return
        simulate();
    }, [token, userId])

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
                {loading && <Spinner color="warning" size="lg"/> }
                {step === 1 && !loading &&  <StepEmail />}
                {step === 2 && <StepPassword />}
            </div>
        </div>
    );
};

export default ForgotPassword;
