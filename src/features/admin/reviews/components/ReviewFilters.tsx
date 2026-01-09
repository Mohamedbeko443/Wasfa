import { ArrowDownUp, ArrowUpDown } from 'lucide-react';
import { Button } from '@heroui/button';
import { sortByType, sortType } from '../services';

interface ReviewFiltersProps {
    sort: sortType;
    sortBy: sortByType;
    setSort: (sort: sortType) => void;
    setSortBy: (sortBy: sortByType) => void;
}

const ReviewFilters = ({ sort, sortBy, setSort, setSortBy }: ReviewFiltersProps) => {

    return (
        <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-end">
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500">Sort by:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as sortByType)} className="rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 text-sm font-medium text-gray-600 outline-none hover:border-gray-300 focus:border-orange-500">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="high-rated">Highest Rated</option>
                    <option value="low-rated">Lowest Rated</option>
                </select>

                <Button
                    isIconOnly
                    variant="light"
                    className="border border-gray-200 text-gray-600 hover:bg-gray-100"
                    aria-label="Toggle Sort Order"
                    onPress={() => setSort(sort === "asc" ? "desc" : "asc")}
                >
                    {sort === "asc" ? <ArrowDownUp className="h-4 w-4" /> : <ArrowUpDown className="h-4 w-4 rotate-180" />}
                </Button>
            </div>
        </div>
    );
};

export default ReviewFilters;
