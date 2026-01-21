import { Search, Filter, ArrowUpDown, ArrowDownUp } from 'lucide-react';
import { Button } from '@heroui/button';
import { sortType } from '@/features/home/types';

interface RecipeFiltersProps {
    search: string;
    setSearch: (search: string) => void;
    type: "premium" | undefined;
    setType: (type: "premium" | undefined) => void;
    sort: sortType;
    setSort: (sort: sortType) => void;
}

const RecipeFilters = ({ search, setSearch, type, setType, sort, setSort }: RecipeFiltersProps) => {
    return (
        <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by recipe name..."
                    className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
            </div>

            {/* Filters & Sorting */}
            <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2 text-gray-500 sm:border-r sm:border-gray-200 sm:pr-4">
                    <Filter className="h-5 w-5" />
                </div>

                <select value={type} onChange={(e) => setType(e.target.value as "premium" | undefined)} className="rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 text-sm font-medium text-gray-600 outline-none hover:border-gray-300 focus:border-orange-500">
                    <option value="">All Types</option>
                    <option value="premium">Premium Only</option>
                </select>

                

                <Button
                    isIconOnly
                    variant="light"
                    className="border border-gray-200 text-gray-600 hover:bg-gray-100"
                    aria-label="Toggle Sort Order"
                    onClick={() => setSort(sort === 'asc' ? 'desc' : 'asc')} 
                >
                    {sort === 'asc' ? <ArrowUpDown className="h-4 w-4" /> : <ArrowDownUp className="h-4 w-4 rotate-180" />}
                </Button>
            </div>
        </div>
    );
};

export default RecipeFilters;
