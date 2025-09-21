"use client";

import { Input } from "@/components/ui/input";
import SafeUserButton from "@/components/SafeUserButton";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-30 h-14 border-b bg-background/80 backdrop-blur">
      <div className="flex items-center gap-3 h-full px-4">
        <div className="flex-1">
          <Input placeholder="Search..." className="w-full" />
        </div>
        <ThemeToggle />
        <SafeUserButton />
      </div>
    </header>
  );
}