"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const EMPTY = "var(--v2-empty)";
const LEAD_COLORS = Array.from({ length: 10 }, () => "var(--v2-brand)");
const EMAIL_COLORS = [
  ...Array.from({ length: 10 }, () => "var(--v2-accent-mid)"),
  ...Array.from({ length: 9 }, () => "var(--v2-ok)"),
  EMPTY,
];
const CUSTOMER_COLORS = Array.from({ length: 20 }, () => "var(--v2-brand-bright)");

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function MiniGraphic({
  colors,
  play,
  variant,
}: {
  colors: readonly string[];
  play: number;
  variant: "bars" | "dots";
}) {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    if (play < 1) return;
    setFilled(0);
    const timers = colors.map((_, index) =>
      window.setTimeout(() => setFilled(index + 1), 170 + index * 30)
    );
    return () => timers.forEach(clearTimeout);
  }, [colors, play]);

  if (variant === "dots") {
    return (
      <div className="flex flex-wrap gap-[5px]">
        {colors.map((color, index) => (
          <span
            key={index}
            className="size-[7px] rounded-full"
            style={{
              background: index < filled ? color : EMPTY,
              transition: "background-color 220ms ease",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-[3px]">
      {colors.map((color, index) => (
        <span
          key={index}
          className="h-2 min-w-1 flex-1 rounded-[2px]"
          style={{
            background: index < filled ? color : EMPTY,
            transition: "background-color 220ms ease",
          }}
        />
      ))}
    </div>
  );
}

function StatCard({
  className,
  visible,
  children,
}: {
  className?: string;
  visible: boolean;
  children: (play: number) => ReactNode;
}) {
  const [play, setPlay] = useState(0);

  useEffect(() => {
    if (visible) setPlay((value) => value + 1);
  }, [visible]);

  return (
    <article
      onMouseEnter={() => {
        if (play > 0) setPlay((value) => value + 1);
      }}
      className={className}
    >
      {children(play)}
    </article>
  );
}

export function ProofStats() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "mt-[clamp(30px,4vw,48px)] flex flex-wrap gap-[clamp(14px,2vw,20px)] transition duration-500",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
    >
      <StatCard
        visible={visible}
        className="flex min-w-0 flex-[1_1_min(100%,240px)] flex-col justify-between gap-[clamp(20px,3.4vw,34px)] rounded-[18px] border border-line bg-panel p-[clamp(20px,2.6vw,28px)]"
      >
        {(play) => (
          <>
            <span className="font-mono text-[11.5px] uppercase tracking-[0.06em] text-dim">
              Leads synced daily
            </span>
            <div>
              <span className="text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-none tracking-[-0.045em]">
                50–100
              </span>
              <span className="ml-1.5 text-[clamp(1rem,1.6vw,1.4rem)] font-medium text-dim">
                K
              </span>
            </div>
            <div>
              <MiniGraphic colors={LEAD_COLORS} play={play} variant="bars" />
              <div className="mt-2 flex justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-dim">
                  50K floor
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-accent">
                  100K peak
                </span>
              </div>
            </div>
          </>
        )}
      </StatCard>

      <StatCard
        visible={visible}
        className="animate-glow flex min-w-0 flex-[1_1_min(100%,240px)] flex-col justify-between gap-[clamp(20px,3.4vw,34px)] rounded-[18px] border border-brand-bright bg-proof p-[clamp(20px,2.6vw,28px)]"
      >
        {(play) => (
          <>
            <span className="font-mono text-[11.5px] uppercase tracking-[0.06em] text-accent-mid">
              Deliverability at Artisan
            </span>
            <div>
              <span className="text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-none tracking-[-0.045em] text-accent">
                95
              </span>
              <span className="ml-1.5 text-[clamp(1rem,1.6vw,1.4rem)] font-medium text-accent-mid">
                % · from 50
              </span>
            </div>
            <div>
              <MiniGraphic colors={EMAIL_COLORS} play={play} variant="bars" />
              <div className="mt-2 flex justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-accent-mid">
                  10 of 20 landed
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-ok">
                  now 19 of 20
                </span>
              </div>
            </div>
          </>
        )}
      </StatCard>

      <StatCard
        visible={visible}
        className="flex min-w-0 flex-[1_1_min(100%,240px)] flex-col justify-between gap-[clamp(20px,3.4vw,34px)] rounded-[18px] border border-line bg-panel p-[clamp(20px,2.6vw,28px)]"
      >
        {(play) => (
          <>
            <span className="font-mono text-[11.5px] uppercase tracking-[0.06em] text-dim">
              Customers on the platform
            </span>
            <div>
              <span className="text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-none tracking-[-0.045em]">
                200
              </span>
              <span className="ml-1.5 text-[clamp(1rem,1.6vw,1.4rem)] font-medium text-dim">
                +
              </span>
            </div>
            <div>
              <MiniGraphic colors={CUSTOMER_COLORS} play={play} variant="dots" />
              <div className="mt-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-dim">
                  one dot = ten customers
                </span>
              </div>
            </div>
          </>
        )}
      </StatCard>
    </div>
  );
}
