import type { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export type DashboardWidgetProps = {
  title: string;
  icon?: ReactNode;
  description?: string;
  headerRight?: ReactNode; // Optional actions or filters in the header
  children?: ReactNode; // Main widget content
  footer?: ReactNode; // Optional footer content (e.g., link, summary)
  className?: string;
};

export const DashboardWidget = ({
  title,
  icon,
  description,
  headerRight,
  children,
  footer,
  className,
}: DashboardWidgetProps) => {
  return (
    <Card className={className}>
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            {icon ? <span className="text-muted-foreground inline-flex h-5 w-5 items-center justify-center">{icon}</span> : null}
            <CardTitle className="text-base sm:text-lg md:text-xl">{title}</CardTitle>
          </div>
          {headerRight ? <div className="shrink-0">{headerRight}</div> : null}
        </div>
        {description ? (
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
        ) : null}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </Card>
  );
};