import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    UtensilsCrossed,
    MessageSquare,
    CreditCard,
    LogOut
} from 'lucide-react';

interface AdminSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Users', path: '/admin/users', icon: Users },
        { name: 'Recipes', path: '/admin/recipes', icon: UtensilsCrossed },
        { name: 'Reviews', path: '/admin/reviews', icon: MessageSquare },
        { name: 'Plans', path: '/admin/plans', icon: CreditCard },
    ];

    return (
        <aside
            className={`
                fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 text-white transition-transform duration-300 ease-in-out lg:static lg:translate-x-0
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
        >
            <div className="flex h-full flex-col">
                {/* Logo */}
                <div className="flex items-center gap-3 px-6 py-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                        <UtensilsCrossed className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Wasfa Admin</h1>
                        <p className="text-xs text-slate-400">Management Portal</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1 px-4 py-4">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={onClose}
                                className={`
                                    flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors
                                    ${isActive
                                        ? 'bg-orange-500 text-white'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                                `}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile & Logout */}
                <div className="border-t border-slate-800 p-4">
                    <div className="mb-4 flex items-center  gap-3 px-2">
                        <div>
                            <p className="text-sm font-medium text-white">Admin User</p>
                            <p className="text-xs text-slate-500">Administrator</p>
                        </div>
                    </div>
                    <button
                        className="flex cursor-pointer w-full items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
                    >
                        <LogOut className="h-4 w-4" />
                        Logout
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;
