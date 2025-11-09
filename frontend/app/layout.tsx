import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TriageX - AI-Powered Health Risk Analyzer",
  description:
    "Accurate and efficient care with our symptom checker and virtual triage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
