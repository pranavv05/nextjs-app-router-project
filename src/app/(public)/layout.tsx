import { ReactNode } from "react";
import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <PublicHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
