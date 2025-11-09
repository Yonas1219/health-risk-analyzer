"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "../constants";
import { saveConsent } from "../lib/utils/consent";
import Button from "./ui/Button";

interface ConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsent: () => void;
}

export default function ConsentModal({
  isOpen,
  onClose,
  onConsent,
}: ConsentModalProps) {
  const [consent, setConsent] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const handleStart = () => {
    if (consent) {
      saveConsent();
      setConsent(false);
      onConsent();
      router.push(ROUTES.INPUT);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Get Started?
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
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

        {/* Important to Know */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-amber-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">
                Important to Know
              </h3>
              <ul className="text-sm text-amber-800 leading-relaxed space-y-3 list-disc list-inside">
                <li>
                  TriageX does not provide a diagnosis. It offers level-of-care
                  recommendations based on your input.
                </li>
                <li>
                  If uncertain, TriageX always recommends the higher level of
                  care.
                </li>
                <li>
                  If your symptoms worsen or become severe, call emergency
                  services (112) immediately.
                </li>
                <li>
                  The tool supports, but does not replace, professional medical
                  judgment.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Consent Checkbox and Button Group */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex items-start space-x-4 flex-1">
            <input
              type="checkbox"
              id="consent-modal"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-6 w-6 text-primary-DEFAULT border-triageCard-border rounded focus:ring-primary-DEFAULT cursor-pointer hover:border-primary-DEFAULT hover:ring-2 hover:ring-primary-soft transition-all duration-200"
            />
            <label
              htmlFor="consent-modal"
              className="text-base text-gray-700 cursor-pointer"
            >
              I have read and understand the information above. I consent to
              using TriageX for triage assessment.
            </label>
          </div>

          {/* Start Button */}
          <Button
            onClick={handleStart}
            disabled={!consent}
            variant={consent ? "primary" : "disabled"}
            size="lg"
            className="w-full sm:w-auto"
          >
            Start Check
          </Button>
        </div>
      </div>
    </div>
  );
}
