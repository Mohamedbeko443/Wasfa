import { useQuery } from "@tanstack/react-query"
import { getAllUsers } from "../services"
import { userFilters } from "../services"


export interface IUsers {
    id: string;
    email: string;
    isVerified: boolean;
    username: string;
    isAdmin: boolean;
    createdAt: string;
    subscription: "FREE" | "BASIC" | "PRO";
    isBanned: boolean;
}

interface IUsersResponse {
    users: IUsers[];
    count: number;
    totalPages: number;
}

export const useUsers = (filters: userFilters) => {
    const { data, isLoading, isError, error, refetch } = useQuery<IUsersResponse>({
        queryKey: ["users", filters],
        queryFn: () => getAllUsers(filters),
    })
    return { users: data?.users, totalPages: data?.totalPages, isLoading, isError, error, refetch }
}