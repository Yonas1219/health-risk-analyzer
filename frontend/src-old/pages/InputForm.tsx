import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";

interface FormData {
  symptom: string;
  temperature: string;
  heart_rate: string;
  duration: string;
}

const InputForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    symptom: "",
    temperature: "",
    heart_rate: "",
    duration: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showInfo, setShowInfo] = useState<string | null>(null);
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.symptom.trim()) {
      newErrors.symptom = "Main symptom is required";
    }

    if (
      formData.temperature &&
      (parseFloat(formData.temperature) < 35 ||
        parseFloat(formData.temperature) > 45)
    ) {
      newErrors.temperature = "Temperature must be between 35-45°C";
    }

    if (
      formData.heart_rate &&
      (parseInt(formData.heart_rate) < 30 ||
        parseInt(formData.heart_rate) > 220)
    ) {
      newErrors.heart_rate = "Heart rate must be between 30-220 bpm";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && !!formData.symptom.trim();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Store form data in sessionStorage for processing page
      sessionStorage.setItem("formData", JSON.stringify(formData));
      navigate("/processing");
    }
  };

  const InfoModal: React.FC<{ type: string; onClose: () => void }> = ({
    type,
    onClose,
  }) => {
    const infoContent: Record<string, { title: string; description: string }> =
      {
        symptom: {
          title: "Main Symptom",
          description:
            "Describe your primary symptom or concern. Be as specific as possible (e.g., 'chest pain', 'headache for 3 days', 'fever and cough').",
        },
        temperature: {
          title: "Temperature",
          description:
            "Measure your body temperature using a thermometer. Normal body temperature is around 36.5-37.5°C. Place the thermometer under your tongue or in your armpit for accurate reading.",
        },
        heart_rate: {
          title: "Heart Rate",
          description:
            "Find your pulse on your wrist or neck. Count the beats for 30 seconds and multiply by 2, or count for a full minute. Normal resting heart rate is 60-100 bpm.",
        },
        duration: {
          title: "Duration",
          description:
            "How long have you been experiencing these symptoms? This helps determine the urgency of care needed.",
        },
      };

    const content = infoContent[type];
    if (!content) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl p-6 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">{content.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 leading-relaxed">{content.description}</p>
        </div>
      </div>
    );
  };

  const isFormValid = formData.symptom.trim() !== "";

  return (
    <div className="min-h-screen bg-background-DEFAULT">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-2 py-1 transition-all duration-200"
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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-12 sm:pb-16">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-primary-DEFAULT">
              Step 1 of 3
            </span>
            <span className="text-sm text-gray-500">Input Form</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 relative">
            <div
              className="bg-primary-DEFAULT h-2 rounded-full"
              style={{ width: "33%" }}
            ></div>
            {/* Emerald line connecting steps */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-DEFAULT opacity-30 -translate-y-1/2"></div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl p-8 pb-10 mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Describe your symptoms and enter key vital parameters
          </h2>
          <p className="text-gray-600 mb-6">
            Our AI will analyze your input through the unique TriageX Four-Step
            Model to provide clear, color-coded recommendations.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 pb-4">
            {/* Main Symptom */}
            <div>
              <label
                htmlFor="symptom"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
              >
                Main symptom
                <button
                  type="button"
                  onClick={() => setShowInfo("symptom")}
                  className="w-5 h-5 rounded-full bg-primary-soft text-primary-DEFAULT flex items-center justify-center hover:bg-primary-light hover:text-white transition-colors"
                >
                  <span className="text-xs font-bold">ℹ️</span>
                </button>
              </label>
              <textarea
                id="symptom"
                name="symptom"
                value={formData.symptom}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                  errors.symptom
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-gray-200 hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-soft"
                }`}
                style={{
                  boxShadow: errors.symptom ? "none" : undefined,
                }}
                onFocus={(e) => {
                  if (!errors.symptom) {
                    e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.3)";
                  }
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "";
                }}
                placeholder="Describe your main symptom or concern..."
                required
              />
              {errors.symptom && (
                <p className="mt-1 text-sm text-red-600">{errors.symptom}</p>
              )}
            </div>

            {/* Temperature */}
            <div>
              <label
                htmlFor="temperature"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
              >
                Temperature (°C)
                <button
                  type="button"
                  onClick={() => setShowInfo("temperature")}
                  className="w-5 h-5 rounded-full bg-primary-soft text-primary-DEFAULT flex items-center justify-center hover:bg-primary-light hover:text-white transition-colors"
                >
                  <span className="text-xs font-bold">ℹ️</span>
                </button>
              </label>
              <input
                type="number"
                step="0.1"
                id="temperature"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                  errors.temperature
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-gray-200 hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-soft"
                }`}
                onFocus={(e) => {
                  if (!errors.temperature) {
                    e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.3)";
                  }
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "";
                }}
                placeholder="e.g., 38.2"
              />
              {errors.temperature && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.temperature}
                </p>
              )}
            </div>

            {/* Heart Rate */}
            <div>
              <label
                htmlFor="heart_rate"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
              >
                Heart rate (bpm)
                <button
                  type="button"
                  onClick={() => setShowInfo("heart_rate")}
                  className="w-5 h-5 rounded-full bg-primary-soft text-primary-DEFAULT flex items-center justify-center hover:bg-primary-light hover:text-white transition-colors"
                >
                  <span className="text-xs font-bold">ℹ️</span>
                </button>
              </label>
              <input
                type="number"
                id="heart_rate"
                name="heart_rate"
                value={formData.heart_rate}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                  errors.heart_rate
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-gray-200 hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-soft"
                }`}
                onFocus={(e) => {
                  if (!errors.heart_rate) {
                    e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.3)";
                  }
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "";
                }}
                placeholder="e.g., 88"
              />
              {errors.heart_rate && (
                <p className="mt-1 text-sm text-red-600">{errors.heart_rate}</p>
              )}
            </div>

            {/* Duration */}
            <div>
              <label
                htmlFor="duration"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
              >
                Duration
                <button
                  type="button"
                  onClick={() => setShowInfo("duration")}
                  className="w-5 h-5 rounded-full bg-primary-soft text-primary-DEFAULT flex items-center justify-center hover:bg-primary-light hover:text-white transition-colors"
                >
                  <span className="text-xs font-bold">ℹ️</span>
                </button>
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-all duration-200 hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-soft"
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.3)";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "";
                }}
                placeholder="e.g., 2 days, 3 hours"
              />
            </div>

            {/* Note */}
            <div className="bg-primary-soft border-l-4 border-primary-DEFAULT p-4 rounded-r-lg mb-6">
              <p className="text-sm text-green-800">
                <strong>Note:</strong> Temperature, heart rate, and duration are
                optional but help provide more accurate recommendations.
              </p>
            </div>

            {/* Submit Button */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 border-2 ${
                  isFormValid
                    ? "bg-primary-DEFAULT text-white shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 cursor-pointer transition-all duration-200"
                    : "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
                }`}
                style={isFormValid ? { backgroundColor: "#10B981" } : {}}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Info Modal */}
      {showInfo && (
        <InfoModal type={showInfo} onClose={() => setShowInfo(null)} />
      )}
    </div>
  );
};

export default InputForm;
