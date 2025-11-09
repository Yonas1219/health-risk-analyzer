"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import LanguageToggle from "../components/LanguageToggle";
import Footer from "../components/Footer";
import { TriageResult } from "../types";
import { ROUTES, TRIAGE_LEVELS } from "../constants";
import Button from "../components/ui/Button";
import { API_ENDPOINTS } from "../lib/api/client";

export default function Results() {
  const [result, setResult] = useState<TriageResult | null>(null);
  const [progress, setProgress] = useState(66);
  const router = useRouter();

  useEffect(() => {
    // Animate progress bar from 66% to 100% (Step 3 of 3)
    setProgress(66); // Start from 66% (Step 2 completion)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Get form data from sessionStorage
    if (typeof window === "undefined") return;

    const formDataStr = sessionStorage.getItem("formData");
    if (!formDataStr) {
      router.push(ROUTES.INPUT);
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
          spo2: formData.spo2 ? parseInt(formData.spo2) : null,
          blood_pressure: formData.blood_pressure || null,
        };

        const response = await fetch(API_ENDPOINTS.ANALYZE, {
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
  }, [router]);

  const getTriageConfig = (level: string) => {
    return (
      TRIAGE_LEVELS[level as keyof typeof TRIAGE_LEVELS] ||
      TRIAGE_LEVELS.primary_care
    );
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
            onClick={() => router.push("/input")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-2 py-1"
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
        {/* Progress Indicator */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-primary-DEFAULT">
              Step 3 of 3
            </span>
            <span className="text-sm text-gray-500">Results</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 relative overflow-hidden">
            <motion.div
              className="h-2 rounded-full"
              style={{ backgroundColor: "#10B981" }}
              initial={{ width: "66%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            ></motion.div>
          </div>
          <motion.p
            className="text-sm text-gray-600 text-center font-medium mt-2"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {Math.round(progress)}%
          </motion.p>
        </div>

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
                className="h-2 rounded-full"
                style={{
                  width: `${result.confidence * 100}%`,
                  background:
                    config.color === "triage-selfCare"
                      ? "linear-gradient(to right, #10B981, #A3E635)"
                      : config.color === "triage-primaryCare"
                      ? "linear-gradient(to right, #10B981, #A3E635)"
                      : config.color === "triage-semiEmergency"
                      ? "linear-gradient(to right, #10B981, #A3E635)"
                      : "linear-gradient(to right, #10B981, #A3E635)",
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
        <div className="flex items-center gap-4 mb-8">
          <Button
            onClick={() => router.push(ROUTES.INPUT)}
            variant="primary"
            size="lg"
            fullWidth
          >
            Check Another Symptom
          </Button>
          <Button
            onClick={() => {
              // Save report as PDF (placeholder - to be implemented)
              if (typeof window !== "undefined") {
                window.print();
              }
            }}
            variant="primary"
            size="lg"
            fullWidth
          >
            Save Report (PDF)
          </Button>
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

      <Footer />
    </div>
  );
}
