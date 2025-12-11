import api from "@/common/api"
import { AxiosError } from "axios"




export const fetchRecipeById = async (recipeId: string) => {
    try {
        const response = await api.get(`/recipes/${recipeId}`)
        return response.data
    }
    catch (err: unknown)
    {
        if(err instanceof AxiosError)
        {
            throw new Error(err.response?.data.message)
        }
        throw new Error("Failed to fetch recipe")
    }
}

export type addCommentType = {
    recipeId: string ,
    userId: string , 
    body: string
}

export const addComment = async ({recipeId, userId, body}: addCommentType) => {
    try {
        const response = await api.post("/comments", { recipeId, userId, body })
        return response.data
    }
    catch (err: unknown)
    {
        console.log(err);
        if(err instanceof AxiosError)
        {
            throw new Error(err.response?.data.message)
        }
        throw new Error("Failed to add comment")
    }
}


export const deleteComment = async (commentId: string) => {
    try {
        const response = await api.delete(`/comments/${commentId}`)
        return response.data
    }
    catch (err: unknown)
    {
        console.log(err);
        if(err instanceof AxiosError)
        {
            throw new Error(err.response?.data.message)
        }
        throw new Error("Failed to delete comment")
    }
}



export const updateComment = async ({commentId , body}: {commentId: string , body: string}) => {
    try {
        const response = await api.put(`/comments/${commentId}` , {body})
        return response.data
        console.log("test");
    }
    catch (err: unknown)
    {
        console.log(err);
        if(err instanceof AxiosError)
        {
            throw new Error(err.response?.data.message)
        }
        throw new Error("Failed to update comment")
    }
}