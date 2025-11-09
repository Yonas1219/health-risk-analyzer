"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "../components/Footer";
import { ROUTES } from "../constants";
import Button from "../components/ui/Button";
import { handleStartAssessment } from "../lib/utils/consent";

export default function Resources() {
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
            <button
              onClick={handleStartClick}
              className="bg-primary-DEFAULT text-white px-4 sm:px-6 py-2 rounded-xl font-medium shadow-md hover:bg-primary-dark hover:scale-[1.03] active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: "#10B981" }}
            >
              Start Assessment
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-soft to-white py-16 sm:py-20 md:py-24 lg:py-32 pb-20 sm:pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary mb-8 sm:mb-10 leading-tight">
              Resources to launch and scale your triage experience
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-textSecondary leading-relaxed">
              Downloadable guides, checklists, and enablement assets to help
              clinical innovators, product teams, and compliance leads bring
              TriageX to life.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {/* Column 1: Implementation Guides */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-4">
                Implementation Guides
              </h2>
              <p className="text-textSecondary mb-8 text-sm sm:text-base">
                Curated assets to inform stakeholders and maintain quality
                assurance.
              </p>
              <div className="space-y-4">
                {/* Resource Card 1 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-triageCard-border hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-semibold text-textPrimary mb-2 text-base sm:text-lg">
                    Quick start for clinical teams
                  </h3>
                  <p className="text-textSecondary text-sm sm:text-base">
                    Embed TriageX into a digital front door in under two hours.
                  </p>
                </div>

                {/* Resource Card 2 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-triageCard-border hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-semibold text-textPrimary mb-2 text-base sm:text-lg">
                    API & Integration Cheatsheet
                  </h3>
                  <p className="text-textSecondary text-sm sm:text-base">
                    Overview of REST endpoints, payload examples, and auth
                    options.
                  </p>
                </div>

                {/* Resource Card 3 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-triageCard-border hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-semibold text-textPrimary mb-2 text-base sm:text-lg">
                    MDR alignment checklist
                  </h3>
                  <p className="text-textSecondary text-sm sm:text-base">
                    Documentation package to support EU MDR Class I compliance
                    reviews.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Product Sheets */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-4">
                Product Sheets
              </h2>
              <p className="text-textSecondary mb-8 text-sm sm:text-base">
                Curated assets to inform stakeholders and maintain quality
                assurance.
              </p>
              <div className="space-y-4">
                {/* Resource Card 1 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-triageCard-border hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-semibold text-textPrimary mb-2 text-base sm:text-lg">
                    Investor one-pager
                  </h3>
                  <p className="text-textSecondary text-sm sm:text-base">
                    Snapshot of the AI model, triage logic, and traction
                    metrics.
                  </p>
                </div>

                {/* Resource Card 2 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-triageCard-border hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-semibold text-textPrimary mb-2 text-base sm:text-lg">
                    Clinical workflow poster
                  </h3>
                  <p className="text-textSecondary text-sm sm:text-base">
                    Printable flow for waiting rooms and nurse triage hubs.
                  </p>
                </div>

                {/* Resource Card 3 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-triageCard-border hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-semibold text-textPrimary mb-2 text-base sm:text-lg">
                    Design system tokens
                  </h3>
                  <p className="text-textSecondary text-sm sm:text-base">
                    Color, typography, and interaction tokens for brand teams.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Thought Leadership */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-4">
                Thought Leadership
              </h2>
              <p className="text-textSecondary mb-8 text-sm sm:text-base">
                Curated assets to inform stakeholders and maintain quality
                assurance.
              </p>
              <div className="space-y-4">
                {/* Resource Card 1 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-triageCard-border hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-semibold text-textPrimary mb-2 text-base sm:text-lg">
                    AI triage in hybrid care
                  </h3>
                  <p className="text-textSecondary text-sm sm:text-base">
                    Whitepaper on reducing wait times across virtual and
                    in-person visits.
                  </p>
                </div>

                {/* Resource Card 2 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-triageCard-border hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-semibold text-textPrimary mb-2 text-base sm:text-lg">
                    Designing for health literacy
                  </h3>
                  <p className="text-textSecondary text-sm sm:text-base">
                    UX patterns that improve comprehension for at-home triage.
                  </p>
                </div>

                {/* Resource Card 3 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-triageCard-border hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-semibold text-textPrimary mb-2 text-base sm:text-lg">
                    Safety-first AI governance
                  </h3>
                  <p className="text-textSecondary text-sm sm:text-base">
                    Playbook for monitoring model drift and setting escalation
                    rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
