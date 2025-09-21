/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import  { useState } from 'react';
import { Filter, ArrowUpNarrowWide, ArrowDownWideNarrow } from 'lucide-react';
import { SortByType, SortOrderType, FilterByType, ItemsPerPageType } from '../../types/index';
import CustomSelect from '../customSelect/CustomSelect';




export default function FilterComponent() {

    const [sortBy, setSortBy] = useState<SortByType>('Name');
    const [sortOrder, setSortOrder] = useState<SortOrderType>('Ascending');
    const [filterBy, setFilterBy] = useState<FilterByType>('All Dishes');
    const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPageType>(6);


    const sortByOptions: readonly SortByType[] = ['Name', 'Rating', 'Cook Time', 'Servings'];
    const filterByOptions: readonly FilterByType[] = ['All Dishes', 'Quick (≤30 min)', 'Medium (31-60 min)', 'Long (>60 min)', 'High Rated (4.5+)'];
    const itemsPerPageOptions: readonly ItemsPerPageType[] = [6, 9, 12, 18];

    const handleSortOrderToggle = () => {
        setSortOrder(prevOrder => prevOrder === 'Ascending' ? 'Descending' : 'Ascending');
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 md:gap-6">

                {/* --- Sort By Section --- */}
                <div className="flex items-center gap-2">
                    <CustomSelect
                        id="sort-by"
                        label="Sort by:"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortByType)}
                        options={sortByOptions}
                    />
                    <button
                        onClick={handleSortOrderToggle}
                        className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500 transition-colors"
                    >
                        {sortOrder === 'Ascending' ? (
                            <ArrowUpNarrowWide className="w-4 h-4" />
                        ) : (
                            <ArrowDownWideNarrow className="w-4 h-4" />
                        )}
                        <span>{sortOrder}</span>
                    </button>
                </div>

                {/* Spacer to push filter and show to the right on larger screens */}
                <div className="hidden lg:flex-grow"></div>

                {/* --- Filter & Show Section --- */}
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                    <CustomSelect
                        id="filter-by"
                        label="Filter:"
                        icon={<Filter className="w-5 h-5 text-gray-500" />}
                        value={filterBy}
                        onChange={(e) => setFilterBy(e.target.value as FilterByType)}
                        options={filterByOptions}
                    />
                    <CustomSelect
                        id="show-per-page"
                        label="Show:"
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(parseInt(e.target.value, 10) as ItemsPerPageType)}
                        options={itemsPerPageOptions}
                    />
                </div>

            </div>
        </div>
    );
}

