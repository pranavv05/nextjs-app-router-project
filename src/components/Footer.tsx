"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-2">
            <Logo size={24} />
            BabyCollab
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Build and navigate your career with roadmaps, projects, and guidance.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Product</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
            <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
            <li><Link href="/app" className="text-muted-foreground hover:text-foreground">App</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Social</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" aria-label="Twitter"><Twitter className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" aria-label="Facebook"><Facebook className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" aria-label="Instagram"><Instagram className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm text-muted-foreground">© 2025 BabyCollab</div>
    </footer>
  );
}