import { AlertTriangle, RotateCw } from "lucide-react";

interface RecipeErrorProps {
  message?: string;
  onRetry?: () => void;
}

export default function RecipeError({
  message = "Something went wrong while loading this recipe.",
  onRetry,
}: RecipeErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen py-20 text-center">
      <div className="bg-red-100 text-red-600 rounded-full p-5 mb-4">
        <AlertTriangle className="w-10 h-10" />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Failed to Load Recipe
      </h2>

      <p className="text-gray-500 max-w-md mb-6">
        {message}
      </p>

      <button
        onClick={onRetry}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 cursor-pointer text-white px-5 py-2 rounded-lg transition"
      >
        <RotateCw className="w-4 h-4" />
        Retry
      </button>
    </div>
  );
}
