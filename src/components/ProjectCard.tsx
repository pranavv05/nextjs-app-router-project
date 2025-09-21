import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import type { ReactNode } from "react";

export type ProjectCardProps = {
  title: string;
  description: string;
  techStack?: string[];
  status?: string;
  memberCount?: number;
  href?: string; // If provided, the View button becomes a link
  onView?: () => void; // Optional click handler when no href is provided
  footerExtra?: ReactNode; // Optional extra content in the footer (e.g., secondary actions)
  className?: string;
};

function statusVariant(status?: string): "default" | "secondary" | "outline" | "destructive" {
  if (!status) return "secondary";
  const key = status.toLowerCase();
  if (["active", "in progress", "ongoing"].includes(key)) return "default";
  if (["paused", "backlog", "planning"].includes(key)) return "secondary";
  if (["archived", "completed", "done"].includes(key)) return "outline";
  if (["blocked", "cancelled", "canceled"].includes(key)) return "destructive";
  return "secondary";
}

export const ProjectCard = ({
  title,
  description,
  techStack = [],
  status,
  memberCount = 0,
  href,
  onView,
  footerExtra,
  className,
}: ProjectCardProps) => {
  const viewButton = href ? (
    <Button asChild>
      <Link href={href}>View Project</Link>
    </Button>
  ) : (
    <Button onClick={onView} disabled={!onView}>
      View Project
    </Button>
  );

  return (
    <Card className={className}>
      <CardHeader className="space-y-1">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base sm:text-lg md:text-xl">{title}</CardTitle>
          {status ? (
            <Badge variant={statusVariant(status)} className="shrink-0">
              {status}
            </Badge>
          ) : null}
        </div>
        {description ? (
          <CardDescription className="text-sm leading-relaxed">
            {description}
          </CardDescription>
        ) : null}
      </CardHeader>
      <CardContent className="space-y-3">
        {techStack.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        ) : null}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Users className="h-4 w-4" aria-hidden />
          <span>{memberCount}</span>
          <span>member{memberCount === 1 ? "" : "s"}</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-2">
        {viewButton}
        {footerExtra}
      </CardFooter>
    </Card>
  );
};