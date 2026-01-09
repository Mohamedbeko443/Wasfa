import { useQuery } from "@tanstack/react-query";
import { CommentsFilter, getAllComments } from "../services";
import { Review } from "../components/ReviewRow";



export const useReviews = (commentsFilter: CommentsFilter) => {
    const {data:comments , isLoading , isError , refetch} = useQuery<Review[]>({
        queryKey: ["comments" , commentsFilter],
        queryFn: () => getAllComments(commentsFilter),
    }); 

    return {comments , isLoading , isError , refetch}
}  