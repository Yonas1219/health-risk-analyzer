"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LanguageToggle from "./components/LanguageToggle";
import Footer from "./components/Footer";
import { ROUTES } from "./constants";
import Button from "./components/ui/Button";
import { saveConsent, handleStartAssessment } from "./lib/utils/consent";

export default function Home() {
  const [consent, setConsent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleStart = () => {
    if (consent) {
      saveConsent();
      router.push(ROUTES.INPUT);
    }
  };

  const handleStartAssessmentClick = () => {
    handleStartAssessment(router, ROUTES.HOME);
  };

  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background-DEFAULT">
      {/* Header with Navigation */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-primary-DEFAULT">
                TriageX
              </span>
            </div>

            {/* Desktop Navigation Links - Centered */}
            <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-1 transition-all duration-200 cursor-pointer relative group"
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-DEFAULT transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-1 transition-all duration-200 cursor-pointer relative group"
              >
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-DEFAULT transition-all duration-200 group-hover:w-full"></span>
              </button>
              <Link
                href={ROUTES.ABOUT}
                className="text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-1 transition-all duration-200 cursor-pointer relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-DEFAULT transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                href={ROUTES.RESOURCES}
                className="text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-1 transition-all duration-200 cursor-pointer relative group"
              >
                Resources
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-DEFAULT transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                href={ROUTES.CONTACT}
                className="text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-1 transition-all duration-200 cursor-pointer relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-DEFAULT transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Right Side - Language & CTA */}
            <div className="flex items-center gap-4 sm:gap-5">
              <LanguageToggle />
              <button
                onClick={handleStartAssessmentClick}
                className="bg-primary-DEFAULT text-white px-3 sm:px-4 py-2 rounded-xl font-medium shadow-md hover:bg-primary-dark hover:scale-[1.03] active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer text-sm sm:text-base"
                style={{ backgroundColor: "#10B981" }}
              >
                <span className="hidden sm:inline">Start Assessment</span>
                <span className="sm:hidden">Start</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden ml-2 p-2 text-gray-700 hover:text-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md transition-all duration-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
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
                ) : (
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    scrollToSection("features");
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-2 transition-all duration-200 cursor-pointer"
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    scrollToSection("how-it-works");
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-2 transition-all duration-200 cursor-pointer"
                >
                  How It Works
                </button>
                <Link
                  href={ROUTES.ABOUT}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-2 transition-all duration-200 cursor-pointer"
                >
                  About
                </Link>
                <Link
                  href={ROUTES.RESOURCES}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-2 transition-all duration-200 cursor-pointer"
                >
                  Resources
                </Link>
                <Link
                  href={ROUTES.CONTACT}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-2 transition-all duration-200 cursor-pointer"
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section - Clean Design Matching Figma */}
      <section className="relative bg-gradient-to-b from-primary-soft to-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 leading-tight sm:leading-tight md:leading-tight">
              Accurate and efficient care with our{" "}
              <span className="text-primary-DEFAULT relative">
                symptom checker
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-DEFAULT opacity-50"></span>
              </span>{" "}
              and{" "}
              <span className="text-primary-DEFAULT relative">
                virtual triage
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-DEFAULT opacity-50"></span>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-textSecondary mb-8 max-w-3xl mx-auto leading-relaxed sm:leading-relaxed px-4">
              TriageX is an AI-powered digital triage system that helps you
              determine the most appropriate level of medical care — quickly,
              safely, and with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleStartAssessmentClick}
                className="bg-primary-DEFAULT text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-md hover:bg-primary-dark hover:scale-[1.03] active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                style={{ backgroundColor: "#10B981" }}
              >
                Start Assessment
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="bg-white text-primary-DEFAULT border-2 border-primary-DEFAULT px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-sm hover:bg-primary-soft hover:scale-[1.03] active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
              >
                Learn How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-textPrimary mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1: Precision AI */}
            <div className="text-center bg-white rounded-lg p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 border border-triageCard-border">
              <div className="w-20 h-20 mx-auto flex items-center justify-center mb-4">
                <svg
                  className="w-20 h-20 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">
                Precision AI
              </h3>
              <p className="text-textSecondary text-center">
                Our advanced AI engine analyzes symptoms, vital signs, and
                individual risk factors to provide the most accurate care
                recommendations aligned with medical best practices.
              </p>
            </div>

            {/* Feature 2: 24/7 Availability */}
            <div className="text-center bg-primary-soft/30 rounded-lg p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 border border-triageCard-border">
              <div className="w-20 h-20 mx-auto flex items-center justify-center mb-4">
                <svg
                  className="w-20 h-20 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">
                24/7 Availability
              </h3>
              <p className="text-textSecondary text-center">
                Get instant guidance anytime, anywhere. TriageX operates around
                the clock to help you understand how urgent your condition is
                and where to seek the right care.
              </p>
            </div>

            {/* Feature 3: Professional and Evidence-Based */}
            <div className="text-center bg-white rounded-lg p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 border border-triageCard-border">
              <div className="w-20 h-20 mx-auto flex items-center justify-center mb-4">
                <svg
                  className="w-20 h-20 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">
                Professional and Evidence-Based
              </h3>
              <p className="text-textSecondary text-center">
                Every recommendation follows medical triage logic ensuring a
                patient-centered, safety-first approach at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="bg-background-DEFAULT py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-textPrimary mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 border-t-2 border-dashed border-primary-DEFAULT opacity-30"></div>

            <div className="text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-primary-DEFAULT text-primary-DEFAULT font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">
                Describe Your Symptoms
              </h3>
              <p className="text-textSecondary text-center">
                Enter your symptoms and key vital parameters (temperature, heart
                rate, duration).
              </p>
            </div>
            <div className="text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-primary-DEFAULT text-primary-DEFAULT font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">
                AI Analysis
              </h3>
              <p className="text-textSecondary text-center">
                Our AI analyzes your input through the unique TriageX Four-Step
                Model.
              </p>
            </div>
            <div className="text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-primary-DEFAULT text-primary-DEFAULT font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">
                Get Recommendations
              </h3>
              <p className="text-textSecondary text-center">
                Receive clear, color-coded recommendations on your level of
                care.
              </p>
            </div>

            {/* CTA Button */}
            <div className="col-span-1 md:col-span-3 flex justify-center mt-8">
              <button
                onClick={handleStartAssessmentClick}
                className="bg-primary-DEFAULT text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-md hover:bg-primary-dark hover:scale-[1.03] active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                style={{ backgroundColor: "#10B981" }}
              >
                Start Your Check
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Four-Step Model Section */}
      <section
        id="four-step-model"
        className="bg-white py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-textPrimary mb-4">
            Our Unique Four-Step Model
          </h2>
          <p className="text-center text-textSecondary mb-12 max-w-3xl mx-auto">
            The TriageX Four-Step Model combines reported symptoms and vital
            parameters to deliver safe, simple, and precise guidance to the
            right level of care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Self-Care Card */}
            <div className="bg-triageCard-selfCare border-l-4 border-primary-DEFAULT p-6 rounded-r-lg relative shadow-md border border-triageCard-border text-center">
              <div
                className="w-16 h-16 rounded-full shadow-md mx-auto mb-4"
                style={{ backgroundColor: "#10B981" }}
              ></div>
              <h3 className="font-bold text-primary-DEFAULT mb-2 text-lg">
                Self-Care
              </h3>
              <p className="text-sm text-primary-DEFAULT">
                Mild symptoms, safe to monitor at home.
              </p>
            </div>

            {/* Primary Care Card */}
            <div className="bg-triageCard-primaryCare border-l-4 border-warning-DEFAULT p-6 rounded-r-lg relative shadow-md border border-triageCard-border text-center">
              <div
                className="w-16 h-16 rounded-full shadow-md mx-auto mb-4"
                style={{ backgroundColor: "#FACC15" }}
              ></div>
              <h3 className="font-bold text-warning-DEFAULT mb-2 text-lg">
                Primary Care
              </h3>
              <p className="text-sm text-warning-DEFAULT">
                Non-urgent, see a doctor if symptoms persist.
              </p>
            </div>

            {/* Semi-Emergency Card */}
            <div className="bg-triageCard-semiEmergency border-l-4 border-risk-DEFAULT p-6 rounded-r-lg relative shadow-md border border-triageCard-border text-center">
              <div
                className="w-16 h-16 rounded-full shadow-md mx-auto mb-4"
                style={{ backgroundColor: "#FB923C" }}
              ></div>
              <h3 className="font-bold text-risk-DEFAULT mb-2 text-lg">
                Semi-Emergency
              </h3>
              <p className="text-sm text-risk-DEFAULT">
                Possible risk – seek care within hours.
              </p>
            </div>

            {/* Emergency Card */}
            <div className="bg-triageCard-emergency border-l-4 border-critical-DEFAULT p-6 rounded-r-lg relative shadow-md border border-triageCard-border text-center">
              <div
                className="w-16 h-16 rounded-full shadow-md mx-auto mb-4"
                style={{ backgroundColor: "#EF4444" }}
              ></div>
              <h3 className="font-bold text-critical-DEFAULT mb-2 text-lg">
                Emergency
              </h3>
              <p className="text-sm text-critical-DEFAULT">
                Critical – seek medical attention immediately.
              </p>
            </div>
          </div>

          {/* More about this model link */}
          <div className="text-center mt-8">
            <button
              onClick={() => scrollToSection("consent-section")}
              className="text-primary-DEFAULT hover:text-primary-dark font-medium text-sm underline-offset-4 hover:underline transition-all duration-200"
            >
              More about this model →
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Decorative Background Shape */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-green-50 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Testimonials Hero */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary mb-6 leading-tight">
              Trusted by patient-first health teams
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-textSecondary leading-relaxed">
              Real-world feedback from care teams using TriageX to deliver safe,
              timely, and evidence-based triage decisions.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md border border-triageCard-border p-6 sm:p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-primary-DEFAULT mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="text-textSecondary text-base sm:text-lg leading-relaxed mb-6">
                "TriageX helped our virtual clinic triage patients accurately
                within minutes. The green-yellow-red system is incredibly
                intuitive for our nurses."
              </p>
              <div>
                <p className="font-bold text-textPrimary text-base sm:text-lg mb-1">
                  Laura S.
                </p>
                <p className="text-textSecondary text-sm sm:text-base">
                  Director of Telehealth, CalmCare Clinics
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md border border-triageCard-border p-6 sm:p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-primary-DEFAULT mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="text-textSecondary text-base sm:text-lg leading-relaxed mb-6">
                "The combination of AI and clear medical logic makes it easy to
                communicate care levels to patients and care teams alike."
              </p>
              <div>
                <p className="font-bold text-textPrimary text-base sm:text-lg mb-1">
                  Dr. Marcus Ortega
                </p>
                <p className="text-textSecondary text-sm sm:text-base">
                  Chief Medical Officer, HealthFoundry
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md border border-triageCard-border p-6 sm:p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-primary-DEFAULT mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="text-textSecondary text-base sm:text-lg leading-relaxed mb-6">
                "We rely on TriageX's four-step model to prioritize inbound
                cases and reduce wait times for urgent care appointments."
              </p>
              <div>
                <p className="font-bold text-textPrimary text-base sm:text-lg mb-1">
                  Priya N.
                </p>
                <p className="text-textSecondary text-sm sm:text-base">
                  Patient Experience Lead, Northwind Health
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consent Section */}
      <section
        id="consent-section"
        className="bg-background-DEFAULT py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Ready to Get Started?
            </h2>

            {/* Important to Know */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-8 rounded-r-lg mb-8">
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
                      TriageX does not provide a diagnosis. It offers
                      level-of-care recommendations based on your input.
                    </li>
                    <li>
                      If uncertain, TriageX always recommends the higher level
                      of care.
                    </li>
                    <li>
                      If your symptoms worsen or become severe, call emergency
                      services (112) immediately.
                    </li>
                    <li>
                      The tool supports, but does not replace, professional
                      medical judgment.
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
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-6 w-6 text-primary-DEFAULT border-triageCard-border rounded focus:ring-primary-DEFAULT cursor-pointer hover:border-primary-DEFAULT hover:ring-2 hover:ring-primary-soft transition-all duration-200"
                />
                <label
                  htmlFor="consent"
                  className="text-base text-gray-700 cursor-pointer"
                >
                  I have read and understand the information above. I consent to
                  using TriageX for triage assessment.
                </label>
              </div>

              {/* Start Button */}
              <button
                onClick={handleStart}
                disabled={!consent}
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border-2 ${
                  consent
                    ? "bg-primary-DEFAULT text-white shadow-lg hover:bg-primary-dark hover:scale-[1.03] hover:shadow-xl active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 cursor-pointer transition-all duration-200"
                    : "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
                }`}
                style={consent ? { backgroundColor: "#10B981" } : {}}
              >
                Start Check
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
