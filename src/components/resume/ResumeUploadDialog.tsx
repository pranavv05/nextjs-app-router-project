"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export type ResumeUploadDialogProps = {
  openOnMount?: boolean;
};

export const ResumeUploadDialog = ({ openOnMount = true }: ResumeUploadDialogProps) => {
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (openOnMount) setOpen(true);
  }, [openOnMount]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    // Simulate analysis while we implement real AI later
    setIsAnalyzing(true);
    setSuggestions([]);
    setTimeout(() => {
      setSuggestions([
        "Quantify achievements with metrics (e.g., reduced build times by 35%).",
        "Prioritize recent, relevant experience near the top.",
        "Tailor skills to target roles: Next.js, TypeScript, Shadcn/UI, RAG.",
        "Use action verbs and impact: built, led, optimized, delivered.",
      ]);
      setIsAnalyzing(false);
    }, 1200);
  };

  const fileHint = useMemo(() => (fileName ? `Selected: ${fileName}` : "PDF, DOC, DOCX"), [fileName]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Upload your resume</DialogTitle>
          <DialogDescription>
            We will analyze your resume and suggest improvements. Files stay local until you confirm upload.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
            <p className="text-xs text-muted-foreground">{fileHint}</p>
          </div>

          <Card className="border-dashed">
            <CardContent className="p-4 space-y-3">
              <div className="text-sm font-medium">AI Suggestions</div>
              {isAnalyzing && (
                <div className="text-sm text-muted-foreground">Analyzing your resume…</div>
              )}
              {!isAnalyzing && suggestions.length === 0 && (
                <div className="text-sm text-muted-foreground">Upload a file to see suggestions.</div>
              )}
              {!isAnalyzing && suggestions.length > 0 && (
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {suggestions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              )}
              {!isAnalyzing && suggestions.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  <Badge variant="secondary">ATS-friendly</Badge>
                  <Badge variant="secondary">Impact-driven</Badge>
                  <Badge variant="secondary">Role-aligned</Badge>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <DialogFooter>
          <div className="flex w-full justify-end gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button disabled={!fileName || isAnalyzing}>Confirm Upload</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};