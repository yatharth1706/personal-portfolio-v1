"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const COMMANDS = [
  {
    id: "sync",
    label: "crm-sync",
    lines: [
      { text: "$ sync run --entity contacts", tone: "fog" },
      { text: "→ Topo → HubSpot · leads, companies, activity", tone: "dim" },
      { text: "→ webhooks · pause sequences, exclude contacts", tone: "dim" },
      { text: "→ owners · both directions", tone: "dim" },
      { text: "→ ", accent: "50–100K", suffix: " leads / day ✓", tone: "ok" },
    ],
  },
  {
    id: "outbound",
    label: "outbound",
    lines: [
      { text: "$ outbound send --sequence active", tone: "fog" },
      { text: "→ sending health · diagnostics on", tone: "dim" },
      { text: "→ throughput · ", accent: "20–40K", suffix: " emails / day", tone: "dim" },
      { text: "→ sequence analytics · per-step reply rates", tone: "dim" },
      { text: "→ deliverability · 50% → 95% at Artisan ✓", tone: "ok" },
    ],
  },
  {
    id: "tasks",
    label: "tasks",
    lines: [
      { text: "$ tasks queue --today", tone: "fog" },
      { text: "→ channels · email · calls · LinkedIn", tone: "dim" },
      { text: "→ processed · ", accent: "10–20K", suffix: " tasks / day", tone: "dim" },
      { text: "→ assignment pools · reminders · bulk actions", tone: "dim" },
      { text: "→ AI drafts live in the task queue ✓", tone: "ok" },
    ],
  },
  {
    id: "billing",
    label: "billing",
    lines: [
      { text: "$ stripe lifecycle --rebuild", tone: "fog" },
      { text: "→ subscriptions · invoices · upgrades · cancellations", tone: "dim" },
      { text: "→ old path failed quietly", tone: "dim" },
      { text: "→ rebuilt end-to-end on Stripe", tone: "dim" },
      { text: "→ Stripe lifecycle ✓", tone: "ok" },
    ],
  },
  {
    id: "infra",
    label: "infra",
    lines: [
      { text: "$ rds upgrade --region all", tone: "fog" },
      { text: "→ provisioning · Terraform, multi-region", tone: "dim" },
      { text: "→ release · automated, no manual steps", tone: "dim" },
      { text: "→ downtime · ", accent: "2–3 min", suffix: " per upgrade", tone: "dim" },
      { text: "→ no manual babysitting ✓", tone: "ok" },
    ],
  },
] as const;

export function HeroConsole() {
  const [active, setActive] = useState("sync");
  const command = COMMANDS.find((item) => item.id === active) ?? COMMANDS[0];

  return (
    <div className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-[var(--v2-shadow)]">
      <div className="flex items-center gap-2 border-b border-inset bg-panel px-3.5 py-[11px]">
        <span className="size-2.5 shrink-0 rounded-full bg-window" />
        <span className="size-2.5 shrink-0 rounded-full bg-window" />
        <span className="size-2.5 shrink-0 rounded-full bg-window" />
        <span className="ml-1.5 font-mono text-[11.5px] text-dim">
          systems I own
        </span>
        <span className="ml-auto rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-dim">
          Live load
        </span>
      </div>
      <div className="flex items-center gap-1.5 overflow-x-auto border-b border-inset bg-consolebar px-3 py-[11px] sm:flex-wrap sm:px-3.5">
        {COMMANDS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            className={cn(
              "shrink-0 rounded-full border px-2.5 py-1.5 font-mono text-[11.5px] transition-colors sm:px-3",
              active === item.id
                ? "border-brand-bright text-fog"
                : "border-line bg-panel text-mute"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="min-h-[clamp(168px,24vw,206px)] overflow-x-auto px-[clamp(12px,2vw,20px)] py-[clamp(14px,2vw,20px)] font-mono text-[11.5px] leading-[1.95] sm:text-[12.5px] sm:leading-[2.05]">
        {command.lines.map((line) => (
          <div
            key={line.text}
            className={cn(
              "whitespace-nowrap sm:whitespace-normal",
              line.tone === "fog" && "text-fog",
              line.tone === "dim" && "text-dim",
              line.tone === "ok" && "text-ok"
            )}
          >
            {line.text}
            {"accent" in line && line.accent ? (
              <span className="text-accent">{line.accent}</span>
            ) : null}
            {"suffix" in line && line.suffix ? line.suffix : null}
            {line.tone === "ok" ? (
              <span className="animate-caret ml-1.5 inline-block h-3.5 w-[7px] align-[-2px] bg-ok" />
            ) : null}
          </div>
        ))}
      </div>
      <div className="border-t border-inset px-3.5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.05em] text-dim">
        Click a system
      </div>
    </div>
  );
}
