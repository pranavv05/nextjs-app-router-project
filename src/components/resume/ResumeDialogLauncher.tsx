"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ResumeUploadDialog } from "@/components/resume/ResumeUploadDialog";

export const ResumeDialogLauncher = () => {
  const [remountKey, setRemountKey] = useState(0);

  const handleOpen = () => {
    // Remount the dialog so it auto-opens again
    setRemountKey((k) => k + 1);
  };

  return (
    <>
      <Button size="sm" onClick={handleOpen}>Upload</Button>
      {/* Auto-open on initial mount and whenever remountKey changes */}
      <ResumeUploadDialog key={remountKey} openOnMount />
    </>
  );
};

export default ResumeDialogLauncher;