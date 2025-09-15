/* eslint-disable prettier/prettier */

export interface AuthStore {
    accessToken: string | null,
    setAccessToken: (newToken: string) => void,
    removeAccessToken: () => void
}


export interface AuthClasses {
    inputClass: string;
    errorClass: string;
    labelClass: string;
    buttonClass: string;
    disabledButtonClass: string;
}


export interface StepEmailProps {
    onNext: () => void;
}

export interface StepCodeProps {
    onNext: () => void;
}

export interface StepPasswordProps {
    onDone: () => void;
}
