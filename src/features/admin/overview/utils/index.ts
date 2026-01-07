import { Users, Utensils, MessageCircle, Crown } from 'lucide-react';



export enum ActivityAction {
    // Auth
    REGISTERED_USER = "REGISTERED_USER",
    LOGGED_IN = "LOGGED_IN",
    VERIFIED_EMAIL = "VERIFIED_EMAIL",

    // Recipe
    CREATED_RECIPE = "CREATED_RECIPE",
    DELETED_RECIPE = "DELETED_RECIPE",
    UPDATED_RECIPE_IMAGE = "UPDATED_RECIPE_IMAGE",
    UPDATED_RECIPE = "UPDATED_RECIPE",

    // Comment
    CREATED_COMMENT = "CREATED_COMMENT",
    DELETED_COMMENT = "DELETED_COMMENT",
    UPDATED_COMMENT = "UPDATED_COMMENT",

    // Profile
    DELETED_ACCOUNT = "DELETED_ACCOUNT",

    // Password
    REQUESTED_RESET_PASSWORD = "REQUESTED_RESET_PASSWORD",
    RESET_PASSWORD = "RESET_PASSWORD"
}



export const getStatsCards = (stats: any) => [
    {
        title: 'Total Users',
        value: stats?.usersCount?.toString() || '0',
        icon: Users,
        color: 'bg-blue-500',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-600',
    },
    {
        title: 'Total Recipes',
        value: stats?.recipesCount?.toString() || '0',
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
        value: stats?.commentsCount?.toString() || '0',
        icon: MessageCircle,
        color: 'bg-red-500',
        bgColor: 'bg-red-50',
        textColor: 'text-red-600',
    },
];



export const getActivityConfig = (action: ActivityAction) => {
    switch (action) {
        case ActivityAction.REGISTERED_USER:
        case ActivityAction.LOGGED_IN:
        case ActivityAction.VERIFIED_EMAIL:
        case ActivityAction.DELETED_ACCOUNT:
        case ActivityAction.REQUESTED_RESET_PASSWORD:
        case ActivityAction.RESET_PASSWORD:
            return { icon: Users, color: 'bg-blue-100 text-blue-600', type: 'register' };

        case ActivityAction.CREATED_RECIPE:
        case ActivityAction.DELETED_RECIPE:
        case ActivityAction.UPDATED_RECIPE:
        case ActivityAction.UPDATED_RECIPE_IMAGE:
            return { icon: Utensils, color: 'bg-green-100 text-green-600', type: 'update' };

        case ActivityAction.CREATED_COMMENT:
        case ActivityAction.DELETED_COMMENT:
        case ActivityAction.UPDATED_COMMENT:
            return { icon: MessageCircle, color: 'bg-orange-100 text-orange-600', type: 'review' };

        default:
            return { icon: Users, color: 'bg-gray-100 text-gray-600', type: 'unknown' };
    }
};

export const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
};