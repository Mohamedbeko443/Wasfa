import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRecipe as updateRecipeService } from "../services";
import { addToast } from "@heroui/react";


export const useUpdateRecipe = () => {  
    const queryClient = useQueryClient();

    const { mutate: updateRecipe , isPending } = useMutation({
        mutationFn: updateRecipeService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['recipes'] });
            addToast({
                title: 'Success',
                description: "Recipe updated successfully",
                color: 'success'
            })
        },
        onError: (error) => {
            console.log(error);
            addToast({
                title: 'Error',
                description: "Error updating recipe",
                color: 'danger'
            })
        }
    })

    return { updateRecipe , isPending  }
}