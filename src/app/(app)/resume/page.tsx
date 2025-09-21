import { PageHeader } from "@/components/PageHeader";
import { ResumeUploadDialog } from "@/components/resume/ResumeUploadDialog";
import { ResumeDialogLauncher } from "@/components/resume/ResumeDialogLauncher";

export default function ResumePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Resume"
        description="Upload your resume to get AI-powered improvement suggestions."
        actions={<ResumeDialogLauncher />}
      />

      {/* Auto-opens when user lands on this page */}
      <ResumeUploadDialog openOnMount />
    </div>
  );
}