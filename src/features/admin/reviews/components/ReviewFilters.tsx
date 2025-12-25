import { ArrowUpDown } from 'lucide-react';
import { Button } from '@heroui/button';

const ReviewFilters = () => {
    return (
        <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-end">
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500">Sort by:</span>
                <select className="rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 text-sm font-medium text-gray-600 outline-none hover:border-gray-300 focus:border-orange-500">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="rating_high">Highest Rated</option>
                    <option value="rating_low">Lowest Rated</option>
                </select>

                <Button
                    isIconOnly
                    variant="light"
                    className="border border-gray-200 text-gray-600 hover:bg-gray-100"
                    aria-label="Toggle Sort Order"
                >
                    <ArrowUpDown className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
};

export default ReviewFilters;
