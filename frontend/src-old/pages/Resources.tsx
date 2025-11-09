import React from "react";
import { Link, useNavigate } from "react-router-dom";

const resourceSections = [
  {
    title: "Implementation Guides",
    links: [
      {
        label: "Quick start for clinical teams",
        description:
          "Embed TriageX into a digital front door in under two hours.",
      },
      {
        label: "API & Integration Cheatsheet",
        description:
          "Overview of REST endpoints, payload examples, and auth options.",
      },
      {
        label: "MDR alignment checklist",
        description:
          "Documentation package to support EU MDR Class I compliance reviews.",
      },
    ],
  },
  {
    title: "Product Sheets",
    links: [
      {
        label: "Investor one-pager",
        description:
          "Snapshot of the AI model, triage logic, and traction metrics.",
      },
      {
        label: "Clinical workflow poster",
        description: "Printable flow for waiting rooms and nurse triage hubs.",
      },
      {
        label: "Design system tokens",
        description:
          "Color, typography, and interaction tokens for brand teams.",
      },
    ],
  },
  {
    title: "Thought Leadership",
    links: [
      {
        label: "AI triage in hybrid care",
        description:
          "Whitepaper on reducing wait times across virtual and in-person visits.",
      },
      {
        label: "Designing for health literacy",
        description:
          "UX patterns that improve comprehension for at-home triage.",
      },
      {
        label: "Safety-first AI governance",
        description:
          "Playbook for monitoring model drift and setting escalation rules.",
      },
    ],
  },
];

const Resources: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-DEFAULT">
      <section
        className="max-w-6xl mx-auto px-6 py-16 md:py-24"
        style={{
          background: "linear-gradient(180deg, #ECFDF5 0%, #FFFFFF 65%)",
        }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
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

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary">
              Resources to launch and scale your triage experience
            </h1>
            <p className="text-lg text-textSecondary">
              Downloadable guides, checklists, and enablement assets to help
              clinical innovators, product teams, and compliance leads bring
              TriageX to life.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid gap-10 md:grid-cols-3">
        {resourceSections.map((section) => (
          <div
            key={section.title}
            className="bg-white border-2 border-triageCard-border rounded-2xl p-6 shadow-sm space-y-5 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-textPrimary">
                {section.title}
              </h2>
              <p className="text-sm text-textSecondary">
                Curated assets to inform stakeholders and maintain quality
                assurance.
              </p>
            </div>
            <div className="space-y-4">
              {section.links.map((link) => (
                <button
                  key={link.label}
                  className="w-full text-left bg-background-light border border-triageCard-border rounded-xl px-4 py-4 hover:border-primary-DEFAULT hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200"
                >
                  <p className="font-semibold text-textPrimary">{link.label}</p>
                  <p className="text-sm text-textSecondary mt-1">
                    {link.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resources;
