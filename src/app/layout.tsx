import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "BabyCollab - Build Your Tech Career",
  description: "Learn the skills, build the projects, and launch the career you've always wanted. All in one place.",

};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pressStart2P = Press_Start_2P({ 
  subsets: ["latin"], 
  variable: "--font-press-start",
  weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${pressStart2P.variable}`} suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ClientProviders>
          <ErrorReporter />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
          <VisualEditsMessenger />
        </ClientProviders>
      </body>
    </html>
  );
}