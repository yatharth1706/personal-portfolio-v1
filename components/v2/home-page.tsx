import Image from "next/image";
import ProfilePic from "@/app/images/yatharth-about.jpg";
import { ALSO_SHIPPED, EXPERIENCE, SITE } from "@/lib/site";
import { HeroConsole } from "./hero-console";
import { LayersDeck } from "./layers-deck";
import { OnTheSide } from "./on-the-side";
import { ProofStats } from "./proof-stats";
import { TaskChart } from "./task-chart";

function Badge({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <span
      className={
        accent
          ? "inline-flex items-center gap-2 rounded-full border border-softline bg-soft px-[13px] py-1.5 font-mono text-[11.5px] tracking-[0.04em] text-accent"
          : "inline-flex items-center gap-2 rounded-full border border-line bg-panel px-[13px] py-1.5 font-mono text-[11.5px] tracking-[0.04em] text-mute"
      }
    >
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  accent,
  copy,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-[660px] text-center">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-[clamp(18px,2.6vw,26px)] text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.06] tracking-[-0.035em]">
        {title}
        <br />
        <span className="text-dim">{accent}</span>
      </h2>
      {copy ? (
        <p className="mt-[clamp(14px,2vw,20px)] text-[clamp(0.9375rem,1.1vw,1.0625rem)] leading-[1.65] text-mute">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[7px] border border-line px-2.5 py-[5px] font-mono text-[11.5px] text-mute">
      {children}
    </span>
  );
}

export function HomePage() {
  return (
    <div className="bg-night text-fog">
      <section id="top" className="v2-wrap pb-[clamp(32px,5vw,56px)] pt-[clamp(44px,7vw,96px)]">
        <div className="flex flex-wrap items-center gap-[clamp(28px,4vw,56px)]">
          <div className="min-w-0 flex-[1_1_min(100%,400px)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-[13px] py-1.5 font-mono text-[11.5px] tracking-[0.04em] text-mute">
              <span className="size-1.5 shrink-0 rounded-full bg-ok" />
              Open to senior / founding roles
            </span>
            <h1 className="mt-[clamp(18px,3vw,30px)] max-w-[18ch] text-[clamp(2.05rem,8.4vw,4.1rem)] font-bold leading-[1.04] tracking-[-0.04em]">
              I build the systems
              <br />
              <span className="text-dim">behind the product.</span>
            </h1>
            <p className="mt-[clamp(16px,2.6vw,24px)] max-w-[54ch] text-[clamp(0.975rem,1.2vw,1.125rem)] leading-[1.65] text-mute">
              Five years on the UI, the APIs, and the jobs that have to keep
              running. Currently at Topo (YC W24). Before that, Artisan AI
              (YC W24) and LeadSquared. I usually own a feature all the way
              through, and most of it is still in production.
            </p>
            <div className="mt-[clamp(22px,3.4vw,32px)] flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-[11px]">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-brand px-[22px] py-[13px] text-[14.5px] font-semibold text-onbrand transition-colors hover:bg-brand-hover"
              >
                See what I shipped
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-line bg-panel px-[21px] py-3 text-[14.5px] font-semibold text-fog transition-colors hover:border-brand-bright"
              >
                Get in touch
              </a>
            </div>
            <div className="mt-[clamp(26px,3.4vw,34px)] flex flex-wrap items-center gap-x-3.5 gap-y-2.5">
              <span className="font-mono text-xs text-dim">Core stack</span>
              {["React", "TypeScript", "Python"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-[11px] py-[5px] font-mono text-xs text-mute"
                >
                  <span className="size-[5px] rounded-full bg-accent" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="min-w-0 flex-[1_1_min(100%,380px)]">
            <HeroConsole />
          </div>
        </div>
      </section>

      <section className="border-y border-hair bg-strip">
        <div className="v2-wrap flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 py-[clamp(18px,2.6vw,26px)] text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-dim">
            Shipped at
          </span>
          <span className="inline-flex items-center gap-2.5 text-base font-semibold text-mute">
            Topo
            <span className="rounded-full border border-softline px-[7px] py-0.5 font-mono text-[10.5px] text-accent">
              YC W24
            </span>
          </span>
          <span className="inline-flex items-center gap-2.5 text-base font-semibold text-mute">
            Artisan AI
            <span className="rounded-full border border-softline px-[7px] py-0.5 font-mono text-[10.5px] text-accent">
              YC W24
            </span>
          </span>
          <span className="text-base font-semibold text-mute">LeadSquared</span>
        </div>
      </section>

      <section className="v2-wrap pt-[clamp(52px,7vw,96px)]">
        <SectionHeading
          eyebrow="Proof"
          title="A few numbers"
          accent="from production."
          copy="Daily volume on systems I still work on at Topo, plus deliverability at Artisan."
        />
        <ProofStats />
      </section>

      <section id="work" className="v2-wrap scroll-mt-20 pt-[clamp(56px,8vw,108px)]">
        <div className="mx-auto mb-[clamp(30px,4vw,48px)] max-w-[660px] text-center">
          <SectionHeading
            eyebrow="Selected work"
            title="Selected work"
            accent="still in production."
            copy="Three of them in detail, then a few more below."
          />
        </div>

        <div className="flex flex-col gap-[clamp(16px,2.4vw,22px)]">
          <article className="rounded-[20px] border border-brand-bright bg-featured p-[clamp(22px,3vw,40px)] shadow-[var(--v2-featured-shadow)]">
            <div className="mb-[clamp(16px,2.2vw,22px)] flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-[11.5px] uppercase tracking-[0.06em] text-accent-mid">
                01 · Topo · Senior Software Engineer
              </span>
              <span className="rounded-full border border-softline bg-soft px-[11px] py-1 font-mono text-[11.5px] text-accent">
                Featured
              </span>
            </div>
            <h3 className="mb-[clamp(12px,1.8vw,16px)] max-w-[24ch] text-[clamp(1.5rem,3vw,2.3rem)] font-bold leading-[1.08] tracking-[-0.035em]">
              HubSpot CRM sync
            </h3>
            <p className="mb-[clamp(22px,3vw,30px)] max-w-[56ch] text-[clamp(1rem,1.4vw,1.1875rem)] leading-[1.55] text-mute">
              Leads, companies, and activity go Topo → HubSpot. HubSpot writes
              back through webhooks to pause outreach. Owners are the piece
              that syncs both ways.
            </p>
            <div className="flex flex-wrap gap-[clamp(20px,2.6vw,34px)]">
              <WorkCol
                label="Constraint"
                copy="Customers already live in HubSpot. Activity has to show up there. A closed deal has to stop the sequence in Topo. Owners can't be different people on each side."
              />
              <WorkCol
                label="Built"
                copy="Outbound sync for leads, companies, and activity. Webhooks to exclude contacts and pause sequences. Bidirectional owner sync. Reconciliation you can run again if a job dies."
              />
              <WorkCol
                label="Holds"
                copy="50–100K+ leads a day, 200+ customers."
              />
            </div>
            <SyncDiagram />
            <div className="mt-[clamp(22px,3vw,30px)] flex flex-wrap gap-2 border-t border-inset pt-[clamp(18px,2.4vw,24px)]">
              {["Python", "FastAPI", "PostgreSQL", "Webhooks"].map(
                (tag) => (
                  <Tag key={tag}>{tag}</Tag>
                )
              )}
            </div>
          </article>

          <article className="rounded-[20px] border border-line bg-panel p-[clamp(22px,3vw,40px)] transition-colors hover:border-brand-bright">
            <div className="mb-[clamp(16px,2.2vw,22px)] flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-[11.5px] uppercase tracking-[0.06em] text-dim">
                02 · Topo · Senior Software Engineer
              </span>
              <span className="font-mono text-[11.5px] text-mute">
                10–20K tasks / day
              </span>
            </div>
            <h3 className="mb-[clamp(12px,1.8vw,16px)] max-w-[24ch] text-[clamp(1.5rem,3vw,2.3rem)] font-bold leading-[1.08] tracking-[-0.035em]">
              Daily sales workspace
            </h3>
            <p className="mb-[clamp(22px,3vw,30px)] max-w-[56ch] text-[clamp(1rem,1.4vw,1.1875rem)] leading-[1.55] text-mute">
              A React workspace for email, calls, and LinkedIn, plus the API
              under it.
            </p>
            <div className="flex flex-wrap items-start gap-[clamp(20px,2.6vw,34px)]">
              <div className="min-w-0 flex-[1_1_min(100%,240px)]">
                <p className="mb-4 text-[15px] leading-[1.65] text-mute">
                  Reps were jumping between three tools, with no shared queue
                  and no reliable writeback to the CRM. I built Tasks and the
                  Daily Sales Workflow: assignment, reminders, bulk actions,
                  CRM sync, and AI drafts in one place.
                </p>
                <p className="text-[15px] leading-[1.65] text-mute">
                  It got faster from pagination, indexes, query work, and
                  caching. We didn&apos;t add more machines.
                </p>
              </div>
              <TaskChart />
            </div>
          </article>

          <article className="rounded-[20px] border border-line bg-panel p-[clamp(22px,3vw,40px)] transition-colors hover:border-brand-bright">
            <div className="mb-[clamp(16px,2.2vw,22px)] flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-[11.5px] uppercase tracking-[0.06em] text-dim">
                03 · Artisan AI · Senior Software Engineer
              </span>
              <span className="font-mono text-[11.5px] text-ok">
                50% → 95% delivered
              </span>
            </div>
            <h3 className="mb-[clamp(12px,1.8vw,16px)] max-w-[24ch] text-[clamp(1.5rem,3vw,2.3rem)] font-bold leading-[1.08] tracking-[-0.035em]">
              Half the email wasn&apos;t landing
            </h3>
            <p className="mb-[clamp(22px,3vw,30px)] max-w-[56ch] text-[clamp(1rem,1.4vw,1.1875rem)] leading-[1.55] text-mute">
              Artisan is an outbound product. At 50% delivered, half the send
              volume was wasted.
            </p>
            <div className="flex flex-wrap items-start gap-[clamp(20px,2.6vw,34px)]">
              <div className="min-w-0 flex-[1_1_min(100%,240px)]">
                <p className="mb-4 text-[15px] leading-[1.65] text-mute">
                  Deliverability was at 50% when I joined. I reworked sending,
                  quality checks, and filtering, and got it to 95%. The
                  scheduler now holds 10K+ emails a day.
                </p>
                <p className="text-[15px] leading-[1.65] text-mute">
                  I put analytics in at the same time, so a drop shows up
                  before a customer reports it.
                </p>
              </div>
              <DeliveryGrid />
            </div>
          </article>
        </div>

        <div className="mt-[clamp(16px,2.4vw,22px)] flex flex-wrap gap-[clamp(14px,2vw,20px)]">
          {ALSO_SHIPPED.map((item) => (
            <AlsoCard
              key={item.title}
              kicker={item.kicker}
              metric={item.metric}
              title={item.title}
              copy={item.copy}
            />
          ))}
        </div>
      </section>

      <LayersDeck />

      <section id="experience" className="v2-wrap scroll-mt-20 pt-[clamp(56px,8vw,108px)]">
        <div className="mx-auto mb-[clamp(28px,4vw,42px)] max-w-[660px] text-center">
          <SectionHeading
            eyebrow="Experience"
            title="Five years,"
            accent="three startups."
          />
        </div>
        <div className="overflow-hidden rounded-[18px] border border-line bg-surface">
          {EXPERIENCE.map((job, index) => (
            <ExperienceRow
              key={job.company}
              initial={job.company[0]}
              accent={index === 0}
              company={job.company}
              yc={job.yc}
              now={index === 0}
              dates={job.dates}
              location={job.location}
              title={job.title}
              points={job.points}
              bordered={index > 0}
            />
          ))}
        </div>
      </section>

      <section id="stack" className="v2-wrap scroll-mt-20 pt-[clamp(56px,8vw,108px)]">
        <div className="mx-auto mb-[clamp(30px,4vw,44px)] max-w-[660px] text-center">
          <SectionHeading
            eyebrow="Stack"
            title="What I use"
            accent="day to day."
          />
        </div>
        <div className="flex flex-col items-center gap-[clamp(10px,1.4vw,14px)]">
          <StackRow
            items={[
              ["TypeScript", "App and APIs"],
              ["React · Next.js", "The UI"],
              ["Redis", "Cache and queues"],
            ]}
          />
          <StackRow
            items={[
              ["Python", "Backend"],
              ["FastAPI", "HTTP APIs"],
              ["Temporal", "Jobs that can pause"],
              ["PostgreSQL", "The database"],
            ]}
          />
          <StackRow
            items={[
              ["AWS · Docker", "Where it runs"],
              ["Terraform", "Infra as code"],
              ["Datadog", "When something breaks"],
            ]}
          />
          <StackRow
            items={[
              ["LLM APIs", "Inside the product"],
              ["HubSpot · Salesforce · Stripe", "Integrations"],
            ]}
          />
        </div>
      </section>

      <section id="about" className="v2-wrap scroll-mt-20 pt-[clamp(56px,8vw,108px)]">
        <div className="flex flex-wrap items-start gap-[clamp(26px,4vw,52px)]">
          <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[18px] border border-line bg-surface md:mx-0 md:max-w-[380px] md:min-w-[min(100%,240px)] md:flex-[0_1_300px]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={ProfilePic}
                alt="Yatharth Verma"
                fill
                className="object-cover object-[center_68%]"
                sizes="(min-width: 768px) 300px, 100vw"
              />
            </div>
            <div className="border-t border-inset px-3.5 py-[11px] font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
              Yatharth Verma · India
            </div>
          </div>
          <div className="min-w-0 flex-[1_1_min(100%,400px)]">
            <Badge>About</Badge>
            <h2 className="mb-[clamp(16px,2.2vw,22px)] mt-[clamp(18px,2.6vw,26px)] max-w-[24ch] text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold leading-[1.07] tracking-[-0.035em]">
              I&apos;ve shipped this at three companies
            </h2>
            <p className="mb-4 max-w-[58ch] text-[clamp(1rem,1.2vw,1.0625rem)] leading-[1.7] text-mute">
              A sync that has to survive a webhook storm. A job you can pause
              and resume after someone edits the record in another tab. Email
              that actually arrives. That&apos;s the work I look for.
            </p>
            <p className="max-w-[58ch] text-[clamp(1rem,1.2vw,1.0625rem)] leading-[1.7] text-mute">
              LeadSquared in Bangalore, Artisan in San Francisco, Topo in Paris.
              I&apos;m used to owning a feature all the way through — UI, API,
              and the jobs behind it.
            </p>
            <div className="mt-[clamp(24px,3.4vw,32px)] flex flex-wrap gap-[clamp(18px,3vw,40px)] border-t border-inset pt-[clamp(20px,2.6vw,26px)]">
              <div className="flex-[0_1_260px]">
                <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
                  Education
                </div>
                <div className="text-[14.5px] leading-[1.6]">
                  B.Tech, Computer Science &amp; Engineering
                  <br />
                  <span className="text-dim">
                    Lovely Professional University · CGPA 9.0/10 · 2017–2021
                  </span>
                </div>
              </div>
              <div className="flex-[0_1_200px]">
                <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
                  Teaching
                </div>
                <div className="text-[14.5px] leading-[1.6]">
                  3.6K+ subscribers on YouTube
                  <br />
                  <span className="text-dim">Redis internals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OnTheSide />

      <section id="resume" className="v2-wrap scroll-mt-20 pt-[clamp(56px,8vw,108px)]">
        <div className="mx-auto mb-[clamp(28px,4vw,42px)] max-w-[660px] text-center">
          <SectionHeading
            eyebrow="Résumé"
            title="Résumé"
            accent="on the page, and as a PDF."
            copy="Same content either way. Use whichever is easier."
          />
          <div className="mt-[clamp(22px,3vw,30px)] flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[11px]">
            <a
              href={SITE.resume}
              download
              className="inline-flex items-center justify-center rounded-full bg-brand px-[22px] py-[13px] text-[14.5px] font-semibold text-onbrand hover:bg-brand-hover"
            >
              Download PDF
            </a>
            <a
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-line bg-panel px-[21px] py-3 text-[14.5px] font-semibold text-fog hover:border-brand-bright"
            >
              Open in a new tab
            </a>
          </div>
        </div>
        <ResumeCard />
      </section>

      <section id="looking" className="v2-wrap scroll-mt-20 pt-[clamp(56px,8vw,108px)]">
        <div className="mx-auto mb-[clamp(28px,4vw,42px)] max-w-[660px] text-center">
          <Badge accent>
            <span className="size-1.5 shrink-0 rounded-full bg-ok" />
            Open to conversations
          </Badge>
          <h2 className="mt-[clamp(18px,2.6vw,26px)] text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.06] tracking-[-0.035em]">
            What I&apos;m looking for
            <br />
            <span className="text-dim">next.</span>
          </h2>
          <p className="mt-[clamp(14px,2vw,20px)] text-[clamp(0.9375rem,1.1vw,1.0625rem)] leading-[1.65] text-mute">
            A few specifics so you can skip the email if it&apos;s not a fit.
          </p>
        </div>
        <div className="flex flex-wrap gap-[clamp(14px,2vw,20px)]">
          <LookCard
            kicker="Role"
            title="Senior · Staff · Founding engineer"
            copy="I want to own a system on a small team."
          />
          <LookCard
            kicker="Focus"
            title="Full-stack engineer"
            copy="React and Next.js on the front. Python, jobs, and infra behind it."
          />
          <LookCard
            kicker="Where"
            title="Remote or onsite"
            copy="Three years remote with an SF team, then a Paris one. Open to onsite or moving for the right team."
          />
          <LookCard
            kicker="Status"
            title="Open to conversations"
            green
            copy="I'm at Topo. Happy to talk even if neither of us is sure yet."
          />
        </div>
      </section>

      <section
        id="contact"
        className="v2-wrap mb-0 mt-[clamp(56px,8vw,108px)] pb-[clamp(44px,6vw,80px)]"
      >
        <div className="rounded-3xl border border-line bg-surface px-[clamp(22px,4vw,56px)] py-[clamp(34px,6vw,80px)] text-center">
          <Badge accent>Next step</Badge>
          <h2 className="mx-auto mt-[clamp(20px,3vw,30px)] max-w-[20ch] text-[clamp(2rem,5vw,3.8rem)] font-bold leading-[1.02] tracking-[-0.04em]">
            If you&apos;re hiring,
            <br />
            <span className="text-dim">email me.</span>
          </h2>
          <p className="mx-auto mt-[clamp(16px,2.4vw,24px)] max-w-[52ch] text-[clamp(1rem,1.2vw,1.125rem)] leading-[1.65] text-mute">
            If you&apos;re a founder and the product is growing faster than the
            systems under it, email me. Integrations, volume, reliability,
            in-product AI.
          </p>
          <div className="mt-[clamp(26px,3.6vw,36px)] flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[11px]">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-[13px] text-[14.5px] font-semibold text-onbrand hover:bg-brand-hover"
            >
              Email me
            </a>
            <a
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-line bg-panel px-[23px] py-3 text-[14.5px] font-semibold text-fog hover:border-brand-bright"
            >
              Résumé (PDF)
            </a>
          </div>
          <div className="mt-[clamp(22px,3vw,30px)] break-all font-mono text-[13px] text-dim">
            {SITE.email} · {SITE.phone}
          </div>
          <div className="mt-[clamp(26px,3.6vw,36px)] flex flex-wrap justify-center gap-[clamp(14px,2.4vw,26px)] border-t border-inset pt-[clamp(20px,2.6vw,26px)]">
            <a href={SITE.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-mute hover:text-fog">
              GitHub
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="text-sm font-medium text-mute hover:text-fog">
              LinkedIn
            </a>
            <a href={SITE.youtube} target="_blank" rel="noreferrer" className="text-sm font-medium text-mute hover:text-fog">
              YouTube
            </a>
            <a href={SITE.website} target="_blank" rel="noreferrer" className="text-sm font-medium text-mute hover:text-fog">
              yatharthverma.dev
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function WorkCol({ label, copy }: { label: string; copy: string }) {
  return (
    <div className="min-w-0 flex-[1_1_min(100%,220px)]">
      <div className="mb-3 border-b border-rail pb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
        {label}
      </div>
      <p className="text-[15px] leading-[1.65] text-mute">{copy}</p>
    </div>
  );
}

function SyncDiagram() {
  return (
    <div className="mt-[clamp(22px,3vw,30px)] rounded-xl border border-rail bg-surface">
      <div className="flex flex-wrap justify-between gap-2.5 border-b border-inset px-3.5 py-2.5">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-dim">
          How Topo talks to HubSpot
        </span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-accent">
          Owners both ways
        </span>
      </div>
      <div className="flex flex-wrap gap-[clamp(10px,2vw,18px)] p-[clamp(16px,2.2vw,22px)]">
        <div className="min-w-0 flex-[1_1_min(100%,140px)]">
          <div className="mb-[11px] border-b border-rail pb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-dim">
              Topo
            </span>
          </div>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex h-5 items-center gap-1.5">
              <span className="size-1.5 shrink-0 rounded-full bg-accent" />
              <span className="h-[5px] flex-1 rounded-[2px] bg-rail" />
            </div>
          ))}
        </div>
        <div className="min-w-16 flex-[0_1_100px]">
          <div className="mb-[11px] pb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-dim">
              Sync
            </span>
          </div>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex h-5 items-center gap-1">
              <span className="h-px flex-1 bg-line" />
              <span
                className="animate-flow size-[5px] shrink-0 rounded-full bg-brand-bright"
                style={{ animationDelay: `${index * 0.45}s` }}
              />
              <span className="h-px flex-1 bg-line" />
            </div>
          ))}
        </div>
        <div className="min-w-0 flex-[1_1_min(100%,140px)]">
          <div className="mb-[11px] border-b border-rail pb-2 text-right">
            <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-dim">
              HubSpot
            </span>
          </div>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex h-5 flex-row-reverse items-center gap-1.5">
              <span className="size-1.5 shrink-0 rounded-full bg-accent" />
              <span className="h-[5px] flex-1 rounded-[2px] bg-rail" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-x-[18px] gap-y-2 border-t border-inset px-3.5 py-2.5">
        {["Leads", "Companies", "Activity", "Owners"].map((item) => (
          <span key={item} className="font-mono text-[10px] uppercase tracking-[0.05em] text-dim">
            {item}
          </span>
        ))}
        <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-accent">
          Webhooks
        </span>
      </div>
    </div>
  );
}

function DeliveryGrid() {
  return (
    <div className="min-w-0 flex-[1_1_min(100%,240px)] rounded-xl border border-rail bg-surface">
      <div className="border-b border-inset px-3.5 py-2.5">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-dim">
          Of every 20 sent, how many arrive
        </span>
      </div>
      <div className="flex flex-wrap gap-[clamp(16px,3vw,28px)] px-3.5 py-4">
        <GridBlock label="50%" caption="Before" filled={10} color="var(--v2-chart-mid)" />
        <GridBlock label="95%" caption="After" filled={19} color="var(--v2-ok)" bright />
      </div>
    </div>
  );
}

function GridBlock({
  label,
  caption,
  filled,
  color,
  bright = false,
}: {
  label: string;
  caption: string;
  filled: number;
  color: string;
  bright?: boolean;
}) {
  return (
    <div className="min-w-[120px] flex-[1_1_130px]">
      <div className="mb-[11px] flex items-baseline gap-2">
        <span className={`font-mono text-[1.3rem] font-medium ${bright ? "text-ok" : "text-dim"}`}>
          {label}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-dim">
          {caption}
        </span>
      </div>
      <div className="flex max-w-[150px] flex-wrap gap-1">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="size-3.5"
            style={
              index < filled
                ? { background: color }
                : { border: "1px solid var(--v2-line)" }
            }
          />
        ))}
      </div>
    </div>
  );
}

function AlsoCard({
  kicker,
  metric,
  title,
  copy,
}: {
  kicker: string;
  metric: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="min-w-0 flex-[1_1_min(100%,240px)] rounded-2xl border border-line bg-surface p-[clamp(18px,2.4vw,24px)]">
      <div className="mb-3 font-mono text-[11.5px] uppercase tracking-[0.06em] text-dim">
        {kicker}
      </div>
      <div className="font-mono text-[1.2rem] font-medium tracking-[-0.02em] text-accent">
        {metric}
      </div>
      <div className="mb-[7px] mt-2 text-[15px] font-semibold">{title}</div>
      <p className="text-sm leading-[1.6] text-dim">{copy}</p>
    </div>
  );
}

function ExperienceRow({
  initial,
  company,
  yc = false,
  now = false,
  accent = false,
  bordered = false,
  dates,
  location,
  title,
  points,
}: {
  initial: string;
  company: string;
  yc?: boolean;
  now?: boolean;
  accent?: boolean;
  bordered?: boolean;
  dates: string;
  location: string;
  title: string;
  points: string[];
}) {
  return (
    <div
      className={`flex flex-wrap items-start gap-[clamp(16px,2.4vw,28px)] p-[clamp(20px,2.8vw,30px)] ${
        bordered ? "border-t border-inset" : ""
      }`}
    >
      <div className="min-w-[min(100%,200px)] flex-[0_1_250px]">
        <div className="flex flex-wrap items-center gap-2.5">
          <span
            className={`flex size-[34px] shrink-0 items-center justify-center rounded-[9px] border font-mono text-sm font-medium ${
              accent
                ? "border-softline bg-soft text-accent"
                : "border-chipline bg-chipbg text-mute"
            }`}
          >
            {initial}
          </span>
          <span className="text-[clamp(1.1rem,1.8vw,1.35rem)] font-bold tracking-[-0.025em]">
            {company}
          </span>
          {yc ? (
            <span className="rounded-full border border-softline px-[7px] py-0.5 font-mono text-[10.5px] text-accent">
              YC W24
            </span>
          ) : null}
          {now ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] text-ok">
              <span className="size-[5px] rounded-full bg-ok" />
              Now
            </span>
          ) : null}
        </div>
        <div className="mt-2.5 font-mono text-[11.5px] leading-[1.7] text-dim">
          {dates}
          <br />
          {location}
        </div>
      </div>
      <div className="min-w-0 flex-[1_1_min(100%,340px)]">
        <div className="mb-2.5 text-[15.5px] font-semibold">{title}</div>
        <ul className="m-0 list-disc space-y-2.5 pl-5 marker:text-accent">
          {points.map((point) => (
            <li key={point} className="pl-1.5 text-[15px] leading-[1.65] text-mute">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StackRow({ items }: { items: [string, string][] }) {
  return (
    <div className="flex flex-wrap justify-center gap-[clamp(10px,1.4vw,14px)]">
      {items.map(([title, caption]) => (
        <span
          key={title}
          className="inline-flex flex-col gap-0.5 rounded-xl border border-line bg-panel px-[17px] py-[11px]"
        >
          <span className="text-[14.5px] font-semibold">{title}</span>
          <span className="font-mono text-[10.5px] text-dim">{caption}</span>
        </span>
      ))}
    </div>
  );
}

function LookCard({
  kicker,
  title,
  copy,
  green = false,
}: {
  kicker: string;
  title: string;
  copy: string;
  green?: boolean;
}) {
  return (
    <div className="min-w-0 flex-[1_1_min(100%,210px)] rounded-2xl border border-line bg-panel p-[clamp(18px,2.4vw,24px)]">
      <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
        {kicker}
      </div>
      <div
        className={`mb-[7px] text-[clamp(1rem,1.4vw,1.1rem)] font-semibold tracking-[-0.015em] ${
          green ? "text-ok" : "text-fog"
        }`}
      >
        {title}
      </div>
      <div className="text-[13.5px] leading-[1.6] text-dim">{copy}</div>
    </div>
  );
}

function ResumeCard() {
  return (
    <div className="overflow-hidden rounded-[18px] border border-line bg-surface">
      <div className="flex flex-wrap items-center gap-2.5 border-b border-inset bg-panel px-3.5 py-[11px]">
        <span className="size-2.5 rounded-full bg-window" />
        <span className="size-2.5 rounded-full bg-window" />
        <span className="size-2.5 rounded-full bg-window" />
        <span className="ml-1.5 font-mono text-[11.5px] text-dim">
          YatharthVerma_Resume.pdf
        </span>
        <span className="ml-auto rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-dim">
          2 pages
        </span>
      </div>
      <div className="bg-white p-[clamp(24px,4vw,52px)] text-[#16181B]">
        <div className="mx-auto max-w-[780px]">
          <div className="mb-[26px] border-b border-[#E4E7EB] pb-[18px] text-center">
            <div className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.03em]">
              Yatharth Verma
            </div>
            <div className="mt-1.5 text-[14.5px] font-semibold text-[#454C55]">
              Senior Software Engineer
            </div>
            <div className="mt-2.5 font-mono text-[11.5px] leading-[1.8] text-[#6B7280]">
              yatharthverma070@gmail.com · +91 70188 38466
              <br />
              yatharthverma.dev · GitHub · LinkedIn · YouTube (3.6K+)
            </div>
          </div>
          <ResumeH>Experience</ResumeH>
          <ResumeJob
            company="Topo"
            dates="Aug 2024 — Present · Paris, France (Remote)"
            title="Senior Software Engineer"
            bullets={[
              "Designed and evolved CRM integration architecture for a platform serving 200+ customers and processing 50K–100K+ leads daily — bidirectional HubSpot sync with entity-level source-of-truth semantics, webhook-driven updates, conflict resolution, customisable mappings and lifecycle-safe reconciliation.",
              "Built the Tasks and Daily Sales Workflow: a unified multi-channel workspace processing 10K–20K tasks/day across email, calls and LinkedIn, with CRM sync, assignment pools, reminders, bulk actions and AI-generated reply drafts.",
              "Engineered reliable asynchronous workflows with Temporal for CRM-backed dynamic lists — reconciliation, pause/resume/detach lifecycles, external state changes and failure recovery.",
              "Scaled high-volume outbound to 20K–40K emails/day, building sequence analytics and sending-health diagnostics while improving lead-management performance through pagination, indexing, query optimisation and caching.",
              "Embedded AI into core sales workflows: AI-generated messaging, email drafts and lead-specific call assistance.",
            ]}
          />
          <ResumeJob
            company="Artisan AI"
            dates="Dec 2023 — Aug 2024 · San Francisco, CA (Remote)"
            title="Senior Software Engineer"
            bullets={[
              "Improved email deliverability from 50% to 95% by optimising sending, email quality and filtering systems.",
              "Engineered and hardened the email scheduler to reliably process 10K+ emails/day.",
              "Built analytics infrastructure for real-time tracking of lead and email activity.",
              "Redesigned the subscription and billing workflow with Stripe, rebuilding the end-to-end lifecycle.",
              "Built CRM integrations for HubSpot and Salesforce, enabling lead sync and engagement workflows.",
            ]}
          />
          <ResumeJob
            company="LeadSquared"
            dates="Jun 2021 — Dec 2023 · Bangalore, India"
            title="Software Engineer → Senior Software Engineer"
            bullets={[
              "Automated the production release process and regional infrastructure provisioning, reducing manual DevOps effort.",
              "Engineered automated RDS upgrade workflows, reducing database upgrade downtime to 2–3 minutes.",
              "Built internal developer/DevOps tooling for controlled database access, approval workflows, notifications and scheduled log reporting across clusters and regions.",
              "Improved performance of high-traffic product workflows, optimising Advanced Search through caching and backend improvements.",
            ]}
          />
          <div className="mt-7">
            <ResumeH>Skills</ResumeH>
            <SkillLine label="Languages" value="Python · TypeScript · JavaScript · SQL" />
            <SkillLine label="Backend" value="FastAPI · Node.js · PostgreSQL · Redis · SQLAlchemy · RabbitMQ" />
            <SkillLine label="Distributed systems" value="Temporal · asynchronous workflows · webhooks · event-driven systems" />
            <SkillLine label="Frontend" value="React · Next.js · Tailwind CSS" />
            <SkillLine label="Infrastructure" value="AWS · Docker · Terraform · Render · Doppler" />
            <SkillLine label="Observability" value="Datadog · logging · metrics · distributed tracing" />
            <SkillLine label="AI & integrations" value="LLM APIs · prompt engineering · HubSpot · Salesforce · Stripe" />
          </div>
          <div className="mt-7 flex flex-wrap gap-[clamp(20px,4vw,44px)]">
            <div className="min-w-0 flex-[1_1_min(100%,240px)]">
              <ResumeH>Education</ResumeH>
              <div className="text-[14.5px] font-bold">Lovely Professional University</div>
              <div className="mt-1 text-[13.5px] leading-[1.6] text-[#454C55]">
                B.Tech, Computer Science &amp; Engineering
                <br />
                <span className="text-[#6B7280]">
                  Jalandhar, India · CGPA 9.0/10 · 2017–2021
                </span>
              </div>
            </div>
            <div className="min-w-0 flex-[1_1_min(100%,240px)]">
              <ResumeH>Open source</ResumeH>
              <div className="text-[13.5px] leading-[1.6] text-[#454C55]">
                <strong className="text-[#16181B]">FormVibe</strong> — a
                Typeform/Airtable alternative. Drag-and-drop form builder focused
                on developer experience, built for the Appwrite Hackathon, with
                contributions to the Appwrite Console frontend.
              </div>
              <div className="mt-2.5 text-[13.5px] leading-[1.6] text-[#454C55]">
                <strong className="text-[#16181B]">LinkFree</strong> — contributed
                the project&apos;s playground feature.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-inset px-3.5 py-[11px] font-mono text-[10.5px] uppercase tracking-[0.05em] text-dim">
        Rendered inline ·{" "}
        <a href={SITE.resume} target="_blank" rel="noreferrer" className="text-accent">
          open the original PDF
        </a>
      </div>
    </div>
  );
}

function ResumeH({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 border-b-2 border-[#16181B] pb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#6B7280]">
      {children}
    </div>
  );
}

function ResumeJob({
  company,
  dates,
  title,
  bullets,
}: {
  company: string;
  dates: string;
  title: string;
  bullets: string[];
}) {
  return (
    <div className="mb-[22px]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
        <div className="text-[15.5px] font-bold tracking-[-0.01em]">{company}</div>
        <div className="font-mono text-[11.5px] text-[#6B7280]">{dates}</div>
      </div>
      <div className="mb-2.5 mt-[3px] text-sm font-semibold text-[#454C55]">{title}</div>
      <ul className="m-0 flex flex-col gap-1.5 pl-[18px]">
        {bullets.map((item) => (
          <li key={item.slice(0, 40)} className="text-[13.5px] leading-[1.6] text-[#454C55]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-[#E4E7EB] py-[7px]">
      <span className="flex-[0_1_150px] font-mono text-[11px] uppercase tracking-[0.06em] text-[#6B7280]">
        {label}
      </span>
      <span className="min-w-0 flex-[1_1_min(100%,240px)] text-[13.5px] leading-[1.6] text-[#454C55]">
        {value}
      </span>
    </div>
  );
}
