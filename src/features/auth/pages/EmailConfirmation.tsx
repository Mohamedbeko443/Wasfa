import { useEffect, useState, useRef } from "react"; // Import useRef
import { ChefHat } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../../common/api";
import { Spinner, addToast } from "@heroui/react";
import { AxiosError } from "axios";

export default function EmailConfirmation() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);
    const { userId, token } = useParams<{userId: string , token: string}>();
    const [time , setTime] = useState<number>(30);
    const isWorking = time > 0 || loading ; 
    
    
    // Track if we have already attempted verification
    const verificationAttempted = useRef(false);

    useEffect(() => {
        // If we already tried to verify, stop here.
        if (verificationAttempted.current) return;
        
        // Mark as attempted immediately
        verificationAttempted.current = true;

        const confirmEmail = async () => {
            if (!userId || !token) return; // Safety check

            try {
                await new Promise(resolve => setTimeout(resolve, 4000));                
                const response = await api.get<{message: string}>(`/auth/users/${userId}/verify/${token}`);

                addToast({
                    title: "Email Confirmation Successful!",
                    description: response?.data?.message || "Your email has been confirmed successfully.",
                    color: "success",
                });

                setLoading(false);
                //!
                navigate("/login");
            } catch (error: unknown) {
                console.error(error);
                setLoading(false);
                if(error instanceof AxiosError)
                {
                    addToast({
                    title: "Email Confirmation Failed!",
                    description: error.response?.data?.message || "Something went wrong! please try again",
                    color: "danger",
                });
                }
            }
        };

        confirmEmail();
    }, [userId, token, navigate]); 

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => prev > 0 ? prev - 1 : prev );
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    },[])
    
    const handleResend = async () => {
        setLoading(true);
        setTime(30);
        try{
            const res = await api.post<{message: string}>(`/auth/users/${userId}/resend-verification-token`);
            addToast({
                title: "Email Confirmation Resent",
                description:  res.data?.message || "your email confirmation resent successfully.",
                color: "success"
            })
        }
        catch (err: unknown)
        {
            if(err instanceof AxiosError)
            {
                addToast({
                    title: "Email Confirmation Error",
                    description: err?.response?.data?.message || "something went wrong please try again later.",
                    color: "danger"
                })
            }
        }
        finally{
            setLoading(false)
        }
    };

    const buttonClass = "w-full py-2 px-4 border  border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors";
    const disabledButtonClass = "opacity-50 cursor-not-allowed";

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-4 sm:p-8 text-center">
                <div className="flex flex-col items-center gap-6">
                    <div className="text-orange-500 text-4xl mb-2">
                        <ChefHat size={48} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold mb-1">Confirm Your Email Address</h1>
                        <p className="text-gray-500">
                            We have sent a confirmation email to your address. Please check your inbox and click the link to verify your account.
                        </p>
                    </div>
                    <div className="w-full">
                        <button
                            type="button"
                            onClick={handleResend}
                            className={`${buttonClass}  ${isWorking ? "cursor-not-allowed" : "cursor-pointer"} ${isWorking ? disabledButtonClass : ''}`}
                            disabled={isWorking}
                        >
                            {loading ? <Spinner color="default" /> : 'Resend Email'}
                        </button>
                        {time > 0 && <span className="text-orange-500 font-extrabold mt-2 block">{`00:${time} second`}</span>}
                    </div>
                    <div className="text-center text-sm text-gray-500 mt-4">
                        Already confirmed?{" "}
                        <Link  to="/login" className="text-orange-500 hover:underline">
                            Go to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}