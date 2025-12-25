import { MoreVertical, Trash2, Ban } from 'lucide-react';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from "@heroui/react";

const UsersTable = () => {
    const users = [
        {
            id: 1,
            name: 'Admin User',
            email: 'admin@wasfa.com',
            role: 'Admin',
            status: 'Active',
            joined: 'Jun 28, 2025',
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
        },
        {
            id: 2,
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'User',
            status: 'Active',
            joined: 'Sep 26, 2025',
            avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c'
        },
        {
            id: 3,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            role: 'User',
            status: 'Active',
            joined: 'Oct 26, 2025',
            avatar: 'https://i.pravatar.cc/150?u=a04258114e29026302d'
        },
        {
            id: 4,
            name: 'Bob Wilson',
            email: 'bob.wilson@example.com',
            role: 'User',
            status: 'Banned',
            joined: 'Nov 10, 2025',
            avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
        },
        {
            id: 5,
            name: 'Sarah Johnson',
            email: 'sarah.johnson@example.com',
            role: 'User',
            status: 'Active',
            joined: 'Nov 25, 2025',
            avatar: 'https://i.pravatar.cc/150?u=a04258114e29026705d'
        }
    ];

    return (
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">User</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Email</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Role</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Status</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Joined</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={user.avatar} alt={user.name} className="h-9 w-9 rounded-full object-cover" />
                                        <span className="font-medium text-gray-900">{user.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${user.role === 'Admin'
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'bg-gray-100 text-gray-700'
                                        }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${user.status === 'Active'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{user.joined}</td>
                                <td className="px-6 py-4 text-right">
                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button isIconOnly size="sm" variant="light" className="text-gray-500 hover:text-gray-700">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="User Actions">
                                            <DropdownItem key="ban" onClick={() => {alert("Ban User")}} className="text-yellow-600" startContent={<Ban className="h-4 w-4" />}>
                                                Ban User
                                            </DropdownItem>
                                            <DropdownItem key="delete" onClick={() => {alert("Delete User")}} className="text-red-600" color="danger" startContent={<Trash2 className="h-4 w-4" />}>
                                                Delete User
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;
