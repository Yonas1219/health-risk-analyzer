import React from "react";
import { Link, useNavigate } from "react-router-dom";

const pillars = [
  {
    title: "Evidence-Based AI",
    description:
      "We combine established international triage frameworks like RETTS and ESI with explainable AI insights so care teams can trust every recommendation.",
  },
  {
    title: "Patient-Centered Design",
    description:
      "Every flow is crafted for clarity, accessibility, and reassurance. From multilingual support to plain-language messaging, TriageX meets patients where they are.",
  },
  {
    title: "Compliance & Governance",
    description:
      "Built with MDR-aligned guardrails, transparent logging, and consent-first data handling to support regulatory compliance from day one.",
  },
];

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-DEFAULT">
      <section
        className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col gap-8"
        style={{
          background: "linear-gradient(160deg, #ECFDF5 0%, #FFFFFF 100%)",
        }}
      >
        <div className="flex justify-between items-start">
          <Link
            to="/"
            className="text-sm font-medium text-primary-DEFAULT hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-1 transition"
          >
            ← Back to Homepage
          </Link>
          <button
            onClick={() => navigate("/input")}
            className="bg-primary-DEFAULT text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
            style={{ backgroundColor: "#10B981" }}
          >
            Start Assessment
          </button>
        </div>

        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary">
            TriageX is redefining digital triage
          </h1>
          <p className="text-lg text-textSecondary">
            We are a clinical and product team focused on delivering the most
            trusted, investor-ready triage experience. Our platform blends
            clinician expertise, AI transparency, and a design system tailored
            for healthcare organizations.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="bg-white border-2 border-triageCard-border rounded-2xl p-6 shadow-sm space-y-3 hover:-translate-y-1 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold text-textPrimary">
              {pillar.title}
            </h2>
            <p className="text-textSecondary">{pillar.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-white border-t border-triageCard-border">
        <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Clinical roadmap
            </h2>
            <ul className="list-disc list-inside text-textSecondary space-y-2">
              <li>
                Multi-language support with culturally-aware health guidance
              </li>
              <li>Integrations with EHR platforms and telehealth tools</li>
              <li>Audit-ready risk scoring with clinician override controls</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Design & product principles
            </h2>
            <ul className="list-disc list-inside text-textSecondary space-y-2">
              <li>
                Clarity before complexity—every screen serves a clinical
                decision
              </li>
              <li>
                Responsive, mobile-first layouts optimized for patient
                accessibility
              </li>
              <li>Ethical AI commitments with continuous quality monitoring</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
