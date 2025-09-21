"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const skillsList = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "SQL",
  "TailwindCSS",
];

export function MultiStepOnboarding() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [headline, setHeadline] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const toggleSkill = (s: string) => {
    setSkills((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  };

  const next = () => setStep((s) => Math.min(3, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome! Let’s set up your profile</CardTitle>
        <CardDescription>Complete these quick steps to personalize your experience.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium">Step 1 of 3</div>
              <div className="text-sm text-muted-foreground">Choose your username</div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="jane-doe" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium">Step 2 of 3</div>
              <div className="text-sm text-muted-foreground">Add a short headline</div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="headline">Headline</Label>
              <Input id="headline" placeholder="Full‑stack developer passionate about DX" value={headline} onChange={(e) => setHeadline(e.target.value)} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium">Step 3 of 3</div>
              <div className="text-sm text-muted-foreground">Select your top skills</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skillsList.map((s) => (
                <label key={s} className="flex items-center gap-2 text-sm">
                  <Checkbox checked={skills.includes(s)} onCheckedChange={() => toggleSkill(s)} />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        <Separator />

        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">Step {step} of 3</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={back} disabled={step === 1}>
              Back
            </Button>
            {step < 3 ? (
              <Button onClick={next} disabled={step === 1 ? username.trim() === "" : step === 2 ? headline.trim() === "" : false}>
                Continue
              </Button>
            ) : (
              <Button>
                Finish
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}