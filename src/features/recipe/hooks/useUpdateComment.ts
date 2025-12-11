import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateComment } from "../services"
import { addToast } from "@heroui/react"




export const useUpdateComment = (recipeId: string) => {
    const queryClient = useQueryClient();
    const { mutate:EditComment , isPending } = useMutation({
        mutationFn: updateComment,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["recipe", recipeId]
            })
            addToast({
                title: "Success",
                description: "Comment updated successfully",
                color: "success"
            })
        },
        onError: () => {
            addToast({
                title: "Error",
                description: "Failed to update comment",
                color: "danger"
            })
        }
    })

    return { EditComment , isPending }
}