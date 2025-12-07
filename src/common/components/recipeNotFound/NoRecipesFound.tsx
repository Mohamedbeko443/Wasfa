import { SearchX } from "lucide-react";

interface NoRecipesFoundProps {
  message?: string;
}

export default function NoRecipesFound({ message }: NoRecipesFoundProps) {
  return (
    <div className="bg-white rounded-xl mt-4 shadow-md p-8 text-center w-full">
      <div className="flex justify-center mb-4">
        <SearchX className="w-12 h-12 text-gray-400" />
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        No Recipes Found
      </h3>

      <p className="text-gray-600 text-sm">
        {message || "Try adjusting your filters or search query."}
      </p>
    </div>
  );
}
