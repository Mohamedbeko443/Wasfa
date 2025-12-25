import UserFilters from '../components/UserFilters';
import UsersTable from '../components/UsersTable';

const UsersPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
                    <p className="text-gray-500">Manage system users and access control</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-500">Total Users</span>
                    <span className="text-2xl font-bold text-gray-900">5</span>
                </div>
            </div>

            <UserFilters />
            <UsersTable />
        </div>
    );
};

export default UsersPage;
