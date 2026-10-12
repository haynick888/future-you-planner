import { AppShell } from "@/components/future-you/app-shell";
import { createFileRoute } from "@tanstack/react-router";
import { ReceiptText } from "lucide-react";

export const Route = createFileRoute("/tax")({
  head: () => ({ meta: [
    { title: "Tax — Future You" },
    { name: "description", content: "Your business tax overview with Future You." },
    { property: "og:title", content: "Tax — Future You" },
    { property: "og:description", content: "Tax information for Omar and Prime Movers." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: TaxPage,
});

function TaxPage() {
  return <AppShell title="Tax"><section className="px-5 pt-5"><h2 className="font-display text-lg font-semibold">Your tax overview</h2><p className="mt-1 text-xs text-slate">Prime Movers</p><div className="flex flex-col items-center gap-4 border-y border-ice/10 py-16 mt-6 text-center"><ReceiptText className="size-10 text-cyan" strokeWidth={1.4} /><p className="text-sm text-slate">No tax information added yet</p></div></section></AppShell>;
}