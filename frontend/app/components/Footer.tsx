"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ROUTES } from "../constants";
import { handleStartAssessment } from "../lib/utils/consent";

export default function Footer() {
  const router = useRouter();

  const handleSymptomCheckerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStartAssessment(router, ROUTES.HOME);
  };
  return (
    <footer className="bg-white">
      {/* Clear Separator Section */}
      <div className="border-t border-gray-200"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Column 1 - Products */}
          <div className="flex flex-col items-center md:items-center text-center">
            <h4 className="font-bold text-gray-900 mb-4 text-base">Products</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link
                  href={ROUTES.INPUT}
                  onClick={handleSymptomCheckerClick}
                  className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                >
                  Symptom Checker / Triage
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Company */}
          <div className="flex flex-col items-center md:items-center text-center">
            <h4 className="font-bold text-gray-900 mb-4 text-base">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-primary-DEFAULT hover:font-medium transition-all duration-200 cursor-pointer"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div className="flex flex-col items-center md:items-center text-center">
            <h4 className="font-bold text-gray-900 mb-4 text-base">Legal</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
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
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex items-center justify-center">
              <span className="text-lg font-semibold text-primary-DEFAULT">
                TriageX
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-sm">
              {/* Compliance Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="px-3 py-1.5 rounded-full border border-triageCard-border bg-white text-gray-700 text-xs font-medium">
                  HIPAA
                </span>
                <span className="px-3 py-1.5 rounded-full border border-triageCard-border bg-white text-gray-700 text-xs font-medium">
                  GDPR
                </span>
                <span className="px-3 py-1.5 rounded-full border border-triageCard-border bg-white text-gray-700 text-xs font-medium">
                  ISO 27001
                </span>
              </div>

              {/* Separator */}
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>

              {/* Copyright */}
              <span className="text-gray-600">© TriageX 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
