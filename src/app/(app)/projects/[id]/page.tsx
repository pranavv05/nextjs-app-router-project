import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockProject = {
  id: 1,
  title: "AI Resume Screener",
  description:
    "Automate candidate screening with embeddings and RAG. Extracts entities, scores resumes, and ranks candidates.",
  techStack: ["Next.js", "TypeScript", "Postgres"],
  owner: { name: "Jane Doe" },
  members: [
    { name: "Jane Doe" },
    { name: "Alex Kim" },
    { name: "Sam Patel" },
  ],
};

export default function ProjectDetailPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{mockProject.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">{mockProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {mockProject.techStack.map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Members</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {mockProject.members.map((m) => (
              <div key={m.name} className="text-sm">{m.name}</div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Owner</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">{mockProject.owner.name}</div>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button className="w-full">Request to Join</Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/projects/1/workspace">Open Workspace</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}