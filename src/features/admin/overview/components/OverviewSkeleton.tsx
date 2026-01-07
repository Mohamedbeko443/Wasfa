
export const StatsSkeleton = () => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-pulse">
                    <div className="flex items-center justify-between">
                        <div className="space-y-2">
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                            <div className="h-8 w-12 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-12 w-12 rounded-lg bg-gray-200"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const ActivitySkeleton = () => {
    return (
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm animate-pulse">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <div className="h-6 w-32 bg-gray-200 rounded"></div>
                <div className="h-5 w-5 bg-gray-200 rounded"></div>
            </div>
            <div className="p-6 space-y-6">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200 shrink-0" />
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                            <div className="h-3 w-1/4 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
