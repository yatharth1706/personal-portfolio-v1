"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/#work", hash: "#work", label: "Work" },
  { href: "/for-founders", label: "For founders", founders: true },
  { href: "/#experience", hash: "#experience", label: "Experience" },
  { href: "/#about", hash: "#about", label: "About", homeOnly: true },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const isFounders = pathname === "/for-founders";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/97 backdrop-blur-[10px]">
      <div className="v1-wrap flex items-center justify-between gap-6 py-3.5">
        <Link
          href="/"
          className="shrink-0 text-base font-bold tracking-[-0.02em] text-ink"
        >
          yatharth verma<span className="text-rust">.</span>
        </Link>

        <nav className="hidden items-center justify-end gap-[clamp(14px,2.4vw,30px)] md:flex">
          {NAV.map((item) => {
            if (item.homeOnly && isFounders) return null;
            const href = isHome && item.hash ? item.hash : item.href;
            const active = Boolean(item.founders && isFounders);
            const className = cn(
              "text-[14.5px] font-medium transition-colors hover:text-ink",
              item.founders ? "text-rust" : "text-ink-muted",
              active && "border-b-[1.5px] border-rust pb-0.5"
            );
            if (item.hash) {
              return (
                <a key={item.label} href={href} className={className}>
                  {item.label}
                </a>
              );
            }
            return (
              <Link key={item.label} href={href} className={className}>
                {item.label}
              </Link>
            );
          })}
          <a
            href="#contact"
            className="rounded-full bg-ink px-[17px] py-[9px] text-[14.5px] font-semibold text-paper transition-colors hover:bg-rust"
          >
            Let&apos;s talk
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact"
            className="rounded-full bg-ink px-3.5 py-2 text-[13px] font-semibold text-paper"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-full text-ink"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-line px-5 py-3 md:hidden">
          {NAV.map((item) => {
            if (item.homeOnly && isFounders) return null;
            const href = isHome && item.hash ? item.hash : item.href;
            const className = cn(
              "rounded-lg px-2 py-2.5 text-[15px] font-medium",
              item.founders ? "text-rust" : "text-ink-muted"
            );
            if (item.hash) {
              return (
                <a
                  key={item.label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={className}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.label}
                href={href}
                onClick={() => setOpen(false)}
                className={className}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
