



export default function RecipePageSkeleton() {
    return (
        <section className="bg-gray-50 pb-12">

            {/* Back button */}
            <div className="container mx-auto p-4">
                <div className="w-28 h-6 bg-gray-300 rounded-md animate-pulse"></div>
            </div>

            {/* Image Section Skeleton */}
            <div className="bg-gray-300 h-72 md:h-96 relative overflow-hidden animate-pulse">
                <div className="absolute bottom-0 left-0 right-0 p-6 container mx-auto space-y-4">
                    <div className="w-2/3 md:w-1/3 h-10 bg-gray-400 rounded"></div>
                    <div className="flex gap-6 flex-wrap">
                        <div className="w-24 h-6 bg-gray-400 rounded"></div>
                        <div className="w-24 h-6 bg-gray-400 rounded"></div>
                        <div className="w-24 h-6 bg-gray-400 rounded"></div>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="container mx-auto px-6 mt-8">
                <div className="w-full max-w-2xl h-6 bg-gray-300 rounded animate-pulse"></div>
            </div>

            {/* Ingredients & Instructions */}
            <div className="container mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Ingredients */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-40 h-8 bg-gray-300 mb-5 rounded animate-pulse"></div>
                    <div className="space-y-3">
                        {Array.from({ length: 7 }).map((_, i) => (
                            <div key={i} className="w-3/4 h-5 bg-gray-200 rounded animate-pulse"></div>
                        ))}
                    </div>
                </div>

                {/* Instructions */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-40 h-8 bg-gray-300 mb-5 rounded animate-pulse"></div>
                    <div className="space-y-3">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="w-3/4 h-5 bg-gray-200 rounded animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Rating & Reviews */}
            <div className="container mx-auto px-6 mt-12 mb-16 bg-white p-6 rounded-xl shadow-md">

                <div className="w-56 h-8 bg-gray-300 rounded mb-6 animate-pulse"></div>

                {/* Review form */}
                <div className="border border-gray-200 bg-gray-50 p-5 rounded-xl">
                    <div className="w-40 h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>

                    <div className="w-32 h-5 bg-gray-200 rounded mb-3 animate-pulse"></div>
                    <div className="w-48 h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>

                    <div className="h-28 w-full bg-gray-200 rounded mb-3 animate-pulse"></div>
                    <div className="w-28 h-10 bg-gray-300 rounded animate-pulse"></div>
                </div>

                {/* Reviews list */}
                <div className="mt-10 space-y-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="pb-4 border-b border-gray-200">
                            <div className="w-32 h-5 bg-gray-200 rounded mb-3 animate-pulse"></div>
                            <div className="w-40 h-5 bg-gray-200 rounded mb-3 animate-pulse"></div>
                            <div className="w-full h-6 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
