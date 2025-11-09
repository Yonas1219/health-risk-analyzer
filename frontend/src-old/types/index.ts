export interface HealthData {
    symptom: string;
    temperature?: number;
    heartRate?: number;
    duration?: string;
}

export interface TriageResult {
    level: 'self_care' | 'primary_care' | 'semi_emergency' | 'emergency';
    confidence: number;
    message: string;
    recommendations: string[];
    safetyNote: string;
}

export type TriageLevel = 'self_care' | 'primary_care' | 'semi_emergency' | 'emergency';

