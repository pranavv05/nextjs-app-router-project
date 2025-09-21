import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProjectCard } from "@/components/ProjectCard";

const mockProjects = [
  {
    title: "AI Resume Screener",
    description: "Automate candidate screening with embeddings and RAG.",
    techStack: ["Next.js", "TypeScript", "Postgres"],
    status: "In Progress",
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
    status: "Open",
    memberCount: 3,
    href: "/projects/3",
  },
];

export default function ProjectsListPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Discover Projects"
        actions={
          <Button asChild>
            <Link href="/projects/new">Create New Project</Link>
          </Button>
        }
      />

      {/* Filters */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Input placeholder="Search projects..." className="sm:col-span-2" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}