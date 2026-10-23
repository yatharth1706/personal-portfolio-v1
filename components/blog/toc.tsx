"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { Heading } from "@/lib/blog";

// A heading counts as the current section once its top passes this many
// pixels from the top of the window. Headings land at 96px when you jump to
// them (72px html scroll-padding + scroll-mt-6), so this sits just below.
const ACTIVE_LINE = 140;

function useActiveHeading(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  // While a click is scrolling the page, keep the clicked heading active
  // instead of recalculating on every scroll event.
  const clicked = useRef<string | null>(null);
  const idKey = ids.join(" ");

  useEffect(() => {
    const elements = idKey
      .split(" ")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    let unlockTimer: ReturnType<typeof setTimeout> | undefined;

    const update = () => {
      if (clicked.current) return;

      // At the very bottom, the last headings can't scroll up to the line.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(elements[elements.length - 1]?.id);
        return;
      }

      let current = elements[0]?.id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= ACTIVE_LINE) current = el.id;
        else break;
      }
      setActive(current);
    };

    const unlock = () => {
      clicked.current = null;
      clearTimeout(unlockTimer);
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[data-toc-link]");
      if (!link) return;
      clicked.current = link.hash.slice(1);
      setActive(clicked.current);
      // scrollend isn't in every browser yet, so also unlock after a while.
      clearTimeout(unlockTimer);
      unlockTimer = setTimeout(unlock, 1200);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("scrollend", unlock);
    // Scrolling by hand cancels the lock straight away.
    window.addEventListener("wheel", unlock, { passive: true });
    window.addEventListener("touchstart", unlock, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      clearTimeout(unlockTimer);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("scrollend", unlock);
      window.removeEventListener("wheel", unlock);
      window.removeEventListener("touchstart", unlock);
      document.removeEventListener("click", onClick);
    };
  }, [idKey]);

  return active;
}

function Links({ headings, active }: { headings: Heading[]; active?: string }) {
  return (
    <ul className="flex flex-col gap-0.5 text-[13.5px] leading-snug">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            data-toc-link
            className={cn(
              "-ml-px block border-l py-1.5 transition-colors",
              heading.level === 3 ? "pl-6" : "pl-3",
              heading.id === active
                ? "border-brand-bright text-fog"
                : "border-transparent text-dim hover:text-mute",
            )}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const active = useActiveHeading(headings.map((heading) => heading.id));
  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page" className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
        On this page
      </div>
      <div className="border-l border-line">
        <Links headings={headings} active={active} />
      </div>
    </nav>
  );
}

export function MobileTableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;

  return (
    <details className="group rounded-xl border border-line bg-panel lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-mono text-[11.5px] uppercase tracking-[0.08em] text-mute">
        On this page
        <span className="transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="border-t border-inset px-4 pb-3 pt-2">
        <div className="border-l border-line">
          <Links headings={headings} />
        </div>
      </div>
    </details>
  );
}
