/* eslint-disable prettier/prettier */

import { InternalAxiosRequestConfig } from 'axios';


export interface OriginalRequest extends InternalAxiosRequestConfig {
    _retry?: boolean;
}