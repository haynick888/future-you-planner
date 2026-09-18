import { createFileRoute } from "@tanstack/react-router";
import { Converse } from "@/components/future-you/converse";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Converse — Future You" },
    { name: "description", content: "Chat with your Future You adviser about business growth, support, and financial planning." },
    { property: "og:title", content: "Converse — Future You" },
    { property: "og:description", content: "A human financial planning conversation built around your business and future." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: () => <Converse />,
});
