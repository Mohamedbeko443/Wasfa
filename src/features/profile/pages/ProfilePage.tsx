import ProfileHeader from "../components/ProfileHeader";
import SubscriptionCard from "../components/SubscriptionCard";
import ActivityStats from "../components/ActivityStats";
import RecentComments from "../components/RecentComments";
import FavoriteRecipes from "../components/FavoriteRecipes";

export default function ProfilePage() {
    return (
        <div className="bg-orange-50/30 min-h-screen py-8 md:py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <ProfileHeader />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Stats & Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <SubscriptionCard />
                        <ActivityStats />
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <RecentComments />
                        <FavoriteRecipes />
                    </div>
                </div>
            </div>
        </div>
    );
}
