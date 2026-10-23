"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton() {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label={copied ? "Copied" : "Copy code"}
      onClick={async (event) => {
        // In a tabbed block, copy the visible tab.
        const block = event.currentTarget.closest("[data-code-block]");
        const code = (
          block?.querySelector("[data-tab-panel]:not([hidden]) pre") ??
          block?.querySelector("pre")
        )?.textContent?.replace(/^ $/gm, ""); // blank lines render as a single space
        if (!code) return;
        try {
          await navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {
          // Clipboard can be blocked (insecure origin, permissions); nothing to do.
        }
      }}
      className="ml-auto inline-flex size-7 items-center justify-center rounded-md text-dim transition-colors hover:bg-inset hover:text-fog"
    >
      {copied ? <Check className="size-3.5 text-ok" /> : <Copy className="size-3.5" />}
    </button>
  );
}
