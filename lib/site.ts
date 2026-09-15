export const SITE = {
  name: "Yatharth Verma",
  role: "Senior Software Engineer",
  email: "yatharthverma070@gmail.com",
  phone: "+91 70188 38466",
  resume: "/YatharthVerma_Resume_2026_v3.pdf",
  github: "https://github.com/yatharth1706",
  linkedin: "https://www.linkedin.com/in/yatharth-verma-938924169/",
  youtube: "https://www.youtube.com/@yatharthverma",
  website: "https://yatharthverma.dev",
  tricity: {
    live: "https://tricity-rent-nine.vercel.app/",
    repo: "https://github.com/yatharth1706/tricity-rent",
  },
};

export const SIDE_VIDEOS = [
  {
    id: "No8JvCwR5P8",
    title: "The Redis Event Loop, Finally Explained",
    caption: "How one thread serves 100K clients without a lock.",
    length: "15 min",
  },
  {
    id: "d7ef1qfD0FM",
    title: "Sliding Window Rate Limiter with Redis + Lua",
    caption: "A sliding-window limiter in Redis + Lua.",
    length: "16 min",
  },
  {
    id: "khkXH4K8HYQ",
    title: "Why uv is 100x Faster Than pip",
    caption: "Python packaging, and why uv feels instant next to pip.",
    length: "14 min",
  },
];

export const PROOF_STATS = [
  { value: "50–100K", label: "Leads synced a day" },
  { value: "20–40K", label: "Emails sent a day" },
  { value: "10–20K", label: "Tasks a day" },
  { value: "200+", label: "Customers on the platform" },
  { value: "50 → 95%", label: "Deliverability at Artisan", accent: true },
];

export const CASE_STUDIES = [
  {
    number: "01",
    company: "Topo — Senior Software Engineer",
    badges: [
      { label: "YC W24", tone: "neutral" as const },
      { label: "Live", tone: "live" as const },
    ],
    title: "HubSpot CRM sync",
    constraint:
      "Customers already live in HubSpot. Activity has to show up there. A closed deal has to stop the sequence in Topo. Owners can't be different people on each side.",
    built: "Outbound sync for leads, companies, and activity. Webhooks to exclude contacts and pause sequences. Bidirectional owner sync. Reconciliation you can run again if a job dies.",
    holds:
      "50–100K+ leads a day, 200+ customers.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Webhooks", "HubSpot API"],
  },
  {
    number: "02",
    company: "Topo — Senior Software Engineer",
    badges: [
      { label: "YC W24", tone: "neutral" as const },
      { label: "Live", tone: "live" as const },
    ],
    title: "Daily sales workspace",
    constraint:
      "Reps were jumping between three tools, with no shared queue and no reliable writeback to the CRM.",
    built: "Tasks and the Daily Sales Workflow: assignment, reminders, bulk actions, CRM writeback, and AI drafts in one place.",
    holds:
      "10–20K tasks a day. Faster from pagination, indexes, query work, and caching. We didn't add more machines.",
    tags: ["React", "Next.js", "FastAPI", "PostgreSQL", "Redis", "LLM APIs"],
  },
  {
    number: "03",
    company: "Artisan AI — Senior Software Engineer",
    badges: [{ label: "YC W24", tone: "neutral" as const }],
    title: "Half the email wasn't landing",
    constraint:
      "Artisan is an outbound product. Deliverability was at 50% — half the send volume was wasted.",
    built: "I reworked sending, quality checks, and filtering; got the scheduler to hold 10K+ emails a day; and added analytics so a drop is visible.",
    holds:
      "95% delivered, at 10K+/day. I also rebuilt Stripe billing and shipped HubSpot and Salesforce.",
    tags: ["Python", "Email infra", "Stripe", "Salesforce", "HubSpot"],
  },
];

export const ALSO_SHIPPED: {
  kicker: string;
  metric: string;
  title: string;
  copy: string;
  href?: string;
}[] = [
  {
    kicker: "Artisan AI",
    metric: "Stripe",
    title: "Subscriptions and invoices",
    copy: "Rebuilt subscriptions, invoices, upgrades, and cancellations on Stripe. The old path dropped state without anyone noticing.",
  },
  {
    kicker: "Topo",
    metric: "In-product AI",
    title: "AI drafts in the queue",
    copy: "Reply drafts and call icebreakers sit in the task list reps already use.",
  },
  {
    kicker: "LeadSquared",
    metric: "2–3 min",
    title: "RDS upgrades in minutes",
    copy: "Automated production database upgrades. Downtime is two or three minutes.",
  },
  {
    kicker: "LeadSquared",
    metric: "Internal tools",
    title: "The DevOps portal",
    copy: "Database access, approvals, alerts, and scheduled logs across clusters and regions.",
  },
];

export const EXPERIENCE = [
  {
    company: "Topo",
    yc: true,
    dates: "Aug 2024 — Present",
    location: "Paris, France · Remote",
    title: "Senior Software Engineer",
    points: [
      "Designed the HubSpot sync for 200+ customers — 50–100K leads a day. Leads, companies, and activity go out to HubSpot; webhooks come back to pause sequences; owners stay in sync both ways.",
      "Built the daily sales workspace: email, calls, and LinkedIn in one queue. 10–20K tasks a day, with assignment, reminders, bulk actions, and CRM writeback.",
      "Built Temporal workflows for HubSpot dynamic lists — customers link a list, we import the leads, then pause, resume, detach, and recover when a run fails halfway.",
      "Scaled outbound to 20–40K emails a day, and added sequence analytics and sending-health so a bad day is visible.",
      "Made lead management faster with pagination, indexes, query work, and caching — not by adding machines.",
      "Embedded AI reply drafts and call icebreakers in that same queue, not in a chatbot on the side.",
    ],
  },
  {
    company: "Artisan AI",
    yc: true,
    dates: "Dec 2023 — Aug 2024",
    location: "San Francisco, CA · Remote",
    title: "Senior Software Engineer",
    points: [
      "Took email deliverability from 50% to 95% — sending path, quality checks, and filtering. For an outbound product, that number is the product.",
      "Hardened the scheduler to hold 10K+ emails a day without falling over.",
      "Added analytics for lead and email activity, so a drop shows up before a customer emails us.",
      "Rebuilt the Stripe subscription path end to end. A billing bug doesn't show up as a ticket — it shows up as lost revenue.",
      "Shipped HubSpot and Salesforce integrations for lead sync and engagement.",
    ],
  },
  {
    company: "LeadSquared",
    yc: false,
    dates: "Jun 2021 — Dec 2023",
    location: "Bangalore, India",
    title: "Software Engineer → Senior Software Engineer",
    points: [
      "Automated production releases and regional infra provisioning, so deploys weren't a manual DevOps ritual.",
      "Built RDS upgrade workflows in production: downtime from a long outage down to two or three minutes.",
      "Built the internal DevOps portal — database access, approvals, notifications, and scheduled logs across clusters and regions.",
      "Sped up Advanced Search on high-traffic paths through caching and backend work.",
    ],
  },
];

export const STACK = [
  { label: "Languages", items: "Python · TypeScript · JavaScript · SQL" },
  {
    label: "Backend",
    items: "FastAPI · Node.js · PostgreSQL · Redis · SQLAlchemy · RabbitMQ",
  },
  {
    label: "Distributed systems",
    items: "Temporal · async workflows · webhooks · event-driven systems",
  },
  { label: "Frontend", items: "React · Next.js · Tailwind CSS" },
  {
    label: "Infrastructure & observability",
    items: "AWS · Docker · Terraform · Render · Doppler · Datadog · distributed tracing",
  },
  {
    label: "AI & integrations",
    items: "LLM APIs · prompt engineering · HubSpot · Salesforce · Stripe",
  },
];

export const FOUNDER_STATS = [
  { value: "2 × YC", label: "Topo & Artisan, both W24" },
  { value: "5+ yrs", label: "Shipping production systems" },
  { value: "200+", label: "Customers on systems I own" },
  { value: "Remote", label: "SF & Paris teams, from India", accent: true },
];

export const FOUNDER_PROBLEMS = [
  {
    number: "01",
    title: '"Our integrations keep losing data."',
    copy: "One-way pushes and nightly jobs fall over as soon as both sides get edited. You need a real source of truth, webhooks, conflict handling, and a reconciliation pass that's safe to run again.",
    proof: "Built at Topo — HubSpot sync, 200+ customers",
  },
  {
    number: "02",
    title: '"Our emails stopped landing."',
    copy: "Deliverability is the sending path, quality checks, filtering, and seeing a drop before a customer churns over it.",
    proof: "Took Artisan from 50% → 95% delivered",
  },
  {
    number: "03",
    title: '"Our long jobs die and nobody notices."',
    copy: "Anything that runs for hours needs pause, resume, detach, retry, and recovery when something else changes the record. Cron plus a queue doesn't cover that.",
    proof: "Temporal workflows for CRM-backed lists",
  },
  {
    number: "04",
    title: '"It got slow as we grew."',
    copy: "Usually the query. Pagination that doesn't load everything, the indexes the ORM never made, caching on the paths people actually hit.",
    proof: "Lead management at Topo · Advanced Search at LeadSquared",
  },
  {
    number: "05",
    title: '"Our AI features feel like a toy."',
    copy: "A chat in the sidebar gets opened twice. Reply drafts and call prep in the queue someone already lives in is the version that sticks.",
    proof: "AI drafts and call icebreakers in Topo's task queue",
  },
];

export const HOW_I_WORK = [
  {
    number: "01",
    title: "Find the failure mode first",
    copy: "Before I write the happy path I want to know what happens when the webhook arrives twice, the third-party is down, or someone edits the record mid-sync. Those answers shape the design. Finding them in production ruins the weekend.",
  },
  {
    number: "02",
    title: "Make recovery boring",
    copy: "I want a break I can recover from: re-run reconciliation, the workflow is still there, and I can see which customer and which record.",
  },
  {
    number: "03",
    title: "Ship behind a measurement",
    copy: '50% to 95% only exists because the analytics went in with the fix. I\'d rather measure first and find out I was wrong early.',
  },
];

export const PRACTICAL_ANSWERS = [
  {
    question: "What kind of role are you looking for?",
    answer:
      "Senior, staff, or founding engineer at an early-stage company, ideally where I own a system rather than a ticket queue. I've worked best in teams small enough that the person who designs it is the person who gets paged.",
  },
  {
    question: "Where are you, and does remote work?",
    answer:
      "India. Last three years remote, first with an SF team, then Paris. US and European overlap is normal for me. Async-first, with real overlap wherever the team sits.",
  },
  {
    question: "Backend only, or full stack?",
    answer:
      "Both. Python and FastAPI are where I'm strongest, but I've built the React and Next.js on top of my own APIs — including Topo's daily sales workspace — and the DevOps underneath. At seed stage that range is usually the point.",
  },
  {
    question: "Is this only for sales products?",
    answer:
      "No. Sales tooling is where most of my recent work has been, and it's a hard domain: integrations you don't control, real volume, correctness customers notice immediately. The actual skill is durable workflows, third-party integrations, and performance under load — same work whether the records are leads, shipments, or payments. Before this I spent two and a half years on infra automation and internal tooling, which had nothing to do with sales.",
  },
];
