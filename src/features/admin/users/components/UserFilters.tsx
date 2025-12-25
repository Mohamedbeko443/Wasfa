import { Search, Filter } from 'lucide-react';

const UserFilters = () => {
    return (
        <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-gray-500 sm:border-r sm:border-gray-200 sm:pr-4">
                    <Filter className="h-5 w-5" />
                </div>

                <select className="rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 text-sm font-medium text-gray-600 outline-none hover:border-gray-300 focus:border-orange-500">
                    <option>All Roles</option>
                    <option>Admin</option>
                    <option>User</option>
                </select>

                <select className="rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 text-sm font-medium text-gray-600 outline-none hover:border-gray-300 focus:border-orange-500">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Banned</option>
                </select>
            </div>
        </div>
    );
};

export default UserFilters;
