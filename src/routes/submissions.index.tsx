import { SubmissionList } from "@/components/future-you/submissions";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/submissions/")({
  head: () => ({ meta: [
    { title: "My Benefit Submissions — Future You" },
    { name: "description", content: "Review your submitted benefits and their current progress." },
    { property: "og:title", content: "My Benefit Submissions — Future You" },
    { property: "og:description", content: "Track active benefit submissions in one place." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: SubmissionList,
});