import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/blog";

export function LatestWriting() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section id="writing" className="v2-wrap scroll-mt-20 pt-[clamp(56px,8vw,108px)]">
      <div className="mx-auto mb-[clamp(28px,4vw,42px)] max-w-[660px] text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-[13px] py-1.5 font-mono text-[11.5px] tracking-[0.04em] text-mute">
          Writing
        </span>
        <h2 className="mt-[clamp(18px,2.6vw,26px)] text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.06] tracking-[-0.035em]">
          One concept a week,
          <br />
          <span className="text-dim">written up in depth.</span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-[clamp(14px,2vw,20px)]">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex min-w-0 flex-[1_1_min(100%,280px)] flex-col rounded-2xl border border-line bg-surface p-[clamp(18px,2.4vw,24px)] transition-colors hover:border-brand-bright"
          >
            <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
              {post.series ?? "Blog"} · {formatDate(post.date)}
            </div>
            <div className="mb-2 text-[17px] font-semibold leading-snug tracking-[-0.015em] group-hover:text-accent">
              {post.title}
            </div>
            <p className="line-clamp-3 text-[14px] leading-[1.6] text-dim">{post.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-[clamp(18px,2.4vw,24px)] text-center">
        <Link href="/blog" className="text-sm font-medium text-mute hover:text-fog">
          All posts →
        </Link>
      </div>
    </section>
  );
}
