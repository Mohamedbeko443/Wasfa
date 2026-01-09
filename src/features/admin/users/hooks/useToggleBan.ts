import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleBanUser } from "../services";
import { addToast } from "@heroui/react";


type targetQueryKey = "users" | "comments"; 

export const useToggleBan = ( userAction: "active" | "ban" , targetQueryKey: targetQueryKey ) => {
   const queryClient = useQueryClient();
   const { mutate: toggleBan, isPending, isError } = useMutation({
      mutationFn: toggleBanUser,
      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: [targetQueryKey], 
         })
         addToast({
            title: userAction === "ban" ? "User banned successfully" : "User active successfully",
            color: "success",
         })
      },
      onError: (err) => {
         console.log(err);
         addToast({
            title: userAction === "ban" ? "User banned failed" : "User active failed",
            color: "danger",
         })
      }
   })
   return { toggleBan, isPending, isError } 
}