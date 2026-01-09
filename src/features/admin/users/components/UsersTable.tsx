import { IUsers, useUsers } from '../hooks/useUsers';
import UserRow from './UserRow';
import { UsersTableSkeleton } from './UsersTableSkeleton';
import UsersError from './UsersError';
import { roleType, statusType } from '../services';
import AlertModal from '../../components/AlertModal';
import { useDisclosure } from '@heroui/react';
import { useState } from 'react';
import { useDeleteUser } from '../hooks/useDeleteUser';
import { useToggleBan } from '../hooks/useToggleBan';

interface UsersTableProps {
    role: roleType;
    status: statusType;
    search: string;
    page: number;
}

const UsersTable = ({ role, status, search, page }: UsersTableProps) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [userAction, setUserAction] = useState<"active" | "ban" | null>(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { users, isError, isLoading, refetch } = useUsers({ role, status, search, page });
    const { mutate: deleteUser, isPending } = useDeleteUser();

    const { isOpen: isOpenBan, onOpen: onOpenBan, onOpenChange: onOpenChangeBan } = useDisclosure();
    const { toggleBan, isPending: isBanPending } = useToggleBan(userAction! , "users");

    const handleDelete = (id: string) => {
        setSelectedId(id);
        onOpen();
    }

    const handleBan = (user: IUsers) => {
        setSelectedId(user.id);
        setUserAction(user.isBanned ? "active" : "ban");
        onOpenBan();
    }

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
                            <UserRow key={user.id} user={user} onDelete={handleDelete} onBan={handleBan} />
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
            {
                selectedId && (
                    <AlertModal
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        title='Delete User'
                        message='Are you sure you want to delete this user?'
                        confirmText='Delete'
                        selectedId={selectedId}
                        onConfirm={deleteUser}
                        isPending={isPending}
                    />
                )
            }
            {
                selectedId && (
                    <AlertModal
                        isOpen={isOpenBan}
                        onOpenChange={onOpenChangeBan}
                        title={`${userAction === "ban" ? "Ban" : "Active"} User`}
                        message={`Are you sure you want to ${userAction === "ban" ? "ban" : "active"} this user?`}
                        confirmText={`${userAction === "ban" ? "Ban" : "Active"}`}
                        confirmColor='warning'
                        selectedId={selectedId}
                        onConfirm={toggleBan}
                        isPending={isBanPending}
                    />
                )
            }
        </div>
    );
};

export default UsersTable;
