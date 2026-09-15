import Image from "next/image";
import { SITE, SIDE_VIDEOS } from "@/lib/site";

export function OnTheSide() {
  return (
    <section id="side" className="v2-wrap scroll-mt-20 pt-[clamp(56px,8vw,108px)]">
      <div className="mx-auto mb-[clamp(28px,4vw,42px)] max-w-[660px] text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-[13px] py-1.5 font-mono text-[11.5px] tracking-[0.04em] text-mute">
          On the side
        </span>
        <h2 className="mt-[clamp(18px,2.6vw,26px)] text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.06] tracking-[-0.035em]">
          A side project,
          <br />
          <span className="text-dim">and a few videos on internals.</span>
        </h2>
        <p className="mt-[clamp(14px,2vw,20px)] text-[clamp(0.9375rem,1.1vw,1.0625rem)] leading-[1.65] text-mute">
          Tricity Rent is live. The videos are me working through Redis and uv.
        </p>
      </div>

      <article className="overflow-hidden rounded-[20px] border border-line bg-panel">
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="min-w-0 flex-1 p-[clamp(22px,3vw,40px)]">
            <div className="mb-3 flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-[11.5px] uppercase tracking-[0.06em] text-dim">
                Side project · live
              </span>
              <span className="rounded-full border border-softline bg-soft px-[11px] py-1 font-mono text-[11.5px] text-accent">
                Tricity
              </span>
            </div>
            <h3 className="mb-3 max-w-[18ch] text-[clamp(1.5rem,3vw,2.15rem)] font-bold leading-[1.08] tracking-[-0.035em]">
              A rent map for the Tricity
            </h3>
            <p className="mb-5 max-w-[52ch] text-[15px] leading-[1.65] text-mute">
              A free, anonymous map of rents people actually pay in Chandigarh,
              Mohali, Panchkula, Zirakpur and Kharar. Medians by sector and BHK.
              Locations are fuzzed to about 100&nbsp;m. No brokers, no login.
            </p>
            <div className="mb-5 flex flex-wrap gap-2">
              {["Next.js", "PostGIS", "MapLibre", "Privacy"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-[7px] border border-line px-2.5 py-[5px] font-mono text-[11.5px] text-mute"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-[11px]">
              <a
                href={SITE.tricity.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand px-[22px] py-[13px] text-[14.5px] font-semibold text-onbrand hover:bg-brand-hover"
              >
                Open the map
              </a>
              <a
                href={SITE.tricity.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-[21px] py-3 text-[14.5px] font-semibold text-fog hover:border-brand-bright"
              >
                GitHub
              </a>
            </div>
          </div>
          <RentMapPreview />
        </div>
      </article>

      <div className="mt-[clamp(16px,2.4vw,22px)] flex flex-wrap gap-[clamp(14px,2vw,20px)]">
        {SIDE_VIDEOS.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noreferrer"
            className="group min-w-0 flex-[1_1_min(100%,220px)] overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-brand-bright"
          >
            <div className="relative aspect-video overflow-hidden bg-strip">
              <Image
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt=""
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <span className="absolute bottom-2 right-2 rounded-md bg-black/80 px-1.5 py-0.5 font-mono text-[10px] text-white">
                {video.length}
              </span>
            </div>
            <div className="p-[clamp(16px,2vw,20px)]">
              <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
                YouTube
              </div>
              <div className="mb-1.5 text-[15px] font-semibold leading-snug tracking-[-0.015em]">
                {video.title}
              </div>
              <p className="text-[13.5px] leading-[1.55] text-dim">{video.caption}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-[clamp(18px,2.4vw,24px)] text-center">
        <a
          href={SITE.youtube}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-mute hover:text-fog"
        >
          3.6K+ on YouTube · the rest of the series →
        </a>
      </div>
    </section>
  );
}

function RentMapPreview() {
  const pins = [
    { x: 22, y: 28, r: 7 },
    { x: 38, y: 42, r: 5 },
    { x: 54, y: 24, r: 8 },
    { x: 48, y: 58, r: 6 },
    { x: 68, y: 46, r: 9 },
    { x: 74, y: 68, r: 5 },
    { x: 32, y: 70, r: 6 },
  ];

  return (
    <div className="w-full min-w-0 overflow-hidden border-t border-rail bg-surface md:max-w-[400px] md:flex-[0_1_400px] md:border-l md:border-t-0">
      <div className="flex justify-between gap-2 border-b border-inset px-3.5 py-2.5">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-dim">
          Medians · sector × BHK
        </span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-accent">
          Anonymous
        </span>
      </div>
      <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[4/3]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--v2-inset) 1px, transparent 1px), linear-gradient(to bottom, var(--v2-inset) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {pins.map((pin) => (
          <span
            key={`${pin.x}-${pin.y}`}
            className="absolute rounded-full bg-brand"
            style={{
              left: `${pin.x}%`,
              top: `${pin.y}%`,
              width: pin.r,
              height: pin.r,
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 0 6px color-mix(in srgb, var(--v2-brand) 22%, transparent)",
            }}
          />
        ))}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.05em] text-dim">
          <span>Chandigarh</span>
          <span>Mohali</span>
          <span>Panchkula</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-[18px] gap-y-2 border-t border-inset px-3.5 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-dim">
          ~100 m fuzz
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-accent">
          No login
        </span>
      </div>
    </div>
  );
}
