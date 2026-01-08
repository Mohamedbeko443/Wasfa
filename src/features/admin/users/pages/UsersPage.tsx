import UserFilters from '../components/UserFilters';
import UsersTable from '../components/UsersTable';
import { useState } from 'react';
import { roleType, statusType } from '../services';
import { useUsers } from '../hooks/useUsers';
import { Pagination } from '@heroui/react';

const UsersPage = () => {
    const [role, setRole] = useState<roleType>("");
    const [status, setStatus] = useState<statusType>("");
    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState<number>(1);

    const { users, totalPages } = useUsers({ role, status, search, page });

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };
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
            <UsersTable role={role} status={status} search={search} page={page} />

            { totalPages! > 1 && (
                <div className="flex justify-center mt-6">
                    <Pagination
                        className='cursor-pointer'
                        initialPage={page}
                        total={totalPages!}
                        color='warning'
                        size='lg'
                        onChange={handlePageChange}
                        showShadow
                        variant='bordered'
                        showControls
                        loop
                    />
                </div>
            )}
        </div>
    );
};

export default UsersPage;
