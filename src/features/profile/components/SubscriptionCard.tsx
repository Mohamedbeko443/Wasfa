import { CreditCard, Search } from 'lucide-react';

export default function SubscriptionCard() {
    return (
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Subscription</h3>
                <CreditCard className="w-5 h-5 text-orange-500" />
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white mb-6 shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <CrownIcon className="w-24 h-24 transform rotate-12" />
                </div>

                <p className="text-orange-100 text-xs font-medium uppercase tracking-wider mb-1">Current Plan</p>
                <h2 className="text-2xl font-bold mb-1">Premium</h2>
                <p className="text-orange-100 text-sm opacity-90">Active until 2024-12-31</p>
                <div className="absolute top-4 right-4">
                    <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-4 flex justify-between items-center mb-6 border border-orange-100">
                <div className="flex items-center gap-3">
                    <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                        <Search className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-700 text-sm">Searches</span>
                </div>
                <span className="text-orange-600 font-bold text-sm">Unlimited</span>
            </div>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition-colors mt-auto cursor-pointer">
                Manage Subscription
            </button>
        </div>
    );
}

function CrownIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m2 4 3 12h14l3-12-6 7-4-13-4 13z" />
        </svg>
    );
}
