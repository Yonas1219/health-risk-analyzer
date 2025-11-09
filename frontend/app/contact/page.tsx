"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LanguageToggle from "../components/LanguageToggle";
import Footer from "../components/Footer";
import { ContactFormData, FormErrors } from "../types";
import { ROUTES } from "../constants";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import { handleStartAssessment } from "../lib/utils/consent";

export default function Contact() {
  const handleStartClick = () => {
    handleStartAssessment(router, ROUTES.HOME);
  };
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "Jordan Carter",
    workEmail: "",
    organization: "Northwind Health",
    primaryTopic: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Organization is required";
    }

    if (!formData.primaryTopic) {
      newErrors.primaryTopic = "Please select a primary topic";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (placeholder - to be implemented)
      console.log("Form submitted:", formData);
      // Navigate to results page after submission
      router.push(ROUTES.RESULTS);
    }
  };

  return (
    <div className="min-h-screen bg-background-DEFAULT">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={ROUTES.HOME}
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
              Back to Homepage
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="primary" size="sm" onClick={handleStartClick}>
                Start Assessment
              </Button>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Heading Section */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Speak with the TriageX team
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're a clinician validating AI triage logic or a product
            leader planning a pilot, we'd love to hear from you. Share a few
            details and a member of our team will reach out within one business
            day.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                    errors.fullName
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-triageCard-border hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-soft"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label
                  htmlFor="workEmail"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Work email
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                    errors.workEmail
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-triageCard-border hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-soft"
                  }`}
                  placeholder="name@company.com"
                />
                {errors.workEmail && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.workEmail}
                  </p>
                )}
              </div>

              {/* Organization */}
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                    errors.organization
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-triageCard-border hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-soft"
                  }`}
                  placeholder="Enter your organization"
                />
                {errors.organization && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.organization}
                  </p>
                )}
              </div>

              {/* Primary Topic */}
              <div>
                <label
                  htmlFor="primaryTopic"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Primary topic
                </label>
                <select
                  id="primaryTopic"
                  name="primaryTopic"
                  value={formData.primaryTopic}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 bg-white ${
                    errors.primaryTopic
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-triageCard-border hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-soft"
                  }`}
                >
                  <option value="">Select a topic</option>
                  <option value="clinical-pilot">Clinical Pilot</option>
                  <option value="product-integration">
                    Product Integration
                  </option>
                  <option value="compliance">Compliance & Regulations</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </select>
                {errors.primaryTopic && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.primaryTopic}
                  </p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 resize-none ${
                  errors.message
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-gray-200 hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-soft"
                }`}
                placeholder="Share your goals, timelines, and any questions."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Disclaimer and Submit Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                By submitting, you agree to TriageX keeping you updated about
                clinical pilots, product news, and compliance resources.
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto h-12 flex items-center justify-center px-8 rounded-xl font-semibold text-lg text-white bg-primary-DEFAULT shadow-md hover:bg-primary-dark hover:scale-[1.03] active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                style={{ backgroundColor: "#10B981" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
