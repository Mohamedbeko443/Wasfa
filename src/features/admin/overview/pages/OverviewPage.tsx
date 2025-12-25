import { Users, Utensils, Crown, MessageCircle } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import RecentActivity from '../components/RecentActivity';

const OverviewPage = () => {
    // Mock data for stats
    const stats = [
        {
            title: 'Total Users',
            value: '5',
            icon: Users,
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-600',
        },
        {
            title: 'Total Recipes',
            value: '6',
            icon: Utensils,
            color: 'bg-green-500',
            bgColor: 'bg-green-50',
            textColor: 'text-green-600',
        },
        {
            title: 'Active Subscriptions',
            value: '4',
            icon: Crown,
            color: 'bg-orange-500',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-600',
        },
        {
            title: 'Total Comments',
            value: '0',
            icon: MessageCircle,
            color: 'bg-red-500',
            bgColor: 'bg-red-50',
            textColor: 'text-red-600',
        },
    ];

    const activities = [
        {
            id: 1,
            user: 'Sarah Johnson',
            action: 'registered',
            time: '2 hours ago',
            type: 'register',
            icon: Users,
            color: 'bg-blue-100 text-blue-600',
        },
        {
            id: 2,
            user: 'Recipe "Beef Stir Fry"',
            action: 'was updated',
            time: '4 hours ago',
            type: 'update',
            icon: Utensils,
            color: 'bg-green-100 text-green-600',
        },
        {
            id: 3,
            user: 'New review on Chicken Tikka Masala',
            action: '',
            time: '6 hours ago',
            type: 'review',
            icon: MessageCircle,
            color: 'bg-orange-100 text-orange-600',
        },
        {
            id: 4,
            user: 'User upgraded to Pro plan',
            action: '',
            time: '8 hours ago',
            type: 'upgrade',
            icon: Crown,
            color: 'bg-purple-100 text-purple-600',
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back! Here's what's happening with your platform.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <StatsCard key={index} {...stat} />
                ))}
            </div>

            {/* Recent Activity */}
            <RecentActivity activities={activities} />

        </div>
    );
};

export default OverviewPage;
