/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
import { useState } from "react";
import { ChefHat} from "lucide-react";
import { Link } from "react-router-dom";

export default function EmailConfirmation() {
    const [isResending, setIsResending] = useState<boolean>(false);
    const [resendSuccess, setResendSuccess] = useState<boolean>(false);
    const [resendError, setResendError] = useState<string | null>(null);

    const handleResend = () => {
        setIsResending(true);
        setResendSuccess(false);
        setResendError(null);

        setTimeout(() => {
            const success = Math.random() > 0.3; 
            if (success) {
                setResendSuccess(true);
            } else {
                setResendError("Failed to resend the email. Please try again later.");
            }
            setIsResending(false);
        }, 2000);
    };

    const buttonClass = "w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors";
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
                            className={`${buttonClass} ${isResending ? disabledButtonClass : ''}`}
                            disabled={isResending}
                        >
                            {isResending ? 'Resending...' : 'Resend Email'}
                        </button>
                        {resendSuccess && (
                            <p className="text-green-500 text-sm mt-2">
                                Confirmation email has been resent successfully!
                            </p>
                        )}
                        {resendError && (
                            <p className="text-red-500 text-sm mt-2">
                                {resendError}
                            </p>
                        )}
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
