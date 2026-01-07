import api from "@/common/api";
import { AxiosError } from "axios";



// get recent activities
export const getRecentActivities = async () => {
    try {
        const response = await api.get('/activities');
        return response.data;
    } catch (error: unknown) {
        if(error instanceof AxiosError){
            throw error.response?.data;
        }
        throw error;
    }
}



// get stats
export const getStats = async () => {
    try {
        const response = await api.get('/stats');
        return response.data;
    } catch (error: unknown) {
        if(error instanceof AxiosError){
            throw error.response?.data;
        }
        throw error;
    }
}
