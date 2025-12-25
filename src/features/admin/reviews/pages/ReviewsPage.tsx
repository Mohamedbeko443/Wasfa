import ReviewFilters from '../components/ReviewFilters';
import ReviewsTable from '../components/ReviewsTable';

const ReviewsPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Review Management</h1>
                    <p className="text-gray-500">Moderate and manage user reviews</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-500">Total Reviews</span>
                    <span className="text-2xl font-bold text-gray-900">45</span>
                </div>
            </div>

            <ReviewFilters />
            <ReviewsTable />
        </div>
    );
};

export default ReviewsPage;
