"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const GEO = [
  { x: -1, y: -1.05, r: -8 },
  { x: 0.12, y: 0, r: 1.5 },
  { x: 1, y: 1.05, r: 8 },
];

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function mix(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function smoothstep(value: number) {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
}

/** Opens, holds, then closes. 0 at both ends so the deck rests stacked. */
function fanFromProgress(p: number) {
  if (p < 0.05) return 0;
  if (p < 0.18) return smoothstep((p - 0.05) / 0.13);
  if (p < 0.86) return 1;
  if (p < 0.98) return 1 - smoothstep((p - 0.86) / 0.12);
  return 0;
}

/**
 * 0 = product, 1 = workflow, 2 = infra.
 * Long holds on every card, slow blends between — middle/last don't snap up.
 */
function focusFromProgress(p: number) {
  if (p < 0.34) return 0;
  if (p < 0.5) return smoothstep((p - 0.34) / 0.16);
  if (p < 0.64) return 1;
  if (p < 0.8) return 1 + smoothstep((p - 0.64) / 0.16);
  return 2;
}

export function LayersDeck() {
  const runwayRef = useRef<HTMLElement | null>(null);
  const platesRef = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const runway = runwayRef.current;
    const plates = platesRef.current;
    if (!ready || !runway || plates.some((plate) => !plate)) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lastActive = -1;
    let visualP = 0;
    let raf = 0;
    let running = false;

    const progress = () => {
      const rect = runway.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      return total > 0 ? clamp(-rect.top / total) : 0;
    };

    const render = (p: number) => {
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      const fan = reduce ? 0 : fanFromProgress(p);
      const focus = reduce ? 0 : focusFromProgress(p);
      const spread = Math.min(window.innerWidth, 520) * 0.09 * fan;
      const nextActive =
        p > 0.9 ? -1 : fan < 0.12 ? 0 : Math.round(focus);

      plates.forEach((el, i) => {
        if (!el) return;
        const g = GEO[i];
        const dist = Math.abs(i - focus);
        const proximity = clamp(1 - dist);
        const lift = smoothstep(proximity) * fan;
        const restX = g.x * spread;
        const restY = g.y * spread + i * 8;
        const x = mix(restX, 0, lift);
        const y = mix(restY, mobile ? -36 : -44, lift);
        // Keep every plate at the same tilt so they stay parallel and
        // cannot slice through each other in 3D.
        const z = mix(mobile ? -210 : -160, mobile ? 96 : 80, lift);
        const scale = mix(0.93 - i * 0.012, mobile ? 1.1 : 1.12, lift);
        const rotZ = mix(-30 + g.r * fan * 0.4, -30, lift);
        el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(48deg) rotateZ(${rotZ}deg) scale(${scale})`;
        el.style.opacity = String(mix(mix(1, 0.28, fan), 1, lift));
        el.style.zIndex =
          fan < 0.12 ? String(10 - i) : String(Math.round(lift * 100));
        el.style.filter = "none";
        el.style.boxShadow =
          lift > 0.65 ? "var(--v2-plate-lift)" : "var(--v2-plate-rest)";
      });

      if (nextActive !== lastActive) {
        lastActive = nextActive;
        setActive(nextActive);
      }
    };

    const tick = () => {
      const target = progress();
      visualP += (target - visualP) * (reduce ? 1 : 0.055);
      if (Math.abs(target - visualP) < 0.0004) visualP = target;
      render(visualP);
      if (Math.abs(target - visualP) >= 0.0004) {
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
        raf = 0;
      }
    };

    const kick = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    visualP = progress();
    render(visualP);
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick, { passive: true });
    return () => {
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ready]);

  const setPlate = (index: number) => (node: HTMLDivElement | null) => {
    platesRef.current[index] = node;
    if (node && platesRef.current.every(Boolean)) setReady(true);
  };

  return (
    <section
      id="layers"
      ref={runwayRef}
      className="relative mt-[clamp(24px,5vw,88px)] h-[450vh] md:h-[520vh]"
    >
      <div className="sticky top-14 flex h-[calc(100svh-3.5rem)] flex-col justify-start overflow-hidden bg-night py-4 md:top-0 md:h-screen md:min-h-[560px] md:justify-center md:py-0">
        <div className="v2-wrap flex w-full flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-[clamp(24px,4vw,56px)]">
          <div className="min-w-0 shrink-0 md:flex-[1_1_min(100%,320px)]">
            <Badge>How it fits together</Badge>
            <h2 className="mb-2 mt-3 max-w-[16ch] text-[clamp(1.55rem,6vw,3rem)] font-bold leading-[1.06] tracking-[-0.035em] md:mb-[clamp(14px,2vw,20px)] md:mt-[clamp(18px,2.6vw,26px)]">
              The UI, the jobs,
              <br />
              <span className="text-dim">and the infra.</span>
            </h2>
            <p className="mb-3 max-w-[40ch] text-[0.9375rem] leading-[1.55] text-mute md:mb-[clamp(24px,3.4vw,34px)] md:text-[clamp(0.9375rem,1.1vw,1.0625rem)] md:leading-[1.65]">
              I usually own all three. Scroll to step through each.
            </p>
            <div className="flex flex-col gap-2.5 md:gap-[clamp(13px,2vw,19px)]">
              <LayerCap
                active={active === -1 || active === 0}
                number="01"
                title="Product surface"
                copy="React, Next.js, TypeScript — the UI"
              />
              <LayerCap
                active={active === -1 || active === 1}
                number="02"
                title="Workflow engine"
                copy="Temporal, webhooks, retries — jobs that can fail and continue"
              />
              <LayerCap
                active={active === -1 || active === 2}
                number="03"
                title="Data & infrastructure"
                copy="Postgres, Redis, AWS, Terraform — data and the machines"
              />
            </div>
          </div>
          <div className="flex justify-center md:min-w-0 md:flex-[1_1_min(100%,280px)]">
            <div className="relative -mt-5 h-[min(38svh,290px)] w-[min(92vw,340px)] [perspective:1300px] md:mt-0 md:h-auto md:aspect-square md:max-h-[min(60vh,500px)] md:w-full">
              <Plate
                refCallback={setPlate(0)}
                className="border-brand-bright bg-brand"
                labelClassName="text-[#DCE8FF]"
                label="Product surface"
              >
                <ProductFace />
              </Plate>
              <Plate
                refCallback={setPlate(1)}
                className="border-chipline bg-chipbg"
                labelClassName="text-mute"
                label="Workflow engine"
              >
                <WorkflowFace />
              </Plate>
              <Plate
                refCallback={setPlate(2)}
                className="border-rail bg-strip"
                labelClassName="text-dim"
                label="Data & infra"
              >
                <InfraFace />
              </Plate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductFace() {
  return (
    <div className="flex min-h-[52%] gap-2 rounded-[14px] border border-white/35 bg-black/20 p-2">
      <div className="flex w-[22%] flex-col gap-1.5 rounded-[8px] bg-white/15 p-1.5">
        <span className="h-2.5 w-full rounded-[3px] bg-white/90" />
        <span className="h-2 w-[80%] rounded-[3px] bg-white/40" />
        <span className="h-2 w-[65%] rounded-[3px] bg-white/28" />
        <span className="mt-auto h-2.5 w-[70%] rounded-[3px] bg-[#34D399]/90" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex items-center gap-1">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" />
          <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="size-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-1 h-3 flex-1 rounded-full bg-white/25" />
          <span className="animate-live size-2.5 shrink-0 rounded-full bg-[#34D399]" />
        </div>
        {[
          { fill: "82%", live: true },
          { fill: "64%", live: false },
          { fill: "48%", live: false },
        ].map((row) => (
          <span key={row.fill} className="flex items-center gap-1.5">
            <span className="size-3.5 shrink-0 rounded-[5px] bg-white/90" />
            <span className="h-3 min-w-0 flex-1 rounded-[4px] bg-white/20">
              <span
                className={cn(
                  "block h-full rounded-[4px] bg-white",
                  row.live && "animate-bar"
                )}
                style={row.live ? undefined : { width: row.fill }}
              />
            </span>
            <span
              className={cn(
                "size-2 shrink-0 rounded-full",
                row.live ? "animate-live bg-[#34D399]" : "bg-white/35"
              )}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkflowFace() {
  return (
    <div className="flex min-h-[48%] flex-col justify-center gap-3 rounded-[14px] border border-chipline bg-night/30 p-2.5">
      <span className="flex items-center gap-2">
        <span className="size-3.5 rounded-full bg-accent shadow-[0_0_10px_var(--v2-accent)]" />
        <span className="relative h-1.5 flex-1 rounded-full bg-layer-mid">
          <span className="animate-flow absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-bright" />
        </span>
        <span className="size-3.5 rounded-full bg-layer-mid" />
        <span className="h-1.5 flex-1 rounded-full bg-layer-mid" />
        <span className="size-3.5 rounded-full bg-ok" />
      </span>
      <span className="flex items-center gap-2">
        <span className="size-3.5 rounded-full bg-chipline" />
        <span className="h-1.5 flex-1 rounded-full bg-chipline" />
        <span className="size-3.5 rounded-full bg-chipline" />
        <span className="h-1.5 flex-1 rounded-full bg-chipline" />
        <span className="size-3.5 rounded-full bg-chipline" />
      </span>
      <span className="h-3 w-[70%] rounded-[4px] bg-chipline" />
    </div>
  );
}

function InfraFace() {
  return (
    <div className="grid min-h-[52%] grid-cols-3 gap-2 rounded-[14px] border border-white/15 bg-white/5 p-2.5">
      {Array.from({ length: 6 }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "h-6 rounded-[6px]",
            index === 1
              ? "animate-live bg-ok"
              : index === 4
                ? "bg-brand-bright"
                : "bg-layer-mid"
          )}
        />
      ))}
    </div>
  );
}

function Plate({
  refCallback,
  className,
  labelClassName,
  label,
  children,
}: {
  refCallback: (node: HTMLDivElement | null) => void;
  className: string;
  labelClassName: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div
      ref={refCallback}
      className={cn(
        "absolute left-1/2 top-1/2 isolate flex aspect-square w-[84%] flex-col justify-end gap-[clamp(8px,1.8vw,14px)] overflow-hidden rounded-[22px] border p-[clamp(10px,2vw,20px)] [backface-visibility:hidden] [transform-style:flat] will-change-transform md:w-[clamp(132px,34vw,300px)] md:rounded-[26px]",
        className
      )}
      style={{ translate: "-50% -50%" }}
    >
      {children}
      <div
        className={cn(
          "font-mono text-[10.5px] uppercase tracking-[0.08em]",
          labelClassName
        )}
      >
        {label}
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-[13px] py-1.5 font-mono text-[11.5px] tracking-[0.04em] text-mute">
      {children}
    </span>
  );
}

function LayerCap({
  active,
  number,
  title,
  copy,
}: {
  active: boolean;
  number: string;
  title: string;
  copy: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-[13px] transition-opacity duration-1000 ease-out",
        active ? "opacity-100" : "opacity-[0.32]"
      )}
    >
      <span
        className={cn(
          "shrink-0 pt-[3px] font-mono text-[11.5px] transition-colors duration-1000 ease-out",
          active ? "text-accent" : "text-dim"
        )}
      >
        {number}
      </span>
      <div className="min-w-0">
        <div
          className={cn(
            "text-[15.5px] font-semibold tracking-[-0.01em] transition-colors duration-1000 ease-out",
            active ? "text-fog" : "text-mute"
          )}
        >
          {title}
        </div>
        <div className="mt-0.5 font-mono text-[11px] leading-[1.5] text-dim md:mt-1 md:text-[11.5px] md:leading-[1.6]">
          {copy}
        </div>
      </div>
    </div>
  );
}
