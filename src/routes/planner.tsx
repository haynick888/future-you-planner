import { AppShell } from "@/components/future-you/app-shell";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";

export const Route = createFileRoute("/planner")({
  head: () => ({ meta: [
    { title: "Planner — Future You" },
    { name: "description", content: "Your business and financial plan with Future You." },
    { property: "og:title", content: "Planner — Future You" },
    { property: "og:description", content: "A place for Omar’s future goals and business plan." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PlannerPage,
});

function PlannerPage() {
  return <AppShell title="Planner"><section className="px-5 pt-5"><h2 className="font-display text-lg font-semibold">Your plan</h2><p className="mt-1 text-xs text-slate">Prime Movers</p><div className="flex flex-col items-center gap-4 border-y border-ice/10 py-16 mt-6 text-center"><CalendarDays className="size-10 text-cyan" strokeWidth={1.4} /><p className="text-sm text-slate">No goals added yet</p></div></section></AppShell>;
}