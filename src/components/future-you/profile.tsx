import { Bell, Building2, ChevronRight, ShieldCheck, UserRound } from "lucide-react";
import { AppShell } from "./app-shell";

const rows = [[Building2, "Business profile", "Prime Movers · Moving company"], [Bell, "Notifications", "Email and in-app"], [ShieldCheck, "Privacy & security", "Protected"]] as const;

export function Profile() {
  return <AppShell title="Your Profile"><section className="px-5 pt-3"><div className="flex items-center gap-4 rounded-lg border border-ice/12 bg-glass p-5 backdrop-blur-xl"><span className="grid size-14 place-items-center rounded-lg bg-cyan/15 text-cyan"><UserRound className="size-7" /></span><div><h2 className="font-display text-lg font-semibold">Omar</h2><p className="mt-1 text-xs text-slate">Prime Movers owner · Sydney</p></div></div><div className="mt-5 overflow-hidden rounded-lg border border-ice/12 bg-glass backdrop-blur-xl">{rows.map(([Icon, label, value], index) => <div key={label} className={`flex items-center gap-3 p-4 ${index ? "border-t border-ice/10" : ""}`}><Icon className="size-5 text-cyan" /><div className="min-w-0 flex-1"><p className="text-sm font-semibold">{label}</p><p className="mt-0.5 text-[11px] text-slate">{value}</p></div><ChevronRight className="size-4 text-slate" /></div>)}</div><p className="mt-5 text-center text-[10px] text-slate">Prototype profile · Information is illustrative</p></section></AppShell>;
}