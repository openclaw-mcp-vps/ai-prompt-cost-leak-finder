import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Cost Leak Finder — Find Hidden Costs in AI Prompt Chains",
  description: "Analyzes multi-step AI workflows to identify expensive prompt patterns, redundant calls, and token waste in complex AI applications."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d94db9f8-8e3f-477e-995f-d7516573bec9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
