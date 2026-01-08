import { useUsers } from '../hooks/useUsers';
import UserRow from './UserRow';
import { UsersTableSkeleton } from './UsersTableSkeleton';
import UsersError from './UsersError';
import { roleType, statusType } from '../services';

interface UsersTableProps {
    role: roleType;
    status: statusType;
    search: string;
    page: number;
}

const UsersTable = ({ role, status, search, page }: UsersTableProps) => {


    const { users, isError, isLoading, refetch } = useUsers({ role, status, search, page });

    if (isLoading) {
        return <UsersTableSkeleton />;
    }

    if (isError) {
        return <UsersError onRetry={refetch} />;
    }

    return (
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">User</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Email</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Role</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Subscription</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Status</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Verified</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Joined</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {users?.map((user) => (
                            <UserRow key={user.id} user={user} />
                        ))
                        }
                        {!isError && users?.length === 0 && (
                            <tr>
                                <td colSpan={8} className="px-6 py-4 text-center text-gray-500">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;
