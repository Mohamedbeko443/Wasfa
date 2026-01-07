import UserFilters from '../components/UserFilters';
import UsersTable from '../components/UsersTable';
import { useState } from 'react';
import { roleType, statusType } from '../services';
import { useUsers } from '../hooks/useUsers';

const UsersPage = () => {
    const [role, setRole] = useState<roleType>("");
    const [status, setStatus] = useState<statusType>("");
    const [search, setSearch] = useState<string>("");

    const { users } = useUsers({ role, status, search });
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
                    <p className="text-gray-500">Manage system users and access control</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-500">Total Users</span>
                    <span className="text-2xl font-bold text-gray-900">{users?.length || 0}</span>
                </div>
            </div>

            <UserFilters role={role} status={status} search={search} setRole={setRole} setStatus={setStatus} setSearch={setSearch} />
            <UsersTable role={role} status={status} search={search} />
        </div>
    );
};

export default UsersPage;
