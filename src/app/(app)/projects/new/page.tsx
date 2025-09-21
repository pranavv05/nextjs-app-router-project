import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const techOptions = ["Next.js", "TypeScript", "Python", "Node.js", "React", "Go", "Postgres", "Redis"];

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Create a New Project" />

      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-2">
            <Label htmlFor="title">Project Title</Label>
            <Input id="title" placeholder="Awesome Open Source App" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="What problem does it solve? What is the vision?" rows={6} />
          </div>

          <div className="space-y-3">
            <div className="text-sm font-medium">Tech Stack</div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {techOptions.map((t) => (
                <label key={t} className="flex items-center gap-2 text-sm">
                  <Checkbox id={`tech-${t}`} />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="roles">Team Roles Needed</Label>
            <Input id="roles" placeholder="e.g., Frontend dev, Backend dev, Designer" />
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Create Project</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}