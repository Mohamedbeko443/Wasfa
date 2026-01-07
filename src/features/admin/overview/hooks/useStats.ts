import { useQuery } from "@tanstack/react-query"
import { getStats } from "../services"

interface IStats {
    usersCount: number;
    recipesCount: number;
    commentsCount: number;
}


export const useStats = () => {
    const { data:stats, isLoading, isError , refetch , isSuccess } = useQuery<IStats>({
        queryKey: ['stats'],
        queryFn: getStats,
    })

    return { stats, isLoading, isError , refetch , isSuccess }
}