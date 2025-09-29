"use client";

import Link from "next/link";
import { Home, Briefcase, Map, User, Settings, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/roadmaps", label: "Roadmaps", icon: Map },
  { href: "/profile", label: "My Profile", icon: User },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function AppSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 border-r bg-background">
      <div className="h-14 px-4 border-b flex items-center gap-2 font-bold">
        <Logo size={24} />
        BabyCollab
      </div>
      <nav className="px-2 py-4 space-y-1">
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}