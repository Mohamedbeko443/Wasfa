export default function RecipeCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="relative">
        <div className="w-full h-48 bg-gray-200" />

        <div className="absolute top-2 right-2 px-4 py-2 rounded-full bg-gray-300" />
      </div>

      <div className="p-4">
        {/* Title */}
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

        {/* Description */}
        <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>

        {/* cookTime & servings */}
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>

        {/* Rating stars */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-5 h-5 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="w-10 h-4 bg-gray-200 rounded"></div>
        </div>

        {/* Button */}
        <div className="w-full h-10 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
}
