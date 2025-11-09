// Triage-related types

export type TriageLevel =
    | "self_care"
    | "primary_care"
    | "semi_emergency"
    | "emergency";

export interface TriageResult {
    level: TriageLevel;
    confidence: number;
    message: string;
    recommendations: string[];
    safety_note: string;
}

export interface TriageConfig {
    icon: string;
    color: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
    title: string;
    description: string;
}

