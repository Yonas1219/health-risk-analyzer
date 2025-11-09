import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background-DEFAULT">
      <section
        className="max-w-5xl mx-auto px-6 py-16 md:py-24"
        style={{
          background: "linear-gradient(200deg, #ECFDF5 0%, #FFFFFF 70%)",
        }}
      >
        <div className="flex items-center justify-between mb-10">
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
            Speak with the TriageX team
          </h1>
          <p className="text-lg text-textSecondary">
            Whether you're a clinician validating AI triage logic or a product
            leader planning a pilot, we'd love to hear from you. Share a few
            details and a member of our team will reach out within one business
            day.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-white border-2 border-triageCard-border rounded-2xl p-8 shadow-sm">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-textPrimary text-sm font-medium">
                Full name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jordan Carter"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary-soft transition-all duration-200"
                />
              </label>
              <label className="flex flex-col gap-2 text-textPrimary text-sm font-medium">
                Organization
                <input
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Northwind Health"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary-soft transition-all duration-200"
                />
              </label>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-textPrimary text-sm font-medium">
                Work email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary-soft transition-all duration-200"
                />
              </label>
              <label className="flex flex-col gap-2 text-textPrimary text-sm font-medium">
                Primary topic
                <select
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary-soft transition-all duration-200"
                >
                  <option value="">Select a topic</option>
                  <option value="pilot">Clinical pilot</option>
                  <option value="integration">Integration & API</option>
                  <option value="investment">Investor inquiry</option>
                  <option value="press">Media & press</option>
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-2 text-textPrimary text-sm font-medium">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Share your goals, timelines, and any questions."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary-soft transition-all duration-200"
              />
            </label>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-textSecondary">
                By submitting, you agree to TriageX keeping you updated about
                clinical pilots, product news, and compliance resources.
              </p>
              <button
                type="button"
                onClick={() => navigate("/results")}
                className="bg-primary-DEFAULT text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                style={{ backgroundColor: "#10B981" }}
              >
                Submit & View Demo Results
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
