import { Advantage } from "@/components/future-you/advantage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/advantage")({
  head: () => ({ meta: [
    { title: "Advantage — Future You" },
    { name: "description", content: "Discover support and incentives matched to your business." },
    { property: "og:title", content: "Advantage — Future You" },
    { property: "og:description", content: "Explore available business benefits and incentives." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Advantage,
});