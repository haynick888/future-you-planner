import { Link, useRouterState } from "@tanstack/react-router";
import { BotMessageSquare, ChartNoAxesCombined, Gift, ReceiptText, UserRound } from "lucide-react";
import type { ReactNode } from "react";

const navItems = [
  { to: "/" as const, label: "Converse", icon: BotMessageSquare, match: (path: string) => path === "/" || path.startsWith("/chat/") },
  { to: "/advantage" as const, label: "Advantage", icon: Gift, match: (path: string) => path.startsWith("/advantage") || path.startsWith("/submissions") },
  { to: "/tax" as const, label: "Tax", icon: ReceiptText, match: (path: string) => path.startsWith("/tax") },
  { to: "/planner" as const, label: "Planner", icon: ChartNoAxesCombined, match: (path: string) => path.startsWith("/planner") },
  { to: "/profile" as const, label: "Profile", icon: UserRound, match: (path: string) => path.startsWith("/profile") },
];

export function AppShell({ children, title, eyebrow }: { children: ReactNode; title: string; eyebrow?: string }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-ice">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,var(--navy)_0%,var(--ink)_55%)]" />
      <div className="kinetic-a pointer-events-none fixed -left-28 -top-20 h-72 w-72 rounded-[2.5rem] border border-ice/15 bg-ice/10 backdrop-blur-2xl" />
      <div className="kinetic-b pointer-events-none fixed -right-24 top-40 h-80 w-80 rounded-[3rem] border border-cyan/20 bg-cyan/10 backdrop-blur-2xl" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col border-x border-ice/10">
        <header className="flex shrink-0 items-center justify-between px-5 pb-3 pt-6">
          <div>
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan">{eyebrow ?? "Future You"}</p>
            <h1 className="mt-1 font-display text-2xl font-semibold tracking-normal">{title}</h1>
          </div>
        </header>
        <div className="flex min-h-0 flex-1 flex-col pb-20">{children}</div>
        <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md border-t border-ice/10 bg-ink/85 backdrop-blur-xl" aria-label="Main navigation">
          <div className="grid grid-cols-5 px-2 py-2">
            {navItems.map((item) => {
              const active = item.match(pathname);
              const Icon = item.icon;
              return (
                <Link key={item.label} to={item.to} className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-md transition-colors ${active ? "text-cyan" : "text-slate hover:text-ice"}`}>
                  <Icon className="size-5" strokeWidth={active ? 2.4 : 1.8} />
                  <span className="text-[10px] font-semibold">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </main>
  );
}