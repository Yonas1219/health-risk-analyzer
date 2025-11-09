"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Testimonials() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Homepage Link */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/"
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
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-soft to-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Decorative Background Shape */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-green-50 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 leading-tight">
              Trusted by patient-first health teams
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-textSecondary mb-8 max-w-3xl mx-auto leading-relaxed">
              Real-world feedback from care teams using TriageX to deliver safe,
              timely, and evidence-based triage decisions.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                onClick={() => router.push("/input")}
                className="bg-primary-DEFAULT text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-md hover:bg-primary-dark hover:scale-[1.03] active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                style={{ backgroundColor: "#10B981" }}
              >
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

      <Footer />
    </div>
  );
}
