import { AlertTriangle, RotateCw } from "lucide-react";

interface UsersErrorProps {
    onRetry: () => void;
}

const UsersError = ({ onRetry }: UsersErrorProps) => {
    return (
        <div className="flex flex-col items-center justify-center py-12 rounded-xl bg-white text-center shadow-sm border border-gray-100">
            <div className="flex justify-center mb-4">
                <div className="p-3 bg-red-50 rounded-full">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
                Failed to load users
            </h3>

            <p className="text-gray-500 mb-6 max-w-sm">
                We encountered an issue while fetching the users list. Please check your connection and try again.
            </p>

            <button
                onClick={onRetry}
                className="flex cursor-pointer items-center gap-2 px-5 py-2.5 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
                <RotateCw className="w-4 h-4" />
                Try Again
            </button>
        </div>
    );
};

export default UsersError;
