import { AlertTriangle, RotateCw } from "lucide-react";

interface RecipeCardErrorProps {
  onRetry?: () => void;
}

export default function RecipeCardError({ onRetry }: RecipeCardErrorProps) {
  return (
    <div className="bg-white flex flex-col justify-center h-[600px] rounded-xl shadow-md overflow-hidden p-6 text-center">
      <div className="flex  justify-center mb-3">
        <AlertTriangle className="w-10 h-10 text-red-500" />
      </div>

      <h3 className="text-5xl font-bold text-gray-800 mb-2">
        Something went wrong!
      </h3>

      <p className="text-gray-600 text-lg mb-4">
        We couldn’t load  recipes . Please try again.
      </p>

      {onRetry && ( 
        <button
          onClick={onRetry}
          className="flex items-center justify-center gap-2 w-fit mx-auto block bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300 cursor-pointer"
        >
          <RotateCw className="w-4 h-4" />
          Retry
        </button>
      )}
    </div>
  );
}
