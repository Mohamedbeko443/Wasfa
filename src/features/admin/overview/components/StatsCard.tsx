import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    textColor: string;
}

const StatsCard = ({ title, value, icon: Icon, color, bgColor }: StatsCardProps) => {
    return (
        <div className={`rounded-xl p-6 shadow-sm border border-gray-100 bg-white ${bgColor} bg-opacity-40`}>
            <div className="flex items-start justify-between">
                <div className={`rounded-lg p-3 ${color} text-white`}>
                    <Icon className="h-6 w-6" />
                </div>
            </div>
            <div className="mt-4">
                <p className="text-sm font-medium text-gray-600">{title}</p>
                <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
            </div>
        </div>
    );
};

export default StatsCard;
