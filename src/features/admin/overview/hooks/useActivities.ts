import { useQuery } from "@tanstack/react-query"
import { getRecentActivities } from "../services";
import { ActivityAction } from "../utils";

interface IActivity {
    _id: string;
    user: {
        _id: string;
        username: string;
        email: string;
        id: string;
    };
    action: ActivityAction;
    details: {
        message: string;
    };
    targetId: string;
    targetModel: string;
    createdAt: string;
}




interface IActivityResponse {
    activities: IActivity[];
    count: number;
}

export const useActivities = () => {

    const { data, isLoading, isError, refetch, isSuccess } = useQuery<IActivityResponse>({
        queryKey: ['activities'],
        queryFn: getRecentActivities,
        refetchInterval: 10000,
    })

    return { recentActivities: data?.activities, isLoading, isError, refetch, isSuccess };
}