import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    symptom: "",
    heart_rate: "",
    temperature: "",
    spo2: "",
    blood_pressure: "",
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Use environment variable for API URL, fallback to localhost for development
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

  const validateForm = () => {
    const newErrors = {};

    if (!formData.symptom.trim()) {
      newErrors.symptom = "Symptom description is required";
    }

    if (
      !formData.heart_rate ||
      formData.heart_rate < 30 ||
      formData.heart_rate > 220
    ) {
      newErrors.heart_rate = "Heart rate must be between 30-220 bpm";
    }

    const temp = parseFloat(formData.temperature);
    if (!formData.temperature || temp < 35 || temp > 45) {
      newErrors.temperature = "Temperature must be between 35-45°C";
    }

    const spo2 = parseFloat(formData.spo2);
    if (!formData.spo2 || spo2 < 70 || spo2 > 100) {
      newErrors.spo2 = "SpO₂ must be between 70-100";
    }

    if (!formData.blood_pressure.trim()) {
      newErrors.blood_pressure = "Blood pressure is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const payload = {
        symptom: formData.symptom,
        heart_rate: parseInt(formData.heart_rate),
        temperature: parseFloat(formData.temperature),
        spo2: parseFloat(formData.spo2),
        blood_pressure: formData.blood_pressure,
      };

      const response = await fetch(`${API_URL}/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to analyze health risk");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        level: "red",
        confidence: 0,
        message: `Error: ${error.message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  const getLevelColor = (level) => {
    const colors = {
      green: "bg-green-100 border-green-500 text-green-800",
      yellow: "bg-yellow-100 border-yellow-500 text-yellow-800",
      orange: "bg-orange-100 border-orange-500 text-orange-800",
      red: "bg-red-100 border-red-500 text-red-800",
    };
    return colors[level] || colors.green;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Health Risk Analyzer
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6 mb-6"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="symptom"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Symptom Description
              </label>
              <textarea
                id="symptom"
                name="symptom"
                value={formData.symptom}
                onChange={handleChange}
                rows="4"
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.symptom ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Describe your symptoms..."
              />
              {errors.symptom && (
                <p className="mt-1 text-sm text-red-600">{errors.symptom}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="heart_rate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Heart Rate (bpm)
              </label>
              <input
                type="number"
                id="heart_rate"
                name="heart_rate"
                value={formData.heart_rate}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.heart_rate ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g., 88"
              />
              {errors.heart_rate && (
                <p className="mt-1 text-sm text-red-600">{errors.heart_rate}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="temperature"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Temperature (°C)
              </label>
              <input
                type="number"
                step="0.1"
                id="temperature"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.temperature ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g., 38.2"
              />
              {errors.temperature && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.temperature}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="spo2"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                SpO₂ (%)
              </label>
              <input
                type="number"
                step="0.1"
                id="spo2"
                name="spo2"
                value={formData.spo2}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.spo2 ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g., 96"
              />
              {errors.spo2 && (
                <p className="mt-1 text-sm text-red-600">{errors.spo2}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="blood_pressure"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Blood Pressure
              </label>
              <input
                type="text"
                id="blood_pressure"
                name="blood_pressure"
                value={formData.blood_pressure}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.blood_pressure ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g., 120/80"
              />
              {errors.blood_pressure && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.blood_pressure}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Analyzing..." : "Analyze Health Risk"}
          </button>
        </form>

        {result && (
          <div
            className={`bg-white rounded-lg shadow-md p-6 border-2 ${getLevelColor(
              result.level
            )}`}
          >
            <h2 className="text-2xl font-bold mb-4">Analysis Result</h2>
            <div className="space-y-2">
              <p className="text-lg">
                <span className="font-semibold">Level:</span>{" "}
                {result.level.toUpperCase()}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Confidence:</span>{" "}
                {(result.confidence * 100).toFixed(1)}%
              </p>
              <p className="text-lg">
                <span className="font-semibold">Message:</span> {result.message}
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> This is not a medical diagnosis. If
            symptoms worsen, contact a healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
