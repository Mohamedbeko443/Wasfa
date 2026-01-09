import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommentsFilter, deleteComment } from "../services";
import { addToast } from "@heroui/react";





export const useDeleteReview = (commentsFilter: CommentsFilter) => {
    const queryClient = useQueryClient();
    const { mutate:deleteReview , isPending } = useMutation({
        mutationFn: deleteComment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["comments" , commentsFilter] });
            addToast({
                title: "Review Deleted",
                description: "Review deleted successfully",
                color: "success",
            })
        },
        onError: () => {
            addToast({
                title: "Review Delete Failed",
                description: "Review delete failed",
                color: "danger",
            })
        }
    });
    return { deleteReview , isPending };
}