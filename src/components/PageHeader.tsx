import type { ReactNode } from "react";

export type PageHeaderProps = {
  title: string;
  actions?: ReactNode; // Right-side actions (e.g., buttons)
  description?: ReactNode; // Optional supporting text under the title
  className?: string;
};

export const PageHeader = ({ title, actions, description, className }: PageHeaderProps) => {
  return (
    <div className={`w-full ${className ?? ""}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
        {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
      </div>
      {description ? (
        <div className="mt-2 text-sm text-muted-foreground">{description}</div>
      ) : null}
    </div>
  );
};