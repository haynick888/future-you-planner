import { SubmissionDetail } from "@/components/future-you/submissions";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/submissions/$submissionId")({
  head: () => ({ meta: [
    { title: "Submission Progress — Future You" },
    { name: "description", content: "View benefit submission progress, next steps, and supporting information." },
    { property: "og:title", content: "Submission Progress — Future You" },
    { property: "og:description", content: "Your benefit submission status and next steps." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: DetailPage,
});

function DetailPage() {
  const { submissionId } = Route.useParams();
  return <SubmissionDetail submissionId={submissionId} />;
}