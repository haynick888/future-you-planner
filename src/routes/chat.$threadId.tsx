import { Converse } from "@/components/future-you/converse";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chat/$threadId")({
  head: () => ({ meta: [
    { title: "Conversation — Future You" },
    { name: "description", content: "A private session with your Future You adviser." },
    { property: "og:title", content: "Conversation — Future You" },
    { property: "og:description", content: "Explore practical financial and small-business guidance." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ThreadPage,
});

function ThreadPage() {
  const { threadId } = Route.useParams();
  return <Converse key={threadId} threadId={threadId} />;
}