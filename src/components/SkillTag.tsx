import { Badge } from "@/components/ui/badge";
import type { ReactNode, MouseEvent } from "react";

export type SkillTagProps = {
  skillName: string;
  endorsementCount?: number;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  className?: string;
};

export const SkillTag = ({
  skillName,
  endorsementCount = 0,
  leadingIcon,
  trailingIcon,
  onClick,
  className,
}: SkillTagProps) => {
  return (
    <div
      className={`inline-flex items-center gap-2 ${className ?? ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <Badge variant="secondary" className="inline-flex items-center gap-1.5">
        {leadingIcon}
        <span>{skillName}</span>
      </Badge>
      <Badge
        variant="outline"
        className="text-xs px-2 py-0.5 leading-none"
        aria-label={`${endorsementCount} endorsement${endorsementCount === 1 ? "" : "s"}`}
        title={`${endorsementCount} endorsement${endorsementCount === 1 ? "" : "s"}`}
      >
        {endorsementCount}
      </Badge>
      {trailingIcon}
    </div>
  );
};