// API client configuration

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const API_ENDPOINTS = {
    ANALYZE: `${API_BASE_URL}/api/v1/analyze`,
    CONSENT: `${API_BASE_URL}/api/v1/consent`,
    INFO: (infoType: string) => `${API_BASE_URL}/api/v1/info/${infoType}`,
} as const;

export default API_ENDPOINTS;

