import Image from "next/image";
import Link from "next/link";
import ProfilePic from "@/app/images/yatharth.png";
import {
  ALSO_SHIPPED,
  CASE_STUDIES,
  EXPERIENCE,
  PROOF_STATS,
  STACK,
} from "@/lib/site";
import { cn } from "@/lib/utils";
import { ContactSection } from "./contact-section";

export function HomePage() {
  return (
    <div className="overflow-x-hidden bg-paper text-ink">
      <section
        id="top"
        className="v1-wrap pb-[clamp(40px,6vw,72px)] pt-[clamp(52px,9vw,112px)]"
      >
        <div className="mb-[clamp(26px,4vw,44px)] flex items-center gap-2.5">
          <span className="size-[7px] shrink-0 rounded-full bg-live" />
          <span className="font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">
            Senior Software Engineer at Topo — open to founder conversations
          </span>
        </div>

        <h1 className="m-0 max-w-[17ch] text-[clamp(2.5rem,6.6vw,5.1rem)] font-bold leading-[0.99] tracking-[-0.035em]">
          I build the systems
          <br />
          <span className="text-rust-bright">behind the product.</span>
        </h1>

        <div className="mt-[clamp(34px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-[clamp(28px,4vw,56px)]">
          <p className="m-0 max-w-[44ch] text-[clamp(1rem,1.25vw,1.1875rem)] leading-[1.65] text-ink-copy">
            I&apos;m Yatharth Verma — five years on the UI, the APIs, and the
            jobs that have to keep running. Currently at{" "}
            <strong className="font-semibold text-ink">Topo</strong>, previously{" "}
            <strong className="font-semibold text-ink">Artisan AI</strong> and{" "}
            <strong className="font-semibold text-ink">LeadSquared</strong>.
          </p>
          <div>
            <p className="mb-[22px] mt-0 max-w-[40ch] text-[clamp(1rem,1.25vw,1.1875rem)] leading-[1.65] text-ink-copy">
              If you&apos;re a founder and the product is growing faster than the
              systems under it, that&apos;s the conversation I want.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center rounded-full bg-rust px-[22px] py-[13px] text-[15px] font-semibold text-paper transition-colors hover:bg-[#8d3a19]"
              >
                Read the case studies
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-[#D6CCC0] px-[21px] py-3 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-wash">
        <div className="v1-wrap grid grid-cols-[repeat(auto-fit,minmax(min(50%,150px),1fr))] gap-[clamp(20px,3vw,36px)] py-[clamp(26px,3.4vw,40px)]">
          {PROOF_STATS.map((stat) => (
            <div key={stat.label}>
              <div
                className={cn(
                  "font-mono text-[clamp(1.35rem,2.6vw,1.9rem)] font-medium tracking-[-0.02em] text-ink",
                  stat.accent && "text-rust"
                )}
              >
                {stat.value}
              </div>
              <div className="mt-1.5 font-mono text-[11.5px] uppercase tracking-[0.05em] text-ink-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="v1-wrap scroll-mt-20 pb-[clamp(20px,3vw,32px)] pt-[clamp(56px,8vw,104px)]"
      >
        <div className="mb-[clamp(12px,2vw,20px)] flex flex-wrap items-baseline justify-between gap-6">
          <h2 className="m-0 text-[clamp(1.65rem,3.4vw,2.7rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Selected work
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.05em] text-ink-muted">
            Constraint — what I built — how it holds
          </span>
        </div>
        <p className="m-0 max-w-[60ch] text-[clamp(1rem,1.2vw,1.125rem)] leading-[1.65] text-ink-copy">
          Each of these still runs every day for paying customers.
        </p>
      </section>

      <section className="v1-wrap flex flex-col gap-[clamp(18px,2.6vw,28px)]">
        {CASE_STUDIES.map((study) => (
          <article
            key={study.number}
            className="rounded-[18px] border border-[#E2DAD0] bg-card p-[clamp(24px,3.4vw,44px)]"
          >
            <div className="mb-[18px] flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs tracking-[0.06em] text-rust">
                {study.number}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.05em] text-ink-muted">
                {study.company}
              </span>
              {study.badges.map((badge) => (
                <span
                  key={badge.label}
                  className={cn(
                    "rounded-full border px-[9px] py-[3px] font-mono text-[11px] tracking-[0.04em]",
                    badge.tone === "live"
                      ? "border-[#C4D8C9] text-live"
                      : "border-[#DDD4C8] text-ink-muted"
                  )}
                >
                  {badge.label}
                </span>
              ))}
            </div>
            <h3 className="mb-[clamp(20px,2.6vw,30px)] mt-0 max-w-[22ch] text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.08] tracking-[-0.028em]">
              {study.title}
            </h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,248px),1fr))] gap-[clamp(22px,3vw,40px)]">
              <CaseColumn label="The constraint">{study.constraint}</CaseColumn>
              <CaseColumn label="What I built">{study.built}</CaseColumn>
              <CaseColumn label="How it holds">{study.holds}</CaseColumn>
            </div>
            <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap gap-2 border-t border-[#EDE6DC] pt-[clamp(20px,2.6vw,26px)]">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-wash px-2.5 py-[5px] font-mono text-xs text-ink-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="v1-wrap pt-[clamp(44px,6vw,76px)]">
        <h3 className="mb-[clamp(22px,3vw,30px)] mt-0 font-mono text-xs font-normal uppercase tracking-[0.06em] text-ink-muted">
          Also shipped
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[clamp(20px,3vw,34px)]">
          {ALSO_SHIPPED.map((item) => (
            <div key={item.title} className="border-t-2 border-ink pt-4">
              <div className="font-mono text-[clamp(1.1rem,1.8vw,1.4rem)] font-medium tracking-[-0.02em] text-rust">
                {item.metric}
              </div>
              <div className="mb-[7px] mt-2 text-base font-semibold">
                {item.title}
              </div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-ink-muted">
                {item.copy}
                {item.href ? (
                  <>
                    {" "}
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-rust hover:text-ink"
                    >
                      Visit →
                    </Link>
                  </>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="v1-wrap scroll-mt-20 pt-[clamp(56px,8vw,104px)]"
      >
        <h2 className="mb-[clamp(30px,4vw,46px)] mt-0 text-[clamp(1.65rem,3.4vw,2.7rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Experience
        </h2>
        {EXPERIENCE.map((job, index) => (
          <div
            key={job.company}
            className={cn(
              "flex flex-wrap items-start gap-[clamp(20px,2.6vw,28px)]",
              index === 0 && "border-b border-line pb-[clamp(24px,3vw,30px)]",
              index === 1 && "border-b border-line py-[clamp(24px,3vw,30px)]",
              index === 2 && "pt-[clamp(24px,3vw,30px)]"
            )}
          >
            <div className="min-w-0 flex-[0_1_260px]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[clamp(1.25rem,2vw,1.6rem)] font-bold tracking-[-0.025em]">
                  {job.company}
                </span>
                {job.yc ? (
                  <span className="rounded-full border border-[#DDD4C8] px-[9px] py-[3px] font-mono text-[11px] tracking-[0.04em] text-ink-muted">
                    YC W24
                  </span>
                ) : null}
              </div>
              <div className="mt-2 font-mono text-[12.5px] leading-[1.7] text-ink-muted">
                {job.dates}
                <br />
                {job.location}
              </div>
            </div>
            <div className="min-w-0 flex-[1_1_min(100%,420px)]">
              <div className="mb-3 text-[16.5px] font-semibold">{job.title}</div>
              <ul className="m-0 list-disc space-y-2.5 pl-5 marker:text-rust">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="text-[15px] leading-[1.65] text-ink-copy"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="v1-wrap pt-[clamp(56px,8vw,104px)]">
        <h2 className="mb-[clamp(28px,4vw,40px)] mt-0 text-[clamp(1.65rem,3.4vw,2.7rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Stack
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,248px),1fr))] gap-[clamp(24px,3vw,40px)]">
          {STACK.map((group) => (
            <div key={group.label}>
              <div className="mb-[13px] border-b border-[#E2DAD0] pb-2.5 font-mono text-[11.5px] uppercase tracking-[0.06em] text-rust">
                {group.label}
              </div>
              <p className="m-0 text-[15.5px] leading-[1.8] text-ink-copy">
                {group.items}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="v1-wrap scroll-mt-20 pt-[clamp(56px,8vw,104px)]"
      >
        <div className="flex flex-wrap items-start gap-[clamp(30px,4.5vw,64px)]">
          <div className="max-w-[420px] min-w-[min(100%,260px)] flex-[0_1_300px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-wash">
              <Image
                src={ProfilePic}
                alt="Yatharth Verma"
                fill
                className="object-cover object-[center_15%]"
                sizes="(min-width: 768px) 300px, 100vw"
                priority
              />
            </div>
          </div>
          <div className="min-w-0 flex-[1_1_min(100%,420px)]">
            <h2 className="mb-[clamp(22px,3vw,30px)] mt-0 max-w-[26ch] text-[clamp(1.65rem,3.4vw,2.7rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              I&apos;ve shipped this at three companies
            </h2>
            <p className="mb-[18px] mt-0 max-w-[58ch] text-[clamp(1rem,1.2vw,1.125rem)] leading-[1.7] text-ink-copy">
              A sync that has to survive a webhook storm. A job you can pause
              and resume after someone edits the record in another tab. Email
              that actually arrives. That&apos;s the work I look for.
            </p>
            <p className="mb-[18px] mt-0 max-w-[58ch] text-[clamp(1rem,1.2vw,1.125rem)] leading-[1.7] text-ink-copy">
              LeadSquared in Bangalore, Artisan in San Francisco, Topo in Paris.
              I&apos;m used to owning a feature all the way through — UI, API,
              and the jobs behind it.
            </p>
            <div className="mt-[clamp(26px,3.4vw,36px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-[22px] border-t border-line pt-[clamp(24px,3vw,30px)]">
              <div>
                <div className="mb-2 font-mono text-[11.5px] uppercase tracking-[0.06em] text-ink-muted">
                  Education
                </div>
                <div className="text-[15.5px] leading-[1.6] text-ink">
                  B.Tech, Computer Science &amp; Engineering
                  <br />
                  <span className="text-ink-muted">
                    Lovely Professional University · CGPA 9.0/10 · 2017–2021
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-2 font-mono text-[11.5px] uppercase tracking-[0.06em] text-ink-muted">
                  Teaching
                </div>
                <div className="text-[15.5px] leading-[1.6] text-ink">
                  3.6K+ subscribers on YouTube
                  <br />
                  <span className="text-ink-muted">
                  Redis internals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        showYouTube
        description="If you're a founder and the product is growing faster than the systems under it, that's the conversation I want. Integrations, volume, reliability, in-product AI."
      />
    </div>
  );
}

function CaseColumn({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  return (
    <div>
      <div className="mb-3.5 border-b border-[#E2DAD0] pb-2.5 font-mono text-[11.5px] uppercase tracking-[0.06em] text-rust">
        {label}
      </div>
      <p className="m-0 text-[15.5px] leading-[1.65] text-ink-copy">{children}</p>
    </div>
  );
}
