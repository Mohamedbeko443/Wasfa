import { AlertTriangle, RotateCw } from "lucide-react";
import { Button } from "@heroui/button";

interface RecipesTableErrorProps {
  message?: string;
  onRetry?: () => void;
}

const RecipesTableError = ({
  message = "Something went wrong while loading recipes.",
  onRetry,
}: RecipesTableErrorProps) => {
  return (
    <div className="rounded-xl border border-red-100 bg-white shadow-sm">
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-7 w-7 text-red-600" />
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-gray-800">
            Failed to load recipes
          </h2>
          <p className="text-sm text-gray-500 max-w-sm">
            {message}
          </p>
        </div>

        {onRetry && (
          <Button
            onPress={onRetry}
            startContent={<RotateCw className="h-4 w-4" />}
            className="bg-red-500 text-white font-medium shadow-lg shadow-red-500/20"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
};

export default RecipesTableError;
