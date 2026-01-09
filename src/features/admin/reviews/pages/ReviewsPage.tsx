import { useState } from 'react';
import ReviewFilters from '../components/ReviewFilters';
import ReviewsTable from '../components/ReviewsTable';
import { useReviews } from '../hooks/useReviews';
import ReviewPageError from './ReviewPageError';
import ReviewPageSkeleton from './ReviewPageSkeleton';
import { sortByType, sortType } from '../services';

const ReviewsPage = () => {
    const [sortBy , setSortBy] = useState<sortByType>("newest")
    const [sort , setSort] = useState<sortType>("asc")
    const { comments , isLoading , isError , refetch } = useReviews({sortBy , sort});

     if(isLoading) return <ReviewPageSkeleton />
     if(isError) return <ReviewPageError onRetry={refetch} />
   
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Review Management</h1>
                    <p className="text-gray-500">Moderate and manage user reviews</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-500">Total Reviews</span>
                    <span className="text-2xl font-bold text-gray-900">{comments?.length}</span>
                </div>
            </div>

            <ReviewFilters sort={sort} sortBy={sortBy} setSort={setSort} setSortBy={setSortBy} />
            <ReviewsTable comments={comments!} filters={{sortBy , sort}} />
        </div>
    );
};

export default ReviewsPage;
