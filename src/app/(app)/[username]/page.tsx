// remove next/image to avoid external image domain config
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillTag } from "@/components/SkillTag";
import { ProjectCard } from "@/components/ProjectCard";

const completed = [
  {
    title: "Realtime Whiteboard",
    description: "Collaborative canvas with CRDT sync.",
    techStack: ["React", "tRPC", "WebSocket"],
    status: "Completed",
    memberCount: 4,
    href: "/projects/3",
  },
  {
    title: "Open Source Docs Bot",
    description: "Conversational docs assistant with vector search.",
    techStack: ["Python", "FastAPI", "Pinecone"],
    status: "Completed",
    memberCount: 3,
    href: "/projects/2",
  },
];

export default function UserProfilePage() {
  const skills: { name: string; endorsements: number }[] = [
    { name: "TypeScript", endorsements: 42 },
    { name: "React", endorsements: 37 },
    { name: "Next.js", endorsements: 29 },
    { name: "Node.js", endorsements: 25 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img src="https://api.dicebear.com/7.x/initials/svg?seed=JD" width={64} height={64} alt="avatar" className="rounded-full" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Jane Doe</h1>
          <p className="text-sm text-muted-foreground">Full‑stack developer passionate about DX</p>
        </div>
        <Button>Connect</Button>
      </div>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            I build pragmatic, delightful web apps. Currently exploring AI tooling for developer productivity.
          </p>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills & Endorsements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <SkillTag key={s.name} skillName={s.name} endorsementCount={s.endorsements} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Completed Projects */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Completed Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {completed.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}