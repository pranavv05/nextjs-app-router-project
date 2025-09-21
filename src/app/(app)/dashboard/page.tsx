import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { DashboardWidget } from "@/components/DashboardWidget";
import { ProjectCard } from "@/components/ProjectCard";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const recommended = [
  {
    title: "AI Resume Screener",
    description: "Automate candidate screening with embeddings and RAG.",
    techStack: ["Next.js", "TypeScript", "Postgres"],
    status: "Open",
    memberCount: 5,
    href: "/projects/1",
  },
  {
    title: "Open Source Docs Bot",
    description: "Conversational docs assistant with vector search.",
    techStack: ["Python", "FastAPI", "Pinecone"],
    status: "Open",
    memberCount: 2,
    href: "/projects/2",
  },
  {
    title: "Realtime Whiteboard",
    description: "Collaborative canvas with CRDT sync.",
    techStack: ["React", "tRPC", "WebSocket"],
    status: "In Progress",
    memberCount: 3,
    href: "/projects/3",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard" />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* My Career Roadmap */}
        <DashboardWidget
          title="My Career Roadmap"
          description="Your progress this month"
          icon={<span className="i-lucide-map h-5 w-5" />}
          className="lg:col-span-1"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Frontend Developer</span>
              <span className="font-medium">64%</span>
            </div>
            <Progress value={64} />
            <div className="flex gap-2 pt-2">
              <Button asChild size="sm" variant="outline">
                <Link href="/roadmaps">View Roadmaps</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/roadmaps">Continue</Link>
              </Button>
            </div>
          </div>
        </DashboardWidget>

        {/* My Projects */}
        <DashboardWidget
          title="My Projects"
          description="Recently active"
          icon={<span className="i-lucide-briefcase h-5 w-5" />}
          className="lg:col-span-1"
          headerRight={
            <Button asChild variant="ghost" size="sm">
              <Link href="/projects">View all</Link>
            </Button>
          }
        >
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="truncate">AI Resume Screener</span>
              <span className="text-muted-foreground">In Progress</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="truncate">Realtime Whiteboard</span>
              <span className="text-muted-foreground">Open</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="truncate">Docs Bot</span>
              <span className="text-muted-foreground">Completed</span>
            </div>
            <div className="pt-2">
              <Button asChild size="sm">
                <Link href="/projects/new">Create New Project</Link>
              </Button>
            </div>
          </div>
        </DashboardWidget>

        {/* Recommended Projects (spans full width on large screens) */}
        <DashboardWidget
          title="Recommended Projects"
          description="Curated based on your skills"
          icon={<span className="i-lucide-stars h-5 w-5" />}
          className="lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommended.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </DashboardWidget>
      </div>
    </div>
  );
}