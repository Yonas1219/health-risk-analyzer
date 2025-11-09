// Form-related types

export interface FormData {
    symptom: string;
    temperature: string;
    heart_rate: string;
    spo2: string;
    blood_pressure: string;
    duration: string;
}

export interface ContactFormData {
    fullName: string;
    workEmail: string;
    organization: string;
    primaryTopic: string;
    message: string;
}

export interface FormErrors {
    [key: string]: string;
}

