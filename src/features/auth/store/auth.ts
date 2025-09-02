/* eslint-disable import/order */
/* eslint-disable prettier/prettier */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthStore } from '../interfaces';




const useAuthStore = create<AuthStore>()(
    persist(
        (set)=> ({
            accessToken: null,

            setAccessToken: (newToken) => set({accessToken: newToken}),
            removeAccessToken: ()=> set({accessToken: null}),
        }),
        {
            name: 'auth-storage',
        }
    )
)

export default useAuthStore