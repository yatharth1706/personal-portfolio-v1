"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "v2-theme";

function readTheme(): "dark" | "light" {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-v2-theme") === "light"
    ? "light"
    : "dark";
}

function applyTheme(theme: "dark" | "light") {
  document.documentElement.setAttribute("data-v2-theme", theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Private mode can block storage; the in-memory attribute still works.
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(readTheme());
    setMounted(true);
  }, []);

  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={next === "light" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => {
        setTheme(next);
        applyTheme(next);
      }}
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-panel text-fog transition-colors hover:border-brand-bright"
    >
      {mounted && theme === "light" ? (
        <Moon className="size-[18px]" />
      ) : (
        <Sun className="size-[18px]" />
      )}
    </button>
  );
}
