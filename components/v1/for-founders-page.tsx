import {
  FOUNDER_PROBLEMS,
  FOUNDER_STATS,
  HOW_I_WORK,
  PRACTICAL_ANSWERS,
} from "@/lib/site";
import { cn } from "@/lib/utils";
import { ContactSection } from "./contact-section";

export function ForFoundersPage() {
  return (
    <div className="overflow-x-hidden bg-paper text-ink">
      <section
        id="top"
        className="v1-wrap pb-[clamp(40px,6vw,72px)] pt-[clamp(48px,8vw,100px)]"
      >
        <div className="mb-[clamp(24px,4vw,40px)] flex items-center gap-2.5">
          <span className="size-[7px] shrink-0 rounded-full bg-rust" />
          <span className="font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">
            For founders &amp; early engineering teams
          </span>
        </div>

        <h1 className="m-0 max-w-[19ch] text-[clamp(2.4rem,6.2vw,4.8rem)] font-bold leading-none tracking-[-0.035em]">
          The demo works.
          <br />
          <span className="text-rust-bright">Now make it survive Monday.</span>
        </h1>

        <div className="mt-[clamp(32px,5vw,52px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-[clamp(28px,4vw,56px)]">
          <div>
            <p className="mb-4 mt-0 max-w-[46ch] text-[clamp(1rem,1.25vw,1.1875rem)] leading-[1.65] text-ink-copy">
              There&apos;s a specific moment in a product&apos;s life: demand is
              real, customers are signing, and the thing you built to prove the
              idea starts buckling under the load of people actually using it.
              Integrations drift. Jobs die halfway with no trace. The app that
              felt fast at 20 customers crawls at 200.
            </p>
            <p className="m-0 max-w-[46ch] text-[clamp(1rem,1.25vw,1.1875rem)] leading-[1.65] text-ink-copy">
              That&apos;s the moment I&apos;m good at. I&apos;ve been the engineer
              on the other side of it at three companies — including two YC ones.
            </p>
          </div>
          <div className="border-l-2 border-rust pl-[clamp(20px,2.6vw,30px)]">
            <p className="mb-[22px] mt-0 max-w-[38ch] text-[clamp(1rem,1.25vw,1.1875rem)] leading-[1.65] text-ink-copy">
              I&apos;m not looking for a contract. I&apos;m looking for a senior or
              founding-engineer seat at a YC-stage company where the hard part is
              the system, not the slide — whatever the product happens to be.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-rust px-[22px] py-[13px] text-[15px] font-semibold text-paper transition-colors hover:bg-[#8d3a19]"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-wash">
        <div className="v1-wrap grid grid-cols-[repeat(auto-fit,minmax(min(50%,160px),1fr))] gap-[clamp(20px,3vw,36px)] py-[clamp(26px,3.4vw,40px)]">
          {FOUNDER_STATS.map((stat) => (
            <div key={stat.label}>
              <div
                className={cn(
                  "font-mono text-[clamp(1.3rem,2.4vw,1.8rem)] font-medium tracking-[-0.02em] text-ink",
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

      <section className="v1-wrap pt-[clamp(56px,8vw,104px)]">
        <div className="mb-[clamp(30px,4vw,46px)] flex flex-wrap items-baseline justify-between gap-6">
          <h2 className="m-0 max-w-[24ch] text-[clamp(1.65rem,3.4vw,2.7rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            If any of these sound familiar
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.05em] text-ink-muted">
            Five problems I&apos;ve already solved
          </span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(18px,2.4vw,24px)]">
          {FOUNDER_PROBLEMS.map((problem) => (
            <div
              key={problem.number}
              className="rounded-2xl border border-[#E2DAD0] bg-card p-[clamp(22px,2.8vw,32px)]"
            >
              <div className="mb-3.5 font-mono text-xs tracking-[0.06em] text-rust">
                {problem.number}
              </div>
              <h3 className="mb-3.5 mt-0 text-[clamp(1.1rem,1.7vw,1.3rem)] font-bold leading-[1.25] tracking-[-0.02em]">
                {problem.title}
              </h3>
              <p className="mb-4 mt-0 text-[15px] leading-[1.65] text-ink-copy">
                {problem.copy}
              </p>
              <div className="border-t border-[#EDE6DC] pt-3.5 font-mono text-xs text-ink-muted">
                {problem.proof}
              </div>
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-[#D6CCC0] bg-wash p-[clamp(22px,2.8vw,32px)]">
            <h3 className="mb-3 mt-0 text-[clamp(1.1rem,1.7vw,1.3rem)] font-bold leading-[1.25] tracking-[-0.02em]">
              Something else?
            </h3>
            <p className="mb-[18px] mt-0 text-[15px] leading-[1.65] text-ink-copy">
              If it&apos;s a system that has to be correct while it&apos;s busy,
              it&apos;s probably my kind of problem.
            </p>
            <a
              href="#contact"
              className="font-mono text-[13px] font-medium tracking-[0.03em] text-rust hover:text-ink"
            >
              Tell me about it →
            </a>
          </div>
        </div>
      </section>

      <section className="v1-wrap pt-[clamp(56px,8vw,104px)]">
        <div className="mb-[clamp(30px,4vw,44px)] flex flex-wrap items-baseline justify-between gap-6">
          <h2 className="m-0 text-[clamp(1.65rem,3.4vw,2.7rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            How I work
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.05em] text-ink-muted">
            Three habits, not a methodology
          </span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[clamp(24px,3.4vw,44px)]">
          {HOW_I_WORK.map((habit) => (
            <div key={habit.number} className="border-t-2 border-ink pt-[18px]">
              <div className="mb-3 font-mono text-xs tracking-[0.06em] text-rust">
                {habit.number}
              </div>
              <h3 className="mb-3 mt-0 text-[clamp(1.15rem,1.9vw,1.4rem)] font-bold leading-[1.2] tracking-[-0.022em]">
                {habit.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.68] text-ink-copy">
                {habit.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="v1-wrap pt-[clamp(56px,8vw,104px)]">
        <h2 className="mb-[clamp(26px,3.4vw,38px)] mt-0 text-[clamp(1.65rem,3.4vw,2.7rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Practical answers
        </h2>
        {PRACTICAL_ANSWERS.map((item, index) => (
          <div
            key={item.question}
            className={cn(
              "flex flex-wrap items-start gap-[clamp(20px,2.6vw,32px)] py-[clamp(22px,3vw,28px)]",
              "border-t border-line",
              index === PRACTICAL_ANSWERS.length - 1 && "border-b"
            )}
          >
            <h3 className="m-0 max-w-[26ch] flex-[0_1_260px] text-[clamp(1.05rem,1.6vw,1.25rem)] font-bold leading-[1.3] tracking-[-0.02em]">
              {item.question}
            </h3>
            <p className="m-0 min-w-0 flex-[1_1_min(100%,420px)] text-[15.5px] leading-[1.7] text-ink-copy">
              {item.answer}
            </p>
          </div>
        ))}
      </section>

      <ContactSection
        showCaseStudies
        description="A short note about what you're building and where it hurts is plenty — the domain matters far less than the shape of the problem. If I'm not the right fit I'll say so quickly, and I'll usually have an opinion about the problem anyway."
      />
    </div>
  );
}
