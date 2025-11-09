"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LanguageToggle from "../components/LanguageToggle";
import Footer from "../components/Footer";
import { ROUTES } from "../constants";
import Button from "../components/ui/Button";
import { handleStartAssessment } from "../lib/utils/consent";

export default function About() {
  const router = useRouter();

  const handleStartClick = () => {
    handleStartAssessment(router, ROUTES.HOME);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Link and CTA */}
      <div className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={ROUTES.HOME}
              className="text-gray-600 hover:text-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-1 transition-all duration-200 inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
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
              <button
                onClick={handleStartClick}
                className="bg-primary-DEFAULT text-white px-4 sm:px-6 py-2 rounded-xl font-medium shadow-md hover:bg-primary-dark hover:scale-[1.03] active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                style={{ backgroundColor: "#10B981" }}
              >
                Start Assessment
              </button>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-soft to-white py-16 sm:py-20 md:py-24 lg:py-32 pb-20 sm:pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary mb-8 sm:mb-10 leading-tight">
              About TriageX
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-textSecondary leading-relaxed">
              We're building the future of healthcare triage through AI-powered
              decision support that helps patients find the right level of care
              at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Mission Card */}
            <div className="bg-white rounded-lg p-8 border border-triageCard-border shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 rounded-full bg-primary-soft flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-primary-DEFAULT"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-4 text-center">
                Our Mission
              </h2>
              <p className="text-textSecondary text-center leading-relaxed">
                To make healthcare triage accessible, accurate, and safe for
                everyone. We combine advanced AI with evidence-based medical
                logic to help patients understand their symptoms and navigate to
                the appropriate level of care.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-lg p-8 border border-triageCard-border shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 rounded-full bg-primary-soft flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-primary-DEFAULT"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-4 text-center">
                Our Vision
              </h2>
              <p className="text-textSecondary text-center leading-relaxed">
                A world where every patient receives timely, appropriate care
                guidance. We envision a healthcare system where AI-powered
                triage reduces wait times, improves outcomes, and empowers
                patients to make informed decisions about their health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background-DEFAULT py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-4">
              Our Team
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              TriageX is built by a diverse team of clinicians, data scientists,
              engineers, and healthcare innovators who share a commitment to
              improving patient outcomes through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Team Card 1 */}
            <div className="bg-white rounded-lg p-6 border border-triageCard-border shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-20 h-20 rounded-full bg-primary-soft mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-primary-DEFAULT"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">
                Clinical Excellence
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                Our clinical team brings decades of experience in emergency
                medicine, primary care, and triage protocols to ensure our AI
                models align with medical best practices.
              </p>
            </div>

            {/* Team Card 2 */}
            <div className="bg-white rounded-lg p-6 border border-triageCard-border shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-20 h-20 rounded-full bg-primary-soft mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-primary-DEFAULT"
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
              <h3 className="text-xl font-bold text-textPrimary mb-2">
                AI Innovation
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                Our data science and engineering teams develop cutting-edge AI
                models that learn from real-world triage data while maintaining
                safety and interpretability.
              </p>
            </div>

            {/* Team Card 3 */}
            <div className="bg-white rounded-lg p-6 border border-triageCard-border shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-20 h-20 rounded-full bg-primary-soft mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-primary-DEFAULT"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">
                Healthcare Impact
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                We work closely with healthcare organizations, product teams,
                and compliance leaders to ensure TriageX integrates seamlessly
                into existing workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Trust Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-6">
          <div className="bg-primary-soft/30 rounded-2xl p-8 md:p-12 border border-triageCard-border">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-6">
                Compliance & Trust
              </h2>
              <p className="text-lg text-textSecondary mb-8 leading-relaxed">
                TriageX is designed with regulatory compliance and patient
                safety at its core. We maintain the highest standards for data
                privacy, security, and medical device regulations.
              </p>

              {/* Compliance Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <div className="bg-white rounded-lg px-6 py-4 border border-triageCard-border shadow-sm">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-primary-DEFAULT"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <div className="text-left">
                      <p className="font-semibold text-textPrimary text-sm">
                        HIPAA Compliant
                      </p>
                      <p className="text-textSecondary text-xs">
                        Protected health information
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg px-6 py-4 border border-triageCard-border shadow-sm">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-primary-DEFAULT"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <div className="text-left">
                      <p className="font-semibold text-textPrimary text-sm">
                        GDPR Ready
                      </p>
                      <p className="text-textSecondary text-xs">
                        EU data protection
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg px-6 py-4 border border-triageCard-border shadow-sm">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-primary-DEFAULT"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="text-left">
                      <p className="font-semibold text-textPrimary text-sm">
                        ISO 27001
                      </p>
                      <p className="text-textSecondary text-xs">
                        Information security
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg px-6 py-4 border border-triageCard-border shadow-sm">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-primary-DEFAULT"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <div className="text-left">
                      <p className="font-semibold text-textPrimary text-sm">
                        MDR Class I
                      </p>
                      <p className="text-textSecondary text-xs">
                        Medical device ready
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-textSecondary leading-relaxed">
                Our platform undergoes regular security audits, compliance
                reviews, and clinical validation to ensure we meet the highest
                standards for healthcare technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-DEFAULT py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-textSecondary mb-8 leading-relaxed">
            Experience TriageX for yourself or reach out to learn how we can
            help your organization improve patient triage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleStartClick}
              className="bg-primary-DEFAULT text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-md hover:bg-primary-dark hover:scale-[1.03] active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer w-full sm:w-auto"
              style={{ backgroundColor: "#10B981" }}
            >
              Start Assessment
            </button>
            <Link
              href={ROUTES.CONTACT}
              className="bg-white text-primary-DEFAULT border-2 border-primary-DEFAULT px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-sm hover:bg-primary-soft hover:scale-[1.03] active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer w-full sm:w-auto text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
