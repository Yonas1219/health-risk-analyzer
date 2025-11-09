import React, { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";

const Landing: React.FC = () => {
  const [consent, setConsent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    if (consent) {
      navigate("/input");
    }
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
                className="text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-1 transition-all duration-200 cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-1 transition-all duration-200 cursor-pointer"
              >
                How It Works
              </button>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-1 transition-all duration-200 cursor-pointer"
              >
                About
              </Link>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-1 transition-all duration-200 cursor-pointer"
              >
                Resources
              </Link>
            </nav>

            {/* Right Side - Language & CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageToggle />
              <button
                onClick={() => navigate("/input")}
                className="bg-primary-DEFAULT text-white px-3 sm:px-4 py-2 rounded-lg font-medium shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer text-sm sm:text-base"
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
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-2 transition-all duration-200 cursor-pointer"
                >
                  About
                </Link>
                <Link
                  to="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-gray-700 hover:text-primary-DEFAULT hover:font-medium focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-2 transition-all duration-200 cursor-pointer"
                >
                  Resources
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section - Clean Design Matching Figma */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 leading-tight">
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
            <p className="text-base sm:text-lg md:text-xl text-textSecondary mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              TriageX is an AI-powered digital triage system that helps you
              determine the most appropriate level of medical care — quickly,
              safely, and with confidence.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/input")}
                className="bg-primary-DEFAULT text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                style={{ backgroundColor: "#10B981" }}
              >
                Start Assessment
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
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">
                Precision AI
              </h3>
              <p className="text-textSecondary text-left">
                Our advanced AI engine analyzes symptoms, vital signs, and
                individual risk factors to provide the most accurate care
                recommendations aligned with medical best practices.
              </p>
            </div>

            {/* Feature 2: 24/7 Availability */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">
                24/7 Availability
              </h3>
              <p className="text-textSecondary text-left">
                Get instant guidance anytime, anywhere. TriageX operates around
                the clock to help you understand how urgent your condition is
                and where to seek the right care.
              </p>
            </div>

            {/* Feature 3: Professional and Evidence-Based */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">
                Professional and Evidence-Based
              </h3>
              <p className="text-textSecondary text-left">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-textPrimary mb-2">
                Describe Your Symptoms
              </h3>
              <p className="text-textSecondary text-left">
                Enter your symptoms and key vital parameters (temperature, heart
                rate, duration).
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-textPrimary mb-2">
                AI Analysis
              </h3>
              <p className="text-textSecondary text-left">
                Our AI analyzes your input through the unique TriageX Four-Step
                Model.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-textPrimary mb-2">
                Get Recommendations
              </h3>
              <p className="text-textSecondary text-left">
                Receive clear, color-coded recommendations on your level of care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four-Step Model Section */}
      <section id="four-step-model" className="bg-white py-12 sm:py-16 md:py-20">
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
            <div className="bg-triageCard-selfCare border-l-4 border-primary-DEFAULT p-6 rounded-r-lg">
              <div className="w-12 h-12 bg-primary-DEFAULT rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-bold text-primary-DEFAULT mb-2 text-center">Self-Care</h3>
              <p className="text-sm text-textSecondary text-center">
                Mild symptoms, safe to monitor at home.
              </p>
            </div>

            {/* Primary Care Card */}
            <div className="bg-triageCard-primaryCare border-l-4 border-warning-DEFAULT p-6 rounded-r-lg">
              <div className="w-12 h-12 bg-warning-DEFAULT rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-bold text-warning-DEFAULT mb-2 text-center">Primary Care</h3>
              <p className="text-sm text-textSecondary text-center">
                Non-urgent, see a doctor if symptoms persist.
              </p>
            </div>

            {/* Semi-Emergency Card */}
            <div className="bg-triageCard-semiEmergency border-l-4 border-risk-DEFAULT p-6 rounded-r-lg">
              <div className="w-12 h-12 bg-risk-DEFAULT rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-bold text-risk-DEFAULT mb-2 text-center">Semi-Emergency</h3>
              <p className="text-sm text-textSecondary text-center">
                Possible risk – seek care within hours.
              </p>
            </div>

            {/* Emergency Card */}
            <div className="bg-triageCard-emergency border-l-4 border-critical-DEFAULT p-6 rounded-r-lg">
              <div className="w-12 h-12 bg-critical-DEFAULT rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-bold text-critical-DEFAULT mb-2 text-center">Emergency</h3>
              <p className="text-sm text-textSecondary text-center">
                Critical – seek medical attention immediately.
              </p>
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
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-6">
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
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    Important to Know
                  </h3>
                  <ul className="text-sm text-amber-800 leading-relaxed space-y-2 list-disc list-inside">
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

            {/* Consent Checkbox */}
            <div className="flex items-start space-x-4 mb-6">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-6 w-6 text-primary-DEFAULT border-gray-300 rounded focus:ring-primary-DEFAULT cursor-pointer"
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
              className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 border-2 ${
                consent
                  ? "bg-primary-DEFAULT text-white shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 cursor-pointer transition-all duration-200"
                  : "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
              }`}
              style={consent ? { backgroundColor: "#10B981" } : {}}
            >
              Start Check
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    to="/input"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Symptom Checker / Triage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    to="/resources"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Research Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>ISO 27001:2017</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>ISO 13485:2016</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-primary-light">
                TriageX
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer text-sm"
              >
                Cookies Policy
              </a>
              <span className="text-gray-600 text-sm">© TriageX 2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
