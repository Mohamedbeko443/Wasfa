import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRecipeImage as updateRecipeImageService } from "../services";
import { addToast } from "@heroui/react";


export const useUploadImage = () => {  
    const queryClient = useQueryClient();

    const { mutate: updateRecipeImage , isPending , isSuccess} = useMutation({
        mutationFn: updateRecipeImageService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['recipes'] });
            addToast({
                title: 'Success',
                description: "Recipe image updated successfully",
                color: 'success'
            })
        },
        onError: (error) => {
            console.log(error);
            addToast({
                title: 'Error',
                description: "Error updating recipe image",
                color: 'danger'
            })
        }
    })

    return { updateRecipeImage , isPending , isSuccess }
}