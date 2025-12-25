import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChefHat } from "lucide-react";
import MobileMenuButton from "./MobileMenuButton";
import NavigationItems from "./NavigationItems";



export default function Header()  {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-30">
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

                    <div className="hidden items-center space-x-5 lg:flex">
                        <NavigationItems />
                    </div>

                    <div className="lg:hidden">
                        <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
                    </div>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
                        isOpen ? "max-h-96" : "max-h-0"
                    }`}>
                    <div className="mt-4 lg:hidden">
                        <NavigationItems isMobile onItemClick={toggleMenu} />
                       
                    </div>
                </div>
            </div>
        </header>
    );
};
