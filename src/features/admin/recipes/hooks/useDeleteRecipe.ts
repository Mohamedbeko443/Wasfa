import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRecipe as deleteRecipeService } from "../services";
import { addToast } from "@heroui/react";



export const useDeleteRecipe = () => {  
    const queryClient = useQueryClient();

    const { mutate: deleteRecipe , isPending } = useMutation({
        mutationFn: deleteRecipeService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['recipes'] });
            addToast({
                title: 'Success',
                description: "Recipe deleted successfully",
                color: 'success'
            })
        },
        onError: (error) => {
            console.log(error);
            addToast({
                title: 'Error',
                description: "Error deleting recipe",
                color: 'danger'
            })
        }
    })

    return { deleteRecipe , isPending }
}