import { MoreVertical, Trash2, Ban, Check, X, Minus } from 'lucide-react';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from "@heroui/react";
import { IUsers } from '../hooks/useUsers';
import { formatDate } from '../utils';

interface UserRowProps {
    user: IUsers;
    onDelete: (id: string) => void;
    onBan: (user: IUsers) => void;
}

const UserRow = ({ user , onDelete , onBan  }: UserRowProps) => {

    return (
        <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900">{user.username}</span>
                </div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
            <td className="px-6 py-4">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${user.isAdmin
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700'
                    }`}>
                    {user.isAdmin ? 'Admin' : 'User'}
                </span>
            </td>
            <td className="px-6 py-4">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${user.subscription === 'PRO'
                    ? 'bg-purple-100 text-purple-700'
                    : user.subscription === 'BASIC'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                    {user.subscription}
                </span>
            </td>
            <td className="px-6 py-4">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${user.isBanned
                    ? 'bg-red-100 text-red-700'
                    : user.isVerified
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                    {user.isBanned ? 'Banned' : user.isVerified ? 'Active' : 'Unverified'}
                </span>
            </td>
            <td className="px-6 py-4">
                {user.isAdmin ? (
                    <Minus className="h-5 w-5 text-gray-400" />
                ) : user.isVerified ? (
                    <Check className="h-5 w-5 text-green-600" />
                ) : (
                    <X className="h-5 w-5 text-red-600" />
                )}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500">{formatDate(user.createdAt)}</td>
            <td className="px-6 py-4 text-right">
                {
                    !user.isAdmin && (
                        <div>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button isIconOnly size="sm" variant="light" className="text-gray-500 hover:text-gray-700">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="User Actions">

                                    <DropdownItem key="ban" onClick={() => { onBan(user) }} className={user.isBanned ? "text-green-600" : "text-yellow-600"} startContent={user.isBanned ? <Check className="h-4 w-4" /> : <Ban className="h-4 w-4" />}>
                                        {user.isBanned ? 'Active' : 'Ban'} User
                                    </DropdownItem>
                                    <DropdownItem key="delete" onClick={() => { onDelete(user.id) }} className="text-red-600" color="danger" startContent={<Trash2 className="h-4 w-4" />}>
                                        Delete User
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    )
                }
            </td>
        </tr>
    );
};

export default UserRow;
