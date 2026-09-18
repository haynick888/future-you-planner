import { Profile } from "@/components/future-you/profile";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [
    { title: "Profile — Future You" },
    { name: "description", content: "Manage your Future You business profile and preferences." },
    { property: "og:title", content: "Profile — Future You" },
    { property: "og:description", content: "Your business profile and Future You preferences." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Profile,
});