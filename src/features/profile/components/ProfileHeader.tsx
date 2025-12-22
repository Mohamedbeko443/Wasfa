import { Mail, Calendar, Crown, Settings, User } from 'lucide-react';

export default function ProfileHeader() {
    return (
        <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-gray-100 mb-6">
            <div className="h-32 md:h-48 bg-gradient-to-r from-orange-400 via-red-400 to-pink-500" />

            <div className="px-6 pb-6 relative">
                <div className="absolute -top-28 left-1/2 -translate-x-1/2 md:-translate-x-0 md:-top-16 md:left-10">
                    <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg bg-orange-500 flex items-center justify-center overflow-hidden">
                            <User className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={2} />
                        </div>
                        <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-white"></div>
                    </div>
                </div>

                <div className="mt-2 md:mt-16 md:ml-40 flex flex-col md:flex-row items-center md:items-end justify-between gap-4 text-center md:text-left">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1.5 hover:text-gray-700 transition-colors">
                                <Mail className="w-4 h-4" />
                                <span>mohamedmertens@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                <span>Joined January 2024</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-orange-500 font-medium">
                                <Crown className="w-4 h-4" />
                                <span>Premium Member</span>
                            </div>
                        </div>
                    </div>

                    <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer">
                        <Settings className="w-4 h-4" />
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
}
