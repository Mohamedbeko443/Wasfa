import { MessageCircle, Heart, Share2 } from 'lucide-react';

export default function ActivityStats() {
    return (
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                    <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
                </svg>
                Activity Stats
            </h3>

            <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-100 hover:bg-orange-100 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-lg text-orange-500 shadow-sm">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-gray-600 group-hover:text-gray-800 transition-colors">Comments</span>
                    </div>
                    <span className="text-xl font-bold text-orange-600">0</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100 hover:bg-green-100 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-lg text-green-500 shadow-sm">
                            <Heart className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-gray-600 group-hover:text-gray-800 transition-colors">Saved Recipes</span>
                    </div>
                    <span className="text-xl font-bold text-green-600">12</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-lg text-blue-500 shadow-sm">
                            <Share2 className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-gray-600 group-hover:text-gray-800 transition-colors">Shared</span>
                    </div>
                    <span className="text-xl font-bold text-blue-600">8</span>
                </div>
            </div>
        </div>
    );
}
