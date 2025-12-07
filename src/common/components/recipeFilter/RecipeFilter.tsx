import  { useState } from 'react';
import { Filter, ArrowUpNarrowWide, ArrowDownWideNarrow } from 'lucide-react';
import CustomSelect from '../customSelect/CustomSelect';
import { filterType, limit, sortByType, sortType } from '@/features/home/types';
import { useSearchParams } from 'react-router-dom';




export default function FilterComponent() {

    const [sortBy, setSortBy] = useState<sortByType>("name");
    const [sortOrder, setSortOrder] = useState<sortType>("asc");
    const [filterBy, setFilterBy] = useState<filterType>("all");
    const [itemsPerPage, setItemsPerPage] = useState<limit>(6);
    const [searchParams, setSearchParams] = useSearchParams();


    const sortByOptions   = [{
        label: "Name",
        value: "name"
    }, {
        label: "Rating",
        value: "rating"
    }, {
        label: "Cook Time",
        value: "cookTime"
    }, {
        label: "Servings",
        value: "servings"
    }];
    const filterByOptions   = [{
        label: "All Dishes",
        value: "all"
    }, {
        label: "Quick (≤30 min)",
        value: "quick"
    }, {
        label: "Medium (31-60 min)",
        value: "medium"
    }, {
        label: "Long (>60 min)",
        value: "long"
    }, {
        label: "High Rated (4.5+)",
        value: "high-rated"
    }];
    const itemsPerPageOptions  = [{
        label: "6",
        value: 6
    }, {
        label: "9",
        value: 9
    }, {
        label: "12",
        value: 12
    }];


   
    const handleChangeSortBy = (value: sortByType) => {
        setSortBy(value);
        searchParams.set('sortBy', value);
        setSearchParams(searchParams);
    };

    
    const handleChangeSortOrder = (value: sortType) => {
        setSortOrder(value);
        searchParams.set('sort', value);
        setSearchParams(searchParams);
    };

    const handleChangeFilterBy = (value: filterType) => {
        setFilterBy(value);
        searchParams.set('filter', value);
        setSearchParams(searchParams);
    };

    const handleChangeItemsPerPage = (value: limit) => {
        setItemsPerPage(value);
        searchParams.set('limit', value.toString());
        setSearchParams(searchParams);
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
                        onChange={(e) => handleChangeSortBy(e.target.value as sortByType)}
                        options={sortByOptions}
                    />
                    <button
                        onClick={() => handleChangeSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500 transition-colors"
                    >
                        {sortOrder === 'asc' ? (
                            <ArrowUpNarrowWide className="w-4 h-4" />
                        ) : (
                            <ArrowDownWideNarrow className="w-4 h-4" />
                        )}
                        <span>{sortOrder === 'asc' ? 'Ascending' : 'Descending'}</span>
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
                        onChange={(e) => handleChangeFilterBy(e.target.value as filterType)}
                        options={filterByOptions}
                    />
                    <CustomSelect
                        id="show-per-page"
                        label="Show:"
                        value={itemsPerPage}
                        onChange={(e) => handleChangeItemsPerPage(parseInt(e.target.value, 10) as limit)}
                        options={itemsPerPageOptions}
                    />
                </div>

            </div>
        </div>
    );
}

