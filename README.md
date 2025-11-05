# Health Risk Analyzer

A full-stack web application that collects user symptoms and vitals, analyzes them using mock AI logic, and displays triage recommendations.

## 🚀 Tech Stack

- **Frontend**: React 18.2.0 + Tailwind CSS 3.3.6
- **Backend**: FastAPI 0.104.1 + Python 3.11
- **Containerization**: Docker + Docker Compose

## 📁 Project Structure

```
health-risk-analyzer/
├── frontend/          # React application
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
├── backend/           # FastAPI application
│   ├── main.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🛠️ Setup and Run

### Prerequisites

- Docker installed
- Docker Compose (v1 or v2) installed

### Quick Start

1. **Clone or navigate to the project directory:**

   ```bash
   cd health-risk-analyzer
   ```

2. **Start both services using Docker Compose:**

   **Option 1: Using Docker Compose v2 (recommended):**

   ```bash
   docker compose up --build
   ```

   **Option 2: Using Docker Compose v1:**

   ```bash
   docker-compose up --build
   ```

   **Note:** If you encounter issues with `docker-compose` on Python 3.12+, use `docker compose` (v2) instead, which is built into modern Docker installations.

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

### Manual Setup (without Docker)

#### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

#### Frontend Setup

```bash
cd frontend
npm install
npm start
```

## 📋 Features

### Frontend

- Responsive form with validation for:
  - Symptom Description (textarea)
  - Heart Rate (30-220 bpm)
  - Temperature (35-45°C)
  - SpO₂ (70-100%)
  - Blood Pressure (text input)
- Real-time validation feedback
- Color-coded risk level display:
  - 🟢 Green: Normal
  - 🟡 Yellow: Mild concern
  - 🟠 Orange: Moderate concern
  - 🔴 Red: High risk
- Loading states and error handling
- Medical disclaimer

### Backend

- RESTful API endpoint: `POST /analyze`
- Input validation using Pydantic
- Mock AI risk analysis algorithm
- CORS enabled for frontend communication
- Request logging
- Error handling

## 🔌 API Endpoint

### POST /analyze

**Request Body:**

```json
{
  "symptom": "headache and fatigue",
  "heart_rate": 88,
  "temperature": 38.2,
  "spo2": 96,
  "blood_pressure": "120/80"
}
```

**Response:**

```json
{
  "level": "yellow",
  "confidence": 0.92,
  "message": "Slight concern, monitor symptoms."
}
```

## ⏱️ Time Spent

~2 hours

## 🧩 Technical Challenge

One challenge faced was configuring CORS properly between the React frontend and FastAPI backend. The frontend makes requests from `localhost:3000` to `localhost:8000`, which required explicit CORS middleware configuration in FastAPI to allow cross-origin requests. Additionally, ensuring the frontend could communicate with the backend in Docker containers required careful network configuration in `docker-compose.yml`, including proper service dependencies and environment variables.

## 📸 Screenshot

![Health Risk Analyzer Screenshot](./screenshot.png)

_Note: Screenshot placeholder - add a screenshot of the running application here_

## ⚠️ Disclaimer

This application is for educational and demonstration purposes only. It does not provide medical diagnosis or treatment. Always consult with a qualified healthcare provider for medical advice.

## 📝 License

This project is created for a technical assessment.
