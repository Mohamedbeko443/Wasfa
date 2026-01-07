import { Activity, LucideIcon } from 'lucide-react';

interface ActivityItem {
    id: number | string;
    user: string;
    action: string;
    time: string;
    type: string;
    icon: LucideIcon;
    color: string;
}

interface RecentActivityProps {
    activities: ActivityItem[];
}

const RecentActivity = ({ activities }: RecentActivityProps) => {
    return (
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
                <Activity className="h-5 w-5 text-gray-400" />
            </div>
            <div className="p-6">
                <div className="space-y-6">
                    {activities.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-4">
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${activity.color}`}>
                                <activity.icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-gray-900">
                                    {activity.type === 'register' && activity.user}
                                    {activity.type !== 'register' && activity.user}
                                    <span className="font-normal text-gray-500"> {activity.action}</span>
                                </p>
                                <p className="text-sm text-gray-400">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentActivity;
