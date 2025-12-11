import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addComment } from "../services"
import { addToast } from "@heroui/react"






export const useAddComment = (recipeId: string) => {
    const queryClient = useQueryClient()
     const { mutate:createComment , isPending } = useMutation({
        mutationFn: addComment,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['recipe', recipeId]
            })
        },
        onError: () => {
            addToast({
                title: 'Error',
                description: 'Failed to add comment',
                color: 'danger'
            })           
        }
     })

    return { createComment , isPending }
}