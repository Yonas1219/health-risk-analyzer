import React from "react";
import { Link, useNavigate } from "react-router-dom";

const testimonials = [
  {
    quote:
      "TriageX helped our virtual clinic triage patients accurately within minutes. The green-yellow-red system is incredibly intuitive for our nurses.",
    name: "Laura S.",
    title: "Director of Telehealth, CalmCare Clinics",
  },
  {
    quote:
      "The combination of AI and clear medical logic makes it easy to communicate care levels to patients and care teams alike.",
    name: "Dr. Marcus Ortega",
    title: "Chief Medical Officer, HealthFoundry",
  },
  {
    quote:
      "We rely on TriageX's four-step model to prioritize inbound cases and reduce wait times for urgent care appointments.",
    name: "Priya N.",
    title: "Patient Experience Lead, Northwind Health",
  },
];

const Testimonials: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-DEFAULT">
      <section
        className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #ECFDF5, #FFFFFF)" }}
      >
        <div className="absolute inset-0 opacity-20">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1200 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,320 Q360,200 720,320 T1200,320 L1200,600 L0,600 Z"
              fill="url(#testimonials-wave1)"
            />
            <defs>
              <linearGradient
                id="testimonials-wave1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#A3E635" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 text-center space-y-6">
          <Link
            to="/"
            className="inline-block text-sm font-medium text-primary-DEFAULT hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 rounded-md px-3 py-1 transition"
          >
            ← Back to Homepage
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary">
            Trusted by patient-first health teams
          </h1>
          <p className="text-textSecondary max-w-3xl mx-auto">
            Real-world feedback from care teams using TriageX to deliver safe,
            timely, and evidence-based triage decisions.
          </p>
          <button
            onClick={() => navigate("/input")}
            className="bg-primary-DEFAULT text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
            style={{ backgroundColor: "#10B981" }}
          >
            Start Assessment
          </button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white border-2 border-triageCard-border rounded-2xl p-6 shadow-sm hover:-translate-y-1 transition-all duration-200"
            >
              <p className="text-textSecondary italic mb-6">
                “{testimonial.quote}”
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-textPrimary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-textSecondary">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
