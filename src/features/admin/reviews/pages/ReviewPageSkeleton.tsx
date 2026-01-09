const ReviewPageSkeleton = () => {
    return (
        <div className="space-y-6 animate-pulse">
            {/* ===== Header ===== */}
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <div className="h-6 w-56 rounded bg-gray-200" />
                    <div className="h-4 w-72 rounded bg-gray-100" />
                </div>

                <div className="flex flex-col items-end gap-1">
                    <div className="h-4 w-24 rounded bg-gray-100" />
                    <div className="h-7 w-16 rounded bg-gray-200" />
                </div>
            </div>

            {/* ===== Filters ===== */}
            <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-end">
                <div className="flex items-center gap-3">
                    <div className="h-4 w-16 rounded bg-gray-100" />
                    <div className="h-10 w-40 rounded-lg bg-gray-200" />
                    <div className="h-10 w-10 rounded-lg bg-gray-200" />
                </div>
            </div>

            {/* ===== Table ===== */}
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        {/* Table Head */}
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <th key={i} className="px-6 py-4">
                                        <div className="h-3 w-20 rounded bg-gray-200" />
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-100">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <tr key={i} className="hover:bg-gray-50/50">
                                    {/* Reviewer */}
                                    <td className="px-6 py-4">
                                        <div className="h-4 w-24 rounded bg-gray-200" />
                                    </td>

                                    {/* Recipe */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-gray-200" />
                                            <div className="h-4 w-32 rounded bg-gray-200" />
                                        </div>
                                    </td>

                                    {/* Rating */}
                                    <td className="px-6 py-4">
                                        <div className="flex gap-1">
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <div
                                                    key={starIndex}
                                                    className="h-4 w-4 rounded bg-gray-200"
                                                />
                                            ))}
                                        </div>
                                    </td>

                                    {/* Comment */}
                                    <td className="px-6 py-4">
                                        <div className="space-y-2">
                                            <div className="h-3 w-full rounded bg-gray-200" />
                                            <div className="h-3 w-3/4 rounded bg-gray-100" />
                                        </div>
                                    </td>

                                    {/* Date */}
                                    <td className="px-6 py-4">
                                        <div className="h-3 w-20 rounded bg-gray-100" />
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4 text-right">
                                        <div className="h-8 w-8 rounded-lg bg-gray-200 ml-auto" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReviewPageSkeleton;
