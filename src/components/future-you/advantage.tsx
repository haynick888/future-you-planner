import { Button } from "@/components/ui/button";
import { benefits } from "@/lib/future-you-data";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, FileCheck2 } from "lucide-react";
import { AppShell } from "./app-shell";

export function Advantage() {
  return (
    <AppShell title="Available Benefits" eyebrow="Future You · Advantage">
      <section className="mt-2">
        <div className="flex items-center justify-between px-5"><p className="text-xs text-slate">Matched to your business profile</p><span className="text-[10px] font-semibold text-cyan">Swipe →</span></div>
        <div className="hide-scrollbar mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4">
          {benefits.map((benefit, index) => (
            <article key={benefit.id} className="relative h-[360px] w-[82%] shrink-0 snap-center overflow-hidden rounded-lg border border-ice/15 bg-navy">
              <img src={benefit.image} alt="" width={1024} height={640} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan">{benefit.category}</span><span className="rounded-full border border-ice/20 bg-ink/50 px-2 py-1 text-[10px] text-ice">{index + 1} / {benefits.length}</span></div>
                <h2 className="mt-2 font-display text-2xl font-semibold">{benefit.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate">{benefit.description}</p>
                <div className="mt-4 flex items-end justify-between"><div><p className="text-[10px] text-slate">Potential value</p><p className="font-display text-lg font-semibold text-cyan">{benefit.value}</p></div><Button size="icon" className="bg-cyan text-ink hover:bg-cyan/90" aria-label={`View ${benefit.name}`}><ArrowRight /></Button></div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-4 border-t border-ice/10 px-5 py-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate">Your applications</p>
        <Link to="/submissions" className="mt-3 flex items-center gap-3 rounded-lg border border-cyan/20 bg-cyan/10 p-4 backdrop-blur-xl">
          <span className="grid size-11 place-items-center rounded-md bg-cyan/15 text-cyan"><FileCheck2 className="size-5" /></span>
          <span className="min-w-0 flex-1"><strong className="block font-display text-sm font-semibold">My Benefit Submissions</strong><span className="mt-1 block text-[11px] text-slate">2 active applications</span></span>
          <ChevronRight className="size-5 text-cyan" />
        </Link>
      </section>
    </AppShell>
  );
}