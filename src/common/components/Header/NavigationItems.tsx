
import { NavLink, useNavigate } from "react-router-dom";
import { Home, Search, CreditCard, LogIn, UserPlus, LogOut, User } from "lucide-react";
import { NavigationItemsProps, NavItem } from "../interfaces";
import useAuthStore from "@/features/auth/store/auth";
import api from "@/common/api";
import { addToast } from "@heroui/react";
import { AxiosError } from "axios";
import { useState } from "react";




export default function NavigationItems({ isMobile = false, onItemClick }: NavigationItemsProps) {
    const [loading , setLoading] = useState<boolean>(false);
    const { accessToken , setAccessToken } = useAuthStore();

    const navigationItems = [
        { name: "Home", path: "/", icon: Home, show: true },
        { name: "Search", path: "/search", icon: Search, show: true },
        { name: "Plans", path: "/plans", icon: CreditCard, show: true },
        { name: "Login", path: "/login", icon: LogIn, show: !accessToken },
        { name: "Register", path: "/register", icon: UserPlus, isButton: true, show: !accessToken },
        {name: "Profile", path: "/profile", icon: User, show: accessToken}
    ];

    async function handleLogout() {
        try {
            setLoading(true);
            await api.post<{message: string}>("/auth/logout");
               setAccessToken(null!);
               useAuthStore.persist.clearStorage();
            addToast({
                title: "Logout Successful!",
                description: "You have been logged out successfully.",
                color: "success",
            });
        } catch (error: unknown) {
            if(error instanceof AxiosError)
            {
                addToast({
                    title: "Logout Failed!",
                    description: error.response?.data.message || "Something went wrong! please try again",
                    color: "danger",
                })
            }
        }
        finally {
            setLoading(false);
        }
    }

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

        return item.show && (
            <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                    `${buttonClasses} ${isActive && !item.isButton ? activeClasses : ""}  ${isActive && item.isButton ? activeClasses : ""}`
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
            {accessToken && (
                <button disabled={loading} onClick={handleLogout} className={`bg-red-500 font-semibold cursor-pointer hover:bg-red-600 text-white px-6 py-2 rounded-lg `}>  Logout</button>
            )}
        </nav>
    );
}
