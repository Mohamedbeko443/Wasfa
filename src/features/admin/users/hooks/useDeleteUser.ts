import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteUser } from "../services"
import { addToast } from "@heroui/react"





export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isError } = useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["users"],
            })
            addToast({
                title: "User deleted successfully",
                color: "success",
            })
        },
        onError: (err) => {
            console.log(err);
            addToast({
                title: "User deleted failed",
                color: "danger",
            })
        }
    })

    return { mutate, isPending, isError }
}