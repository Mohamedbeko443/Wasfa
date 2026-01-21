import { SearchX, Plus } from "lucide-react";
import { Button } from "@heroui/button";

interface RecipesTableEmptyProps {
  title?: string;
  description?: string;
  onCreate?: () => void;
  onResetFilters?: () => void;
}

const RecipesTableEmpty = ({
  title = "No recipes found",
  description = "We couldn’t find any recipes matching your filters.",
  onCreate,
  onResetFilters,
}: RecipesTableEmptyProps) => {
  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
          <SearchX className="h-7 w-7 text-gray-500" />
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-gray-800">
            {title}
          </h2>
          <p className="text-sm text-gray-500 max-w-sm">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {onResetFilters && (
            <Button
              variant="bordered"
              onClick={onResetFilters}
            >
              Reset Filters
            </Button>
          )}

          {onCreate && (
            <Button
              onClick={onCreate}
              startContent={<Plus className="h-4 w-4" />}
              className="bg-orange-500 text-white font-medium shadow-lg shadow-orange-500/20"
            >
              Create New Recipe
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipesTableEmpty;
