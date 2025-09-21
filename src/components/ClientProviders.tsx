"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";

export default function ClientProviders({ children }: PropsWithChildren) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  // Conditionally render ClerkProvider only if key exists to avoid runtime errors
  const withClerk = publishableKey ? (
    <ClerkProvider publishableKey={publishableKey}>{children}</ClerkProvider>
  ) : (
    <>{children}</>
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {withClerk}
    </ThemeProvider>
  );
}