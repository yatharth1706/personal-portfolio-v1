"use client";

import { useState } from "react";

const DAYS = [
  { label: "Mon", linkedin: 18, calls: 26, email: 44 },
  { label: "Tue", linkedin: 20, calls: 30, email: 52 },
  { label: "Wed", linkedin: 16, calls: 34, email: 48 },
  { label: "Thu", linkedin: 22, calls: 32, email: 58 },
  { label: "Fri", linkedin: 18, calls: 28, email: 54 },
  { label: "Sat", linkedin: 6, calls: 8, email: 18 },
  { label: "Sun", linkedin: 4, calls: 6, email: 12 },
];

export function TaskChart() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="min-w-0 flex-[1_1_min(100%,240px)] rounded-xl border border-rail bg-surface">
      <div className="flex justify-between gap-2.5 border-b border-inset px-3.5 py-2.5">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-dim">
          Tasks by channel · illustrative
        </span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-accent">
          {hover ? `${hover} · email / calls / LinkedIn` : "10–20K / day"}
        </span>
      </div>
      <div className="px-3.5 pb-3 pt-4">
        <div className="flex items-end gap-[clamp(5px,1.2vw,11px)]">
          {DAYS.map((day) => (
            <button
              key={day.label}
              type="button"
              onMouseEnter={() => setHover(day.label)}
              onMouseLeave={() => setHover(null)}
              className="flex min-w-0 flex-1 flex-col justify-end gap-0.5 transition-opacity"
              style={{ opacity: hover && hover !== day.label ? 0.35 : 1 }}
            >
              <div
                className="bg-rail"
                style={{ height: day.linkedin }}
              />
              <div
                className="bg-chart-mid"
                style={{ height: day.calls }}
              />
              <div
                className={day.label === "Thu" ? "bg-brand-bright" : "bg-brand"}
                style={{ height: day.email }}
              />
              <div className="mt-2 text-center font-mono text-[10px] text-dim">
                {day.label}
              </div>
            </button>
          ))}
        </div>
        <div className="mt-3.5 flex flex-wrap gap-x-4 gap-y-2 border-t border-inset pt-[11px]">
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-dim">
            <span className="size-2 bg-brand" />
            Email
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-dim">
            <span className="size-2 bg-chart-mid" />
            Calls
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-dim">
            <span className="size-2 bg-rail" />
            LinkedIn
          </span>
        </div>
      </div>
    </div>
  );
}
