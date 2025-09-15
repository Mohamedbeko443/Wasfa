/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import { Search } from "lucide-react";
import { SearchBarProps } from "../interfaces";

export default function SearchBar({ isMobile = false }: SearchBarProps) {
    return (
        <div className={`relative ${isMobile ? "mt-4" : ""}`}>
            <input
                type="text"
                placeholder="Search recipes..."
                className={`rounded-md border border-gray-300 px-4 py-2 pr-10 focus:border-orange-500 focus:outline-none ${
                    isMobile ? "w-full" : ""
                }`}
            />
            <Search
                size={20}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
        </div>
    );
}
