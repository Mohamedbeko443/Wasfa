/* eslint-disable prettier/prettier */

import { InternalAxiosRequestConfig } from 'axios';
import { LucideProps } from 'lucide-react';

export interface OriginalRequest extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

// Header Component Interfaces
export interface HeaderProps { }

export interface SearchBarProps {
    isMobile?: boolean;
}

export interface MobileMenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export interface NavigationItemsProps {
    isMobile?: boolean;
    onItemClick?: () => void;
}

export interface NavItem {
    name: string;
    path: string;
    icon: React.ComponentType<LucideProps>;
    isButton?: boolean;
}

type SelectOption = {
    label: string;
    value: string | number;
}

export interface CustomSelectProps {
    id: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: readonly SelectOption[];  
    label?: string;
    icon?: React.ReactNode;
}
