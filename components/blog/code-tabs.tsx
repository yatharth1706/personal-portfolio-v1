"use client";

import { Children, isValidElement, useSyncExternalStore, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { CodeTab } from "@/lib/remark-code-tabs";
import { CopyButton } from "./copy-button";

// One language choice for the whole site: picking TypeScript on one block
// switches every tabbed block, and it's remembered for the next visit.
const STORAGE_KEY = "blog-code-lang";
const DEFAULT_LANG = "Python";
const listeners = new Set<() => void>();

function readLang() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

function setLang(lang: string) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage can be blocked; the choice still applies until reload.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function CodeTabs({ tabs, children }: { tabs: CodeTab[]; children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => DEFAULT_LANG);
  const panels = Children.toArray(children).filter(isValidElement);
  const active = Math.max(0, tabs.findIndex((tab) => tab.label === lang));
  const title = tabs[active]?.title;

  return (
    <div data-code-block className="blog-code blog-code-tabs">
      <div className="flex items-center gap-2 border-b border-inset bg-panel py-1.5 pl-3.5 pr-1.5">
        <span className="size-2.5 shrink-0 rounded-full bg-window" />
        <span className="size-2.5 shrink-0 rounded-full bg-window" />
        <span className="size-2.5 shrink-0 rounded-full bg-window" />
        <div role="tablist" aria-label="Language" className="ml-1.5 flex gap-1">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={index === active}
              onClick={() => setLang(tab.label)}
              className={cn(
                "rounded-md px-2 py-1 font-mono text-[11.5px] transition-colors",
                index === active ? "bg-inset text-fog" : "text-dim hover:text-mute",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {title ? (
          <span className="ml-1 hidden truncate font-mono text-[11.5px] text-dim sm:inline">
            {title}
          </span>
        ) : null}
        <CopyButton />
      </div>
      {panels.map((panel, index) => (
        <div key={index} data-tab-panel hidden={index !== active}>
          {panel}
        </div>
      ))}
    </div>
  );
}
