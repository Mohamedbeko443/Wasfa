/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from "react";
import { ChefHat, Facebook, Twitter, Instagram, LucideProps } from "lucide-react";

// --- Data for Links ---
const socialLinks: { href: string; icon: React.FC<LucideProps> }[] = [
    { href: '#', icon: Facebook },
    { href: '#', icon: Twitter },
    { href: '#', icon: Instagram },
];

const quickLinks: { href: string; label: string }[] = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Recipes' },
    { href: '#', label: 'Search' },
    { href: '#', label: 'Popular' },
];

const supportLinks: { href: string; label: string }[] = [
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Contact' },
    { href: '#', label: 'Help Center' },
    { href: '#', label: 'Privacy Policy' },
];

// --- Footer Component ---
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                {/* Main footer content grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Column 1: Brand and Socials */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2">
                            <ChefHat className="h-8 w-8 text-orange-500" />
                            <span className="text-2xl font-bold text-white">Wasfa!</span>
                        </div>
                        <p className="mt-4 text-gray-400">
                            Discover amazing recipes and share your culinary adventures with food lovers around the world.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                                    <link.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="hover:text-orange-500 transition-colors duration-300">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                        <ul className="space-y-2">
                            {supportLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="hover:text-orange-500 transition-colors duration-300">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Divider and Copyright */}
                <div className="mt-12 border-t border-gray-800 pt-6 text-center">
                    <p className="text-sm text-gray-500">© 2025 Wasfa!. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}