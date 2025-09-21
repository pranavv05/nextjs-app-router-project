import AppSidebar from "@/components/AppSidebar";
import AppHeader from "@/components/AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <AppSidebar />
      <div className="pl-64">
        <AppHeader />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}