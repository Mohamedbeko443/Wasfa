import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import useAuthStore from '@/features/auth/store/auth';
import { OriginalRequest } from '../interfaces';


const base = import.meta.env.VITE_BASE_URL;

const api: AxiosInstance = axios.create({
    baseURL: base,
    withCredentials: true,
});

// Add access token to every request
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token: string | null = useAuthStore.getState().accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Refresh token logic
api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest: OriginalRequest = error.config as OriginalRequest;

        // Handle both 401 (no/invalid token) and 403 (forbidden)
        if (error.response?.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const res = await axios.post<{ token: string }>(
                    `${base}/auth/refresh-token`,
                    {},
                    { withCredentials: true }
                );

                const newToken: string = res.data.token;
                useAuthStore.getState().setAccessToken(newToken); 

                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                // Return a new promise to retry the original request with the new token
                return api(originalRequest);
            } catch (err) {
                console.error('Refresh token failed:', err);
                console.log('Response:', (err as AxiosError).response?.data);
                
                useAuthStore.persist.clearStorage();
                window.location.href = '/login';
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export default api;