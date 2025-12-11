import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteComment } from "../services"
import { addToast } from "@heroui/react"




export const useDeleteComment = (recipeId: string) => {
    const queryClient = useQueryClient();
    const {mutate: deleteReview , isPending} = useMutation({
        mutationFn: deleteComment,
        onSuccess: () => {
            addToast({
                title: "Success",
                description: "Comment deleted successfully",
                color: "success",
            })           
            queryClient.invalidateQueries({
                queryKey: ["recipe", recipeId],
            })
            
        },
        onError: () => {
            addToast({
                title: "Error",
                description: "Failed to delete comment",
                color: "danger",
            })           
        }
    })

    return {deleteReview , isPending}
}