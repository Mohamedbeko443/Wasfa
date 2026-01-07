
import { ActivitySkeleton, StatsSkeleton } from '../components/OverviewSkeleton';

const OverviewLoading = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back! Here's what's happening with your platform.</p>
            </div>

            <StatsSkeleton />
            <ActivitySkeleton />
        </div>
    );
};

export default OverviewLoading;
