import api from "@/common/api";
import { AxiosError } from "axios"


export type CommentsFilter = {
    sortBy?: sortByType;
    sort?: sortType;
}

export type sortByType = "newest" | "oldest" | "high-rated" | "low-rated";
export type sortType = "asc" | "desc";

// fetch all comments 
export const getAllComments = async (commentFilter: CommentsFilter = {}) => {
    try {
        const response = await api.get(`/comments?sortBy=${commentFilter.sortBy}&sort=${commentFilter.sort}`);
        return response.data;
    } catch (error: unknown) {
        console.log(error);
        if(error instanceof AxiosError)
        {
             throw new Error(error.response?.data.message) 
        }
        throw new Error("Failed to fetch all comments");
    }
}



// delete comment 
export const deleteComment = async (id: string) => {
    try {
        const response = await api.delete(`/comments/${id}`);
        return response.data;
    } catch (error: unknown) {
        console.log(error);
        if(error instanceof AxiosError)
        {
             throw new Error(error.response?.data.message) 
        }
        throw new Error("Failed to delete comment");
    }
}
