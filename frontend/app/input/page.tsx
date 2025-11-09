"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import LanguageToggle from "../components/LanguageToggle";
import Footer from "../components/Footer";
import { FormData, FormErrors } from "../types";
import { ROUTES, VALIDATION_RULES } from "../constants";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import { hasConsent } from "../lib/utils/consent";
import ConsentModal from "../components/ConsentModal";

export default function InputForm() {
  const [formData, setFormData] = useState<FormData>({
    symptom: "",
    temperature: "",
    heart_rate: "",
    spo2: "",
    blood_pressure: "",
    duration: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showInfo, setShowInfo] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [showConsentModal, setShowConsentModal] = useState(false);
  const router = useRouter();

  // Check consent on mount
  useEffect(() => {
    if (typeof window !== "undefined" && !hasConsent()) {
      setShowConsentModal(true);
    }
  }, []);

  useEffect(() => {
    // Animate progress bar from 0% to 33% (Step 1 of 3)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 33) {
          clearInterval(progressInterval);
          return 33;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(progressInterval);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.symptom.trim()) {
      newErrors.symptom = "Main symptom is required";
    }

    if (
      formData.temperature &&
      (parseFloat(formData.temperature) < VALIDATION_RULES.temperature.min ||
        parseFloat(formData.temperature) > VALIDATION_RULES.temperature.max)
    ) {
      newErrors.temperature = VALIDATION_RULES.temperature.error;
    }

    if (
      formData.heart_rate &&
      (parseInt(formData.heart_rate) < VALIDATION_RULES.heart_rate.min ||
        parseInt(formData.heart_rate) > VALIDATION_RULES.heart_rate.max)
    ) {
      newErrors.heart_rate = VALIDATION_RULES.heart_rate.error;
    }

    if (
      formData.spo2 &&
      (parseInt(formData.spo2) < VALIDATION_RULES.spo2.min ||
        parseInt(formData.spo2) > VALIDATION_RULES.spo2.max)
    ) {
      newErrors.spo2 = VALIDATION_RULES.spo2.error;
    }

    if (formData.blood_pressure) {
      if (
        !VALIDATION_RULES.blood_pressure.pattern.test(formData.blood_pressure)
      ) {
        newErrors.blood_pressure = VALIDATION_RULES.blood_pressure.error;
      }
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
      if (typeof window !== "undefined") {
        sessionStorage.setItem("formData", JSON.stringify(formData));
      }
      router.push(ROUTES.PROCESSING);
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
        spo2: {
          title: "SpO₂ (Oxygen Saturation)",
          description:
            "Measure your blood oxygen level using a pulse oximeter. Place the device on your finger and wait for a reading. Normal SpO₂ is 95-100%. Values below 90% may indicate a medical emergency.",
        },
        blood_pressure: {
          title: "Blood Pressure",
          description:
            "Measure your blood pressure using a blood pressure monitor. Normal blood pressure is typically around 120/80 mmHg. Enter in format: systolic/diastolic (e.g., 120/80).",
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
      <ConsentModal
        isOpen={showConsentModal}
        onClose={() => {
          setShowConsentModal(false);
          router.push(ROUTES.HOME);
        }}
        onConsent={() => {
          setShowConsentModal(false);
        }}
      />
      {/* Header */}
      <header className="w-full px-4 sm:px-6 py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push(ROUTES.HOME)}
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
        {/* Progress Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-primary-DEFAULT">
              Step 1 of 3
            </span>
            <span className="text-sm text-gray-500">Input Form</span>
          </div>

          {/* Progress Stepper with Connecting Line */}
          <div className="relative flex items-center justify-between mb-2">
            {/* Step 1 - Active */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-8 h-8 rounded-full bg-primary-DEFAULT border-2 border-primary-DEFAULT flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <span className="text-xs text-primary-DEFAULT font-medium mt-1">
                Input
              </span>
            </div>

            {/* Connecting Line */}
            <div className="flex-1 h-0.5 bg-gray-200 mx-2 relative">
              <div
                className="absolute top-0 left-0 h-full bg-primary-DEFAULT transition-all duration-300"
                style={{ width: "0%" }}
              ></div>
            </div>

            {/* Step 2 - Pending */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-xs font-bold">2</span>
              </div>
              <span className="text-xs text-gray-500 font-medium mt-1">
                Analyzing
              </span>
            </div>

            {/* Connecting Line */}
            <div className="flex-1 h-0.5 bg-gray-200 mx-2"></div>

            {/* Step 3 - Pending */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-xs font-bold">3</span>
              </div>
              <span className="text-xs text-gray-500 font-medium mt-1">
                Results
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 relative overflow-hidden">
            <motion.div
              className="h-2 rounded-full"
              style={{ backgroundColor: "#10B981" }}
              initial={{ width: "0%" }}
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
            <Textarea
              id="symptom"
              name="symptom"
              label="Main symptom"
              value={formData.symptom}
              onChange={handleChange}
              rows={4}
              error={errors.symptom}
              infoButton={{
                onClick: () => setShowInfo("symptom"),
              }}
              placeholder="Describe your main symptom or concern..."
              required
            />

            {/* Temperature */}
            <Input
              type="number"
              step="0.1"
              id="temperature"
              name="temperature"
              label="Temperature (°C)"
              value={formData.temperature}
              onChange={handleChange}
              error={errors.temperature}
              infoButton={{
                onClick: () => setShowInfo("temperature"),
              }}
              placeholder="e.g., 38.2"
            />

            {/* Heart Rate */}
            <Input
              type="number"
              id="heart_rate"
              name="heart_rate"
              label="Heart rate (bpm)"
              value={formData.heart_rate}
              onChange={handleChange}
              error={errors.heart_rate}
              infoButton={{
                onClick: () => setShowInfo("heart_rate"),
              }}
              placeholder="e.g., 88"
            />

            {/* SpO₂ */}
            <Input
              type="number"
              id="spo2"
              name="spo2"
              label="SpO₂ (%)"
              value={formData.spo2}
              onChange={handleChange}
              min="70"
              max="100"
              error={errors.spo2}
              infoButton={{
                onClick: () => setShowInfo("spo2"),
              }}
              placeholder="e.g., 98"
            />

            {/* Blood Pressure */}
            <Input
              type="text"
              id="blood_pressure"
              name="blood_pressure"
              label="Blood Pressure (mmHg)"
              value={formData.blood_pressure}
              onChange={handleChange}
              error={errors.blood_pressure}
              infoButton={{
                onClick: () => setShowInfo("blood_pressure"),
              }}
              placeholder="e.g., 120/80"
            />

            {/* Duration */}
            <Input
              type="text"
              id="duration"
              name="duration"
              label="Duration"
              value={formData.duration}
              onChange={handleChange}
              infoButton={{
                onClick: () => setShowInfo("duration"),
              }}
              placeholder="e.g., 2 days, 3 hours"
            />

            {/* Note */}
            <div className="bg-primary-soft border-l-4 border-primary-DEFAULT p-4 rounded-r-lg mb-6">
              <p className="text-sm text-green-800">
                <strong>Note:</strong> Temperature, heart rate, SpO₂, blood
                pressure, and duration are optional but help provide more
                accurate recommendations.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Button
                type="submit"
                variant={isFormValid ? "primary" : "disabled"}
                size="lg"
                fullWidth
                disabled={!isFormValid}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Info Modal */}
      {showInfo && (
        <InfoModal type={showInfo} onClose={() => setShowInfo(null)} />
      )}

      <Footer />
    </div>
  );
}
