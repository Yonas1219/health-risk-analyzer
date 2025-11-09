from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, field_validator
from typing import Optional, List
import random
import logging
import re

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Health Risk Analyzer API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Router prefix
api_router = app

# ==================== Request Models ====================

class HealthData(BaseModel):
    symptom: str = Field(..., min_length=1, max_length=500)
    heart_rate: Optional[int] = Field(None, ge=30, le=220)
    temperature: Optional[float] = Field(None, ge=35.0, le=45.0)
    spo2: Optional[int] = Field(None, ge=70, le=100)
    blood_pressure: Optional[str] = Field(None, min_length=1, max_length=20)
    duration: Optional[str] = Field(None, max_length=100)

    @field_validator("temperature")
    @classmethod
    def validate_temperature(cls, v):
        if v is not None and (v < 35.0 or v > 45.0):
            raise ValueError("Temperature must be between 35-45°C")
        return v

    @field_validator("spo2")
    @classmethod
    def validate_spo2(cls, v):
        if v is not None and (v < 70 or v > 100):
            raise ValueError("SpO₂ must be between 70-100")
        return v

    @field_validator("blood_pressure")
    @classmethod
    def validate_blood_pressure(cls, v):
        if v is not None:
            if not re.match(r'^\d{2,3}/\d{2,3}$', v):
                raise ValueError("Blood pressure must be in format: systolic/diastolic (e.g., 120/80)")
        return v


class ConsentData(BaseModel):
    consent: bool = Field(..., description="User consent for data processing")
    locale: str = Field("EN", description="User locale (EN or SV)")


# ==================== Response Models ====================

class HealthResponse(BaseModel):
    level: str = Field(..., description="Triage level: self_care, primary_care, semi_emergency, or emergency")
    confidence: float = Field(..., ge=0.0, le=1.0, description="Confidence score (0.0-1.0)")
    message: str = Field(..., description="Personalized message for the user")
    recommendations: List[str] = Field(..., description="List of care recommendations")
    safety_note: str = Field(..., description="Important safety note")


class ConsentResponse(BaseModel):
    status: str = Field(..., description="Consent status")
    message: str = Field(..., description="Response message")


class InfoResponse(BaseModel):
    title: str = Field(..., description="Info title")
    description: str = Field(..., description="Info description")
    video_url: Optional[str] = Field(None, description="Optional video URL")


# ==================== Mock AI Logic ====================

def analyze_health(data: HealthData) -> dict:
    """Mock AI logic for health risk analysis"""
    # Default values for missing vitals
    hr = data.heart_rate or 75
    temp = data.temperature or 36.5
    spo2 = data.spo2 or 98
    
    # Calculate risk score based on vital signs
    risk = 0.0
    risk_breakdown = {}
    
    # Temperature risk (normal: 36.5-37.5°C)
    if temp < 36.0 or temp >= 38.5:  # Fixed: >= instead of > to include 38.5
        risk += 0.3
        risk_breakdown["temperature"] = 0.3
    elif temp < 36.5 or temp > 37.5:
        risk += 0.15
        risk_breakdown["temperature"] = 0.15
    else:
        risk_breakdown["temperature"] = 0.0
    
    # Heart rate risk (normal: 60-100 bpm)
    if hr < 50 or hr > 120:
        risk += 0.3
        risk_breakdown["heart_rate"] = 0.3
    elif hr < 60 or hr > 100:
        risk += 0.15
        risk_breakdown["heart_rate"] = 0.15
    else:
        risk_breakdown["heart_rate"] = 0.0
    
    # SpO₂ risk (normal: 95-100%)
    if spo2 < 90:
        risk += 0.5
        risk_breakdown["spo2"] = 0.5
    elif spo2 < 95:
        risk += 0.2
        risk_breakdown["spo2"] = 0.2
    else:
        risk_breakdown["spo2"] = 0.0
    
    # Symptom severity (simple keyword matching)
    symptom_lower = data.symptom.lower()
    severe_keywords = ["severe", "intense", "unbearable", "crushing", "sharp"]
    moderate_keywords = ["moderate", "persistent", "worsening"]
    
    if any(word in symptom_lower for word in severe_keywords):
        risk += 0.3
        risk_breakdown["symptoms"] = 0.3
    elif any(word in symptom_lower for word in moderate_keywords):
        risk += 0.15
        risk_breakdown["symptoms"] = 0.15
    else:
        risk_breakdown["symptoms"] = 0.0
    
    # Log risk calculation for debugging
    base_risk = risk
    logger.info(f"Risk calculation - Temp: {temp}°C (+{risk_breakdown.get('temperature', 0)}), "
                f"HR: {hr} bpm (+{risk_breakdown.get('heart_rate', 0)}), "
                f"SpO2: {spo2}% (+{risk_breakdown.get('spo2', 0)}), "
                f"Symptoms: '{data.symptom[:30]}...' (+{risk_breakdown.get('symptoms', 0)}), "
                f"Base risk: {base_risk}")
    
    # Add some randomness for demo (reduced to ±0.05 for more consistent results)
    randomness = random.uniform(-0.05, 0.05)
    risk += randomness
    risk = max(0.0, min(1.0, risk))  # Clamp between 0 and 1
    
    logger.info(f"Final risk after randomness ({randomness:.2f}): {risk:.2f}")
    
    # Determine triage level
    if risk < 0.3:
        level = "self_care"
        message = "Your symptoms appear mild. Monitor at home and rest."
        recommendations = [
            "Rest and stay hydrated",
            "Monitor symptoms for 24-48 hours",
            "Use over-the-counter remedies if appropriate",
            "Contact healthcare if symptoms worsen"
        ]
        safety_note = "If symptoms worsen or persist beyond 48 hours, contact your primary care provider."
    elif risk < 0.6:
        level = "primary_care"
        message = "Non-urgent, but medical review recommended within 24-48 hours."
        recommendations = [
            "Schedule an appointment with your primary care provider",
            "Monitor symptoms closely",
            "Keep a symptom diary",
            "Seek care if symptoms worsen"
        ]
        safety_note = "If symptoms worsen significantly, seek care sooner. Contact emergency services if you experience severe symptoms."
    elif risk < 0.8:
        level = "semi_emergency"
        message = "Moderate concern. Seek medical care within hours."
        recommendations = [
            "Seek medical attention within 4-6 hours",
            "Consider visiting urgent care or emergency department",
            "Do not delay if symptoms worsen",
            "Have someone accompany you if possible"
        ]
        safety_note = "If symptoms worsen rapidly or you experience severe pain, difficulty breathing, or confusion, call emergency services immediately."
    else:
        level = "emergency"
        message = "High risk detected. Seek immediate medical attention."
        recommendations = [
            "Call emergency services (911/112) immediately",
            "Do not drive yourself to the hospital",
            "Have someone stay with you",
            "Prepare a list of medications and allergies"
        ]
        safety_note = "This is a high-risk assessment. If you are experiencing chest pain, difficulty breathing, severe trauma, or loss of consciousness, call emergency services immediately."
    
    logger.info(f"Triage level determined: {level} (risk: {risk:.2f})")
    
    confidence = round(0.75 + random.uniform(0, 0.2), 2)  # 75-95% confidence
    
    return {
        "level": level,
        "confidence": confidence,
        "message": message,
        "recommendations": recommendations,
        "safety_note": safety_note
    }


# ==================== API Endpoints ====================

@api_router.post("/api/v1/analyze", response_model=HealthResponse)
async def analyze_health_risk(data: HealthData):
    """Analyze health risk based on symptoms and vitals"""
    try:
        logger.info(f"Received health data: {data.symptom[:50]}..., HR: {data.heart_rate}, Temp: {data.temperature}, SpO2: {data.spo2}")
        
        result = analyze_health(data)
        
        logger.info(f"Analysis result: {result['level']} - {result['message']}")
        
        return HealthResponse(**result)
    except ValueError as e:
        logger.error(f"Validation error: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Error analyzing health data: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@api_router.post("/api/v1/consent", response_model=ConsentResponse)
async def record_consent(data: ConsentData):
    """Record user consent for data processing"""
    try:
        if not data.consent:
            raise HTTPException(status_code=400, detail="Consent is required to proceed")
        
        logger.info(f"Consent recorded: {data.consent}, Locale: {data.locale}")
        
        return ConsentResponse(
            status="accepted",
            message=f"Consent recorded successfully. Locale: {data.locale}"
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error recording consent: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@api_router.get("/api/v1/info/{info_type}", response_model=InfoResponse)
async def get_info(info_type: str):
    """Get information about measurement guides"""
    try:
        info_content = {
            "temperature": {
                "title": "Temperature",
                "description": "Measure your body temperature using a thermometer. Normal body temperature is around 36.5-37.5°C. Place the thermometer under your tongue or in your armpit for accurate reading.",
                "video_url": None
            },
            "heart_rate": {
                "title": "Heart Rate",
                "description": "Find your pulse on your wrist or neck. Count the beats for 30 seconds and multiply by 2, or count for a full minute. Normal resting heart rate is 60-100 bpm.",
                "video_url": None
            },
            "spo2": {
                "title": "SpO₂ (Oxygen Saturation)",
                "description": "Measure your blood oxygen level using a pulse oximeter. Place the device on your finger and wait for a reading. Normal SpO₂ is 95-100%. Values below 90% may indicate a medical emergency.",
                "video_url": None
            },
            "blood_pressure": {
                "title": "Blood Pressure",
                "description": "Measure your blood pressure using a blood pressure monitor. Normal blood pressure is typically around 120/80 mmHg. Enter in format: systolic/diastolic (e.g., 120/80).",
                "video_url": None
            },
            "symptom": {
                "title": "Main Symptom",
                "description": "Describe your primary symptom or concern. Be as specific as possible (e.g., 'chest pain', 'headache for 3 days', 'fever and cough').",
                "video_url": None
            },
            "duration": {
                "title": "Duration",
                "description": "How long have you been experiencing these symptoms? This helps determine the urgency of care needed.",
                "video_url": None
            }
        }
        
        if info_type not in info_content:
            raise HTTPException(status_code=404, detail=f"Info type '{info_type}' not found")
        
        return InfoResponse(**info_content[info_type])
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error getting info: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@api_router.get("/")
async def root():
    """Health check endpoint"""
    return {"status": "ok", "message": "Health Risk Analyzer API is running", "version": "1.0.0"}


@api_router.get("/health")
async def health_check():
    """Health check endpoint for monitoring"""
    return {"status": "healthy", "service": "health-risk-analyzer-api"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=False)
