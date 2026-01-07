
export const UsersTableSkeleton = () => {
    return (
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden animate-pulse">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                            {[...Array(8)].map((_, i) => (
                                <th key={i} className="px-6 py-4">
                                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {[...Array(5)].map((_, i) => (
                            <tr key={i}>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-4 w-32 bg-gray-200 rounded"></div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="h-4 w-48 bg-gray-200 rounded"></div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="h-5 w-16 bg-gray-200 rounded-full"></div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="h-5 w-16 bg-gray-200 rounded-full"></div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="h-5 w-16 bg-gray-200 rounded-full"></div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-end">
                                        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
