import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";

const StyleGuide: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-DEFAULT">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-xl font-semibold text-primary-light hover:text-primary-DEFAULT transition"
            >
              TriageX
            </Link>
            <div className="flex items-center gap-3 sm:gap-4">
              <LanguageToggle />
              <button
                onClick={() => navigate("/input")}
                className="bg-primary-DEFAULT text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                style={{ backgroundColor: "#10B981" }}
              >
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            TriageX Design System
          </h1>
          <p className="text-lg text-textSecondary">
            Complete style guide for buttons, colors, inputs, and cards used
            across the TriageX platform.
          </p>
        </div>

        {/* Colors Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-6 sm:mb-8">
            Colors
          </h2>

          {/* Primary Colors */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-xl font-semibold text-textPrimary mb-4">
              Primary Colors
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border-2 border-triageCard-border rounded-xl p-4 sm:p-6 shadow-sm">
                <div
                  className="w-full h-24 sm:h-32 rounded-lg mb-3"
                  style={{ backgroundColor: "#10B981" }}
                ></div>
                <p className="font-semibold text-textPrimary">Primary</p>
                <p className="text-sm text-textSecondary">#10B981</p>
                <p className="text-xs text-textSecondary mt-1">Brand Green</p>
              </div>
              <div className="bg-white border-2 border-triageCard-border rounded-xl p-4 sm:p-6 shadow-sm">
                <div
                  className="w-full h-24 sm:h-32 rounded-lg mb-3"
                  style={{ backgroundColor: "#059669" }}
                ></div>
                <p className="font-semibold text-textPrimary">Primary Dark</p>
                <p className="text-sm text-textSecondary">#059669</p>
                <p className="text-xs text-textSecondary mt-1">Hover States</p>
              </div>
              <div className="bg-white border-2 border-triageCard-border rounded-xl p-4 sm:p-6 shadow-sm">
                <div
                  className="w-full h-24 sm:h-32 rounded-lg mb-3"
                  style={{ backgroundColor: "#34D399" }}
                ></div>
                <p className="font-semibold text-textPrimary">Primary Light</p>
                <p className="text-sm text-textSecondary">#34D399</p>
                <p className="text-xs text-textSecondary mt-1">Light Emerald</p>
              </div>
              <div className="bg-white border-2 border-triageCard-border rounded-xl p-4 sm:p-6 shadow-sm">
                <div
                  className="w-full h-24 sm:h-32 rounded-lg mb-3"
                  style={{ backgroundColor: "#ECFDF5" }}
                ></div>
                <p className="font-semibold text-textPrimary">Primary Soft</p>
                <p className="text-sm text-textSecondary">#ECFDF5</p>
                <p className="text-xs text-textSecondary mt-1">
                  Background Tint
                </p>
              </div>
            </div>
          </div>

          {/* Triage Colors */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-xl font-semibold text-textPrimary mb-4">
              Triage Colors
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border-2 border-triageCard-border rounded-xl p-4 sm:p-6 shadow-sm">
                <div
                  className="w-full h-24 sm:h-32 rounded-lg mb-3"
                  style={{ backgroundColor: "#A3E635" }}
                ></div>
                <p className="font-semibold text-textPrimary">Self-Care</p>
                <p className="text-sm text-textSecondary">#A3E635</p>
                <p className="text-xs text-textSecondary mt-1">Lime Green</p>
              </div>
              <div className="bg-white border-2 border-triageCard-border rounded-xl p-4 sm:p-6 shadow-sm">
                <div
                  className="w-full h-24 sm:h-32 rounded-lg mb-3"
                  style={{ backgroundColor: "#FACC15" }}
                ></div>
                <p className="font-semibold text-textPrimary">Primary Care</p>
                <p className="text-sm text-textSecondary">#FACC15</p>
                <p className="text-xs text-textSecondary mt-1">Amber</p>
              </div>
              <div className="bg-white border-2 border-triageCard-border rounded-xl p-4 sm:p-6 shadow-sm">
                <div
                  className="w-full h-24 sm:h-32 rounded-lg mb-3"
                  style={{ backgroundColor: "#FB923C" }}
                ></div>
                <p className="font-semibold text-textPrimary">Semi-Emergency</p>
                <p className="text-sm text-textSecondary">#FB923C</p>
                <p className="text-xs text-textSecondary mt-1">Orange</p>
              </div>
              <div className="bg-white border-2 border-triageCard-border rounded-xl p-4 sm:p-6 shadow-sm">
                <div
                  className="w-full h-24 sm:h-32 rounded-lg mb-3"
                  style={{ backgroundColor: "#EF4444" }}
                ></div>
                <p className="font-semibold text-textPrimary">Emergency</p>
                <p className="text-sm text-textSecondary">#EF4444</p>
                <p className="text-xs text-textSecondary mt-1">Red</p>
              </div>
            </div>
          </div>

          {/* Neutral Colors */}
          <div>
            <h3 className="text-xl font-semibold text-textPrimary mb-4">
              Neutral Colors
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border-2 border-triageCard-border rounded-xl p-4 sm:p-6 shadow-sm">
                <div
                  className="w-full h-24 sm:h-32 rounded-lg mb-3 border-2 border-gray-200"
                  style={{ backgroundColor: "#F9FAFB" }}
                ></div>
                <p className="font-semibold text-textPrimary">Background</p>
                <p className="text-sm text-textSecondary">#F9FAFB</p>
                <p className="text-xs text-textSecondary mt-1">Soft White</p>
              </div>
              <div className="bg-white border-2 border-triageCard-border rounded-xl p-4 sm:p-6 shadow-sm">
                <div
                  className="w-full h-24 sm:h-32 rounded-lg mb-3"
                  style={{ backgroundColor: "#1E293B" }}
                ></div>
                <p className="font-semibold text-textPrimary text-white">
                  Text Primary
                </p>
                <p className="text-sm text-textSecondary">#1E293B</p>
                <p className="text-xs text-textSecondary mt-1">Slate</p>
              </div>
              <div className="bg-white border-2 border-triageCard-border rounded-xl p-4 sm:p-6 shadow-sm">
                <div
                  className="w-full h-24 sm:h-32 rounded-lg mb-3"
                  style={{ backgroundColor: "#64748B" }}
                ></div>
                <p className="font-semibold text-textPrimary">Text Secondary</p>
                <p className="text-sm text-textSecondary">#64748B</p>
                <p className="text-xs text-textSecondary mt-1">Gray</p>
              </div>
              <div className="bg-white border-2 border-triageCard-border rounded-xl p-4 sm:p-6 shadow-sm">
                <div
                  className="w-full h-24 sm:h-32 rounded-lg mb-3 border-2 border-gray-200"
                  style={{ backgroundColor: "#E2E8F0" }}
                ></div>
                <p className="font-semibold text-textPrimary">Border</p>
                <p className="text-sm text-textSecondary">#E2E8F0</p>
                <p className="text-xs text-textSecondary mt-1">
                  Unified Border
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-6 sm:mb-8">
            Buttons
          </h2>

          <div className="bg-white border-2 border-triageCard-border rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 sm:space-y-8">
            {/* Primary Button */}
            <div>
              <h3 className="text-lg font-semibold text-textPrimary mb-4">
                Primary Button
              </h3>
              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-primary-DEFAULT text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                  style={{ backgroundColor: "#10B981" }}
                >
                  Start Assessment
                </button>
                <button
                  className="bg-primary-DEFAULT text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                  style={{ backgroundColor: "#10B981" }}
                >
                  Large Button
                </button>
                <button
                  className="bg-primary-DEFAULT text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                  style={{ backgroundColor: "#10B981" }}
                >
                  Small Button
                </button>
              </div>
            </div>

            {/* Secondary Button */}
            <div>
              <h3 className="text-lg font-semibold text-textPrimary mb-4">
                Secondary Button
              </h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-primary-DEFAULT border-2 border-primary-DEFAULT px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-primary-soft hover:scale-105 active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer">
                  Learn More
                </button>
                <button className="bg-white text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-xl font-semibold shadow-md hover:border-gray-400 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all duration-200 cursor-pointer">
                  Cancel
                </button>
              </div>
            </div>

            {/* Disabled Button */}
            <div>
              <h3 className="text-lg font-semibold text-textPrimary mb-4">
                Disabled Button
              </h3>
              <button
                disabled
                className="bg-gray-300 text-gray-500 border-2 border-gray-300 px-6 py-3 rounded-xl font-semibold cursor-not-allowed"
              >
                Disabled
              </button>
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-6 sm:mb-8">
            Input Fields
          </h2>

          <div className="bg-white border-2 border-triageCard-border rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 sm:space-y-8">
            {/* Text Input */}
            <div>
              <h3 className="text-lg font-semibold text-textPrimary mb-4">
                Text Input
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-textPrimary mb-2">
                    Default
                  </label>
                  <input
                    type="text"
                    placeholder="Enter text..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary-soft transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-textPrimary mb-2">
                    Focused
                  </label>
                  <input
                    type="text"
                    value="Focused input"
                    className="w-full px-4 py-3 border-2 border-primary-DEFAULT rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-soft transition-all duration-200"
                    style={{ boxShadow: "0 0 0 3px rgba(16,185,129,0.3)" }}
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-textPrimary mb-2">
                    Error
                  </label>
                  <input
                    type="text"
                    value="Invalid input"
                    className="w-full px-4 py-3 border-2 border-red-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Textarea */}
            <div>
              <h3 className="text-lg font-semibold text-textPrimary mb-4">
                Textarea
              </h3>
              <textarea
                rows={4}
                placeholder="Describe your symptoms..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary-soft transition-all duration-200"
              />
            </div>

            {/* Select */}
            <div>
              <h3 className="text-lg font-semibold text-textPrimary mb-4">
                Select Dropdown
              </h3>
              <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white hover:border-primary-DEFAULT focus:border-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary-soft transition-all duration-200">
                <option>Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-6 sm:mb-8">
            Cards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Self-Care Card */}
            <div
              className="bg-white border-2 border-triageCard-border rounded-2xl p-4 sm:p-6 shadow-sm hover:-translate-y-1 transition-all duration-200"
              style={{ backgroundColor: "#D1FAE5" }}
            >
              <div className="text-3xl mb-3">🟢</div>
              <h3 className="font-bold text-green-800 mb-2">Self-Care</h3>
              <p className="text-sm text-green-700">
                Mild symptoms, safe to monitor at home.
              </p>
            </div>

            {/* Primary Care Card */}
            <div
              className="bg-white border-2 border-triageCard-border rounded-2xl p-4 sm:p-6 shadow-sm hover:-translate-y-1 transition-all duration-200"
              style={{ backgroundColor: "#FEF9C3" }}
            >
              <div className="text-3xl mb-3">🟡</div>
              <h3 className="font-bold text-yellow-800 mb-2">Primary Care</h3>
              <p className="text-sm text-yellow-700">
                Non-urgent, see a doctor if symptoms persist.
              </p>
            </div>

            {/* Semi-Emergency Card */}
            <div
              className="bg-white border-2 border-triageCard-border rounded-2xl p-4 sm:p-6 shadow-sm hover:-translate-y-1 transition-all duration-200"
              style={{ backgroundColor: "#FFEDD5" }}
            >
              <div className="text-3xl mb-3">🟠</div>
              <h3 className="font-bold text-orange-800 mb-2">Semi-Emergency</h3>
              <p className="text-sm text-orange-700">
                Possible risk – seek care within hours.
              </p>
            </div>

            {/* Emergency Card */}
            <div
              className="bg-white border-2 border-triageCard-border rounded-2xl p-4 sm:p-6 shadow-sm hover:-translate-y-1 transition-all duration-200"
              style={{ backgroundColor: "#FEE2E2" }}
            >
              <div className="text-3xl mb-3">🔴</div>
              <h3 className="font-bold text-red-800 mb-2">Emergency</h3>
              <p className="text-sm text-red-700">
                Critical – seek medical attention immediately.
              </p>
            </div>
          </div>

          {/* Standard Card */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-lg font-semibold text-textPrimary mb-4">
              Standard Card
            </h3>
            <div className="bg-white border-2 border-triageCard-border rounded-2xl p-6 sm:p-8 shadow-sm hover:-translate-y-1 transition-all duration-200">
              <h4 className="text-xl font-semibold text-textPrimary mb-3">
                Card Title
              </h4>
              <p className="text-textSecondary">
                This is a standard card component with hover effects and proper
                spacing. It uses the unified border color and shadow for
                consistency.
              </p>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-6 sm:mb-8">
            Typography
          </h2>

          <div className="bg-white border-2 border-triageCard-border rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary mb-2">
                Heading 1
              </h1>
              <p className="text-sm text-textSecondary">
                Bold, 4xl-6xl, Text Primary (#1E293B)
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-2">
                Heading 2
              </h2>
              <p className="text-sm text-textSecondary">
                Bold, 3xl-4xl, Text Primary (#1E293B)
              </p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-textPrimary mb-2">
                Heading 3
              </h3>
              <p className="text-sm text-textSecondary">
                Semibold, 2xl-3xl, Text Primary (#1E293B)
              </p>
            </div>
            <div>
              <p className="text-base text-textSecondary mb-2">Body Text</p>
              <p className="text-sm text-textSecondary">
                Regular, base, Text Secondary (#64748B)
              </p>
            </div>
            <div>
              <p className="text-sm text-textSecondary mb-2">Small Text</p>
              <p className="text-xs text-textSecondary">
                Regular, sm, Text Secondary (#64748B)
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StyleGuide;
