import { MessageCircle, ChefHat } from 'lucide-react';

export default function RecentComments() {
    return (
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-orange-500" />
                Recent Comments
            </h3>

            <div className="flex-1 flex flex-col items-center justify-center text-center py-10 opacity-60">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <ChefHat className="w-12 h-12 text-gray-300" />
                </div>
                <p className="text-gray-500 font-medium mb-1">You haven't left any comments yet.</p>
                <p className="text-gray-400 text-sm">Start exploring recipes and share your thoughts!</p>
            </div>
        </div>
    );
}
