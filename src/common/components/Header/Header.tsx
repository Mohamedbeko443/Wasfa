/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChefHat } from "lucide-react";
import SearchBar from "./SearchBar";
import MobileMenuButton from "./MobileMenuButton";
import NavigationItems from "./NavigationItems";



export default function Header()  {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex items-center space-x-2">
                            <div className="text-orange-500 text-2xl ">
                                <ChefHat size={40} />
                            </div>
                            <span className="text-xl font-bold text-gray-800">Wasfa!</span>
                        </NavLink>
                    </div>

                    <div className="hidden items-center space-x-5 md:flex">
                        <NavigationItems />
                        <SearchBar />
                    </div>

                    <div className="md:hidden">
                        <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
                    </div>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
                        isOpen ? "max-h-96" : "max-h-0"
                    }`}>
                    <div className="mt-4 md:hidden">
                        <NavigationItems isMobile onItemClick={toggleMenu} />
                        <SearchBar isMobile />
                    </div>
                </div>
            </div>
        </header>
    );
};


