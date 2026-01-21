import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRecipe } from "../services";
import { addToast } from "@heroui/react";



export const useCreateRecipe = () => {
    const queryClient = useQueryClient();

    const { mutate: addRecipe , isPending } = useMutation({
        mutationFn: createRecipe,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['recipes'] });
            addToast({
                title: 'Success',
                description: "Recipe created successfully",
                color: 'success'
            })
        },
        onError: (error) => {
            console.log(error);
            addToast({
                title: 'Error',
                description: "Error creating recipe",
                color: 'danger'
            })
        }
    })

    return { addRecipe , isPending }
}