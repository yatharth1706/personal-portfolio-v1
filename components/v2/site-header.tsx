"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#looking", label: "Hiring?" },
  { href: "#resume", label: "Résumé" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="v2-header sticky top-0 z-[80] isolate border-b backdrop-blur-[12px]">
      <div className="v2-wrap flex items-center justify-between gap-3 py-3 sm:gap-5 sm:py-[13px]">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-2.5 text-fog"
        >
          <span className="flex size-[22px] shrink-0 items-center justify-center rounded-md bg-brand font-mono text-[10px] font-medium tracking-[-0.04em] text-onbrand">
            YV
          </span>
          <span className="truncate text-[15px] font-semibold tracking-[-0.01em]">
            Yatharth Verma
          </span>
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:gap-5">
          <nav className="hidden items-center justify-end gap-[clamp(12px,2.2vw,26px)] md:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-mute transition-colors hover:text-fog"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-brand px-[17px] py-[9px] text-sm font-semibold text-onbrand transition-colors hover:bg-brand-hover md:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-fog md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-hair px-[clamp(16px,4vw,48px)] py-3 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-[16px] font-medium text-mute"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-4 py-3 text-[15px] font-semibold text-onbrand"
          >
            Let&apos;s talk
          </a>
        </nav>
      ) : null}
    </header>
  );
}
