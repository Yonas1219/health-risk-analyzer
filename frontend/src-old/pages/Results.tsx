import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";

interface TriageResult {
  level: "self_care" | "primary_care" | "semi_emergency" | "emergency";
  confidence: number;
  message: string;
  recommendations: string[];
  safety_note: string;
}

const Results: React.FC = () => {
  const [result, setResult] = useState<TriageResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get form data from sessionStorage
    const formDataStr = sessionStorage.getItem("formData");
    if (!formDataStr) {
      navigate("/input");
      return;
    }

    // Call API to analyze
    const analyzeHealth = async () => {
      try {
        const formData = JSON.parse(formDataStr);
        const payload = {
          symptom: formData.symptom,
          heart_rate: formData.heart_rate
            ? parseInt(formData.heart_rate)
            : null,
          temperature: formData.temperature
            ? parseFloat(formData.temperature)
            : null,
          spo2: null,
          blood_pressure: null,
        };

        const response = await fetch("http://localhost:8000/api/v1/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Failed to analyze");
        }

        const data = await response.json();
        setResult({
          level: data.level,
          confidence: data.confidence,
          message: data.message,
          recommendations: data.recommendations || [],
          safety_note:
            data.safety_note ||
            "If symptoms worsen, contact emergency services immediately.",
        });
      } catch (error) {
        // Fallback to mock result for demo
        setResult({
          level: "primary_care",
          confidence: 0.85,
          message: "Non-urgent, but medical review recommended.",
          recommendations: [
            "Monitor symptoms at home",
            "Contact primary care within 24-48 hours",
          ],
          safety_note:
            "If symptoms worsen, contact emergency services immediately.",
        });
      }
    };

    analyzeHealth();
  }, [navigate]);

  const getTriageConfig = (level: string) => {
    const configs = {
      self_care: {
        icon: "🟢",
        color: "triage-selfCare",
        bgColor: "bg-triageCard-selfCare",
        borderColor: "border-triageCard-border",
        textColor: "text-green-800",
        title: "Self-Care",
        description: "Mild symptoms, safe to monitor at home.",
      },
      primary_care: {
        icon: "🟡",
        color: "triage-primaryCare",
        bgColor: "bg-triageCard-primaryCare",
        borderColor: "border-triageCard-border",
        textColor: "text-yellow-800",
        title: "Primary Care",
        description: "Non-urgent, see a doctor if symptoms persist.",
      },
      semi_emergency: {
        icon: "🟠",
        color: "triage-semiEmergency",
        bgColor: "bg-triageCard-semiEmergency",
        borderColor: "border-triageCard-border",
        textColor: "text-orange-800",
        title: "Semi-Emergency",
        description: "Possible risk – seek care within hours.",
      },
      emergency: {
        icon: "🔴",
        color: "triage-emergency",
        bgColor: "bg-triageCard-emergency",
        borderColor: "border-triageCard-border",
        textColor: "text-red-800",
        title: "Emergency",
        description: "Critical – seek medical attention immediately.",
      },
    };
    return configs[level as keyof typeof configs] || configs.primary_care;
  };

  if (!result) {
    return (
      <div className="min-h-screen bg-background-DEFAULT flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-DEFAULT mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  const config = getTriageConfig(result.level);

  return (
    <div className="min-h-screen bg-background-DEFAULT">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate("/input")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-primary-light">
              TriageX
            </span>
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Your TriageX Recommendation
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Based on our Four-Step Model analysis of your symptoms and vital
          parameters
        </p>

        {/* Result Card */}
        <div
          className={`rounded-2xl p-8 mb-6 border-2 ${config.borderColor} ${config.bgColor}`}
        >
          {/* Header with Icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">{config.icon}</div>
            <div>
              <h3 className={`text-3xl font-bold ${config.textColor}`}>
                {config.title}
              </h3>
              <p className={`text-lg ${config.textColor} opacity-80`}>
                {config.description}
              </p>
            </div>
          </div>

          {/* Confidence */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Confidence
              </span>
              <span className={`text-lg font-bold ${config.textColor}`}>
                {(result.confidence * 100).toFixed(0)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  config.color === "triage-selfCare"
                    ? "bg-gradient-to-r from-primary-DEFAULT to-accent-DEFAULT"
                    : config.color === "triage-primaryCare"
                    ? "bg-warning-DEFAULT"
                    : config.color === "triage-semiEmergency"
                    ? "bg-risk-DEFAULT"
                    : "bg-critical-DEFAULT"
                }`}
                style={{
                  width: `${result.confidence * 100}%`,
                  background:
                    config.color === "triage-selfCare"
                      ? "linear-gradient(to right, #10B981, #A3E635)"
                      : undefined,
                }}
              ></div>
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <p className={`text-lg ${config.textColor} leading-relaxed`}>
              {result.message}
            </p>
          </div>

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <div className="mb-6">
              <h4 className={`font-semibold ${config.textColor} mb-3`}>
                Recommendations:
              </h4>
              <ul className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-2 ${config.textColor}`}
                  >
                    <span className="mt-1">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Safety Note */}
          <div
            className={`mt-6 pt-6 border-t-2 ${config.borderColor} opacity-60`}
          >
            <p className={`text-sm font-medium ${config.textColor}`}>
              ⚠️ {result.safety_note}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/input")}
            className="flex-1 py-4 px-6 rounded-xl font-semibold text-white bg-primary-DEFAULT shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
            style={{ backgroundColor: "#10B981" }}
          >
            Check Another Symptom
          </button>
          <button
            onClick={() => {
              // Save report as PDF (placeholder - to be implemented)
              window.print();
            }}
            className="flex-1 py-4 px-6 rounded-xl font-semibold text-white bg-primary-DEFAULT shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
            style={{ backgroundColor: "#10B981" }}
          >
            Save Report (PDF)
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex-1 py-4 px-6 rounded-xl font-semibold text-gray-700 bg-white border-2 border-gray-300 hover:border-gray-400 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all duration-200 cursor-pointer"
          >
            Go to Homepage
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
          <p className="text-sm text-amber-800">
            <strong>Important:</strong> TriageX does not provide a diagnosis. It
            offers level-of-care recommendations based on your input. If your
            symptoms worsen or become severe, call emergency services (112)
            immediately. The tool supports, but does not replace, professional
            medical judgment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
