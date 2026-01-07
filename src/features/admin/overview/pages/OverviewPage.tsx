import StatsCard from '../components/StatsCard';
import RecentActivity from '../components/RecentActivity';
import OverviewError from '../components/OverviewError';
import OverviewLoading from '../components/OverviewLoading';
import { useStats } from '../hooks/useStats';
import { useActivities } from '../hooks/useActivities';
import { getActivityConfig, formatTimeAgo, getStatsCards } from '../utils';

const OverviewPage = () => {
    const { stats: fetchedStats, isError: statsError, isLoading: statsLoading, refetch: statsRefetch } = useStats();
    const { recentActivities, isLoading: activitiesLoading, isError: activitiesError, refetch: activitiesRefetch } = useActivities();

    const handleRetry = () => {
        statsRefetch();
        activitiesRefetch();
    };

    if (statsLoading || activitiesLoading) {
        return <OverviewLoading />;
    }

    if (statsError || activitiesError) {
        return <OverviewError onRetry={handleRetry} />;
    }

    const statsCards = getStatsCards(fetchedStats);

    const activities = recentActivities?.map((activity) => {
        const config = getActivityConfig(activity.action);
        return {
            id: activity._id,
            user: activity.user?.username || 'Unknown User',
            action: activity.details?.message || activity.action,
            time: formatTimeAgo(activity.createdAt),
            type: config.type,
            icon: config.icon,
            color: config.color
        };
    }) || [];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back! Here's what's happening with your platform.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {statsCards.map((stat, index) => (
                    <StatsCard key={index} {...stat} />
                ))}
            </div>

            {/* Recent Activity */}
            <RecentActivity activities={activities} />

        </div>
    );
};

export default OverviewPage;
