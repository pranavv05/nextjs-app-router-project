import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const roadmaps = [
  {
    title: "Frontend Developer",
    description: "From HTML/CSS fundamentals to frameworks, testing, and performance.",
  },
  {
    title: "Backend Developer",
    description: "APIs, databases, authentication, architecture, and scaling.",
  },
  { title: "Data Scientist", description: "Statistics, ML, data pipelines, and visualization." },
];

export default function RoadmapsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Career Roadmaps" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map((r) => (
          <Link key={r.title} href={`/roadmaps/${encodeURIComponent(r.title.toLowerCase().replace(/\s+/g, "-"))}`} className="block">
            <Card className="hover:bg-accent transition cursor-pointer">
              <CardHeader>
                <CardTitle>{r.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{r.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}