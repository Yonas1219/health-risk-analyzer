from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, validator
from typing import Optional
import random
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Health Risk Analyzer API")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class HealthData(BaseModel):
    symptom: str = Field(..., min_length=1, max_length=500)
    heart_rate: int = Field(..., ge=30, le=220)
    temperature: float = Field(..., ge=35.0, le=45.0)
    spo2: float = Field(..., ge=70, le=100)
    blood_pressure: str = Field(..., min_length=1, max_length=20)

    @validator("temperature")
    def validate_temperature(cls, v):
        if v > 45:
            raise ValueError("Temperature must be ≤ 45°C")
        return v

    @validator("spo2")
    def validate_spo2(cls, v):
        if v < 70 or v > 100:
            raise ValueError("SpO₂ must be between 70-100")
        return v


class HealthResponse(BaseModel):
    level: str
    confidence: float
    message: str


def analyze_health(data: HealthData) -> dict:
    """Mock AI logic for health risk analysis"""
    hr = data.heart_rate
    temp = data.temperature
    spo2 = data.spo2
    
    # Calculate risk score
    risk = ((temp - 36.5) * 0.2 +
            (hr - 80) * 0.01 +
            (100 - spo2) * 0.05)
    risk += random.uniform(-0.1, 0.1)
    
    # Determine risk level
    if risk < 0.3:
        level, msg = "green", "Normal vital signs."
    elif risk < 0.6:
        level, msg = "yellow", "Slight concern, monitor symptoms."
    elif risk < 0.9:
        level, msg = "orange", "Moderate concern, consider seeking medical advice."
    else:
        level, msg = "red", "High risk, seek medical advice immediately."
    
    return {
        "level": level,
        "confidence": round(1 - random.uniform(0, 0.15), 2),
        "message": msg
    }


@app.post("/analyze", response_model=HealthResponse)
async def analyze_health_risk(data: HealthData):
    """Analyze health risk based on symptoms and vitals"""
    try:
        logger.info(f"Received health data: {data.symptom}, HR: {data.heart_rate}, Temp: {data.temperature}, SpO2: {data.spo2}")
        
        result = analyze_health(data)
        
        logger.info(f"Analysis result: {result['level']} - {result['message']}")
        
        return HealthResponse(**result)
    except Exception as e:
        logger.error(f"Error analyzing health data: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@app.get("/")
async def root():
    """Health check endpoint"""
    return {"status": "ok", "message": "Health Risk Analyzer API is running"}

