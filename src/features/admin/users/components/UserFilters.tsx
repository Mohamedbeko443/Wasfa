import { Search, Filter } from 'lucide-react';
import { roleType, statusType } from '../services';

interface UserFiltersProps {
    role: string;
    status: string;
    search: string;
    setRole: (role: roleType) => void;
    setStatus: (status: statusType) => void;
    setSearch: (search: string) => void;
}

const UserFilters = ({ role, status, search, setRole, setStatus, setSearch }: UserFiltersProps) => {
    return (
        <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-gray-500 sm:border-r sm:border-gray-200 sm:pr-4">
                    <Filter className="h-5 w-5" />
                </div>

                <select className="rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 text-sm font-medium text-gray-600 outline-none hover:border-gray-300 focus:border-orange-500"
                    value={role}
                    onChange={(e) => setRole(e.target.value as roleType)}>
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>

                <select className="rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 text-sm font-medium text-gray-600 outline-none hover:border-gray-300 focus:border-orange-500"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as statusType)}>
                    <option value="">All Status</option>
                    <option value="active">Active</option>
                    <option value="banned">Banned</option>
                    <option value="verified">Verified</option>
                    <option value="unverified">Unverified</option>
                </select>
            </div>
        </div>
    );
};

export default UserFilters;
