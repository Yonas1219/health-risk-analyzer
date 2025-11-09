import React, { useState, useEffect, useRef } from "react";

const LanguageToggle: React.FC = () => {
  const [language, setLanguage] = useState<"EN" | "SV">(
    (localStorage.getItem("triagex-language") as "EN" | "SV") || "EN"
  );
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: "EN" | "SV") => {
    setLanguage(lang);
    localStorage.setItem("triagex-language", lang);
    setIsLanguageDropdownOpen(false);
    // TODO: Implement actual translation logic here
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  return (
    <div className="relative" ref={languageDropdownRef}>
      <button
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-primary-DEFAULT hover:bg-primary-soft rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-soft focus:ring-offset-2 cursor-pointer"
      >
        <svg
          className="w-5 h-5"
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
        <span className="text-sm font-medium">{language}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isLanguageDropdownOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Language Dropdown */}
      {isLanguageDropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border-2 border-triageCard-border rounded-xl shadow-lg z-50 overflow-hidden">
          <button
            onClick={() => handleLanguageChange("EN")}
            className={`w-full px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
              language === "EN"
                ? "bg-primary-soft text-primary-DEFAULT"
                : "text-gray-700 hover:bg-gray-50"
            } focus:outline-none focus:bg-primary-soft`}
          >
            <div className="flex items-center justify-between">
              <span>English</span>
              {language === "EN" && (
                <svg
                  className="w-5 h-5 text-primary-DEFAULT"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
          <button
            onClick={() => handleLanguageChange("SV")}
            className={`w-full px-4 py-3 text-left text-sm font-medium transition-all duration-200 border-t border-gray-100 ${
              language === "SV"
                ? "bg-primary-soft text-primary-DEFAULT"
                : "text-gray-700 hover:bg-gray-50"
            } focus:outline-none focus:bg-primary-soft`}
          >
            <div className="flex items-center justify-between">
              <span>Svenska</span>
              {language === "SV" && (
                <svg
                  className="w-5 h-5 text-primary-DEFAULT"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
