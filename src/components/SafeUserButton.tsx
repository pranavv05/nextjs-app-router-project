"use client";

import dynamic from "next/dynamic";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const UserButton = dynamic(async () => (await import("@clerk/nextjs")).UserButton, {
  ssr: false,
  loading: () => (
    <Avatar className="h-8 w-8">
      <AvatarFallback>CH</AvatarFallback>
    </Avatar>
  ),
});

export default function SafeUserButton() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <Avatar className="h-8 w-8">
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
    );
  }
  return <UserButton />;
}