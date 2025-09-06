/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import { NavLink } from "react-router-dom";
import { Home, Search, CreditCard, LogIn, UserPlus } from "lucide-react";
import { NavigationItemsProps, NavItem } from "../interfaces";

const navigationItems: NavItem[] = [
    { name: "Home", path: "/", icon: Home },
    { name: "Search", path: "/search", icon: Search },
    { name: "Plans", path: "/plans", icon: CreditCard },
    { name: "Login", path: "/login", icon: LogIn },
    { name: "Register", path: "/register", icon: UserPlus, isButton: true },
];

export default function NavigationItems({ isMobile = false, onItemClick }: NavigationItemsProps) {
    
    const renderNavLink = (item: NavItem) => {
        const Icon = item.icon;
        const baseClasses = isMobile 
            ? "flex items-center space-x-3 text-gray-600 hover:text-orange-500 px-2 py-3 rounded-md transition-colors duration-200"
            : "flex items-center space-x-2 text-gray-600 hover:text-orange-500 px-4 py-2 rounded-md transition-colors duration-200";
        
        const buttonClasses = item.isButton
            ? isMobile
                ? "flex items-center space-x-3 rounded-md bg-orange-500 px-4 py-3 text-white hover:bg-orange-600 transition-colors duration-200"
                : "flex items-center space-x-2 rounded-md bg-orange-500 px-6 py-2 text-white hover:bg-orange-600 transition-colors duration-200"
            : baseClasses;

        const activeClasses = item.isButton
            ? "ring-2 ring-orange-500 ring-offset-2"
            : "font-bold text-orange-500 bg-orange-50";

        return (
            <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                    `${buttonClasses} ${isActive && !item.isButton ? activeClasses : ""} ${
                        isActive && item.isButton ? activeClasses : ""
                    }`
                }
                onClick={onItemClick}
            >
                <Icon size={18} />
                <span className="font-medium">{item.name}</span>
            </NavLink>
        );
    };

    return (
        <nav className={isMobile ? "flex flex-col space-y-3" : "flex items-center space-x-4"}>
            {navigationItems.map((item) => renderNavLink(item))}
        </nav>
    );
}
