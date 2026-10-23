"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { PostMeta } from "@/lib/blog";

export function PostList({ posts }: { posts: (PostMeta & { displayDate: string })[] }) {
  const [tag, setTag] = useState<string | null>(null);
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();
  const visible = tag ? posts.filter((post) => post.tags.includes(tag)) : posts;

  if (posts.length === 0) {
    return <p className="text-mute">First post coming soon.</p>;
  }

  return (
    <div>
      {tags.length > 1 ? (
        <div className="mb-[clamp(20px,3vw,28px)] flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
          {[null, ...tags].map((value) => (
            <button
              key={value ?? "all"}
              type="button"
              aria-pressed={tag === value}
              onClick={() => setTag(value)}
              className={cn(
                "rounded-full border px-3 py-1.5 font-mono text-[11.5px] transition-colors",
                tag === value
                  ? "border-softline bg-soft text-accent"
                  : "border-line text-mute hover:border-brand-bright hover:text-fog",
              )}
            >
              {value ?? "All"}
            </button>
          ))}
        </div>
      ) : null}

      <ul className="flex flex-col gap-[clamp(12px,1.6vw,16px)]">
        {visible.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-line bg-surface p-[clamp(18px,2.6vw,28px)] transition-colors hover:border-brand-bright"
            >
              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11.5px] uppercase tracking-[0.06em] text-dim">
                <span>{post.displayDate}</span>
                <span aria-hidden>·</span>
                <span>{post.readingMinutes} min read</span>
                {post.series ? (
                  <span className="rounded-full border border-softline bg-soft px-2.5 py-0.5 normal-case tracking-normal text-accent">
                    {post.series}
                    {post.seriesPart ? ` · Part ${post.seriesPart}` : ""}
                  </span>
                ) : null}
                {post.draft ? (
                  <span className="rounded-full border border-line px-2.5 py-0.5 text-mute">Draft</span>
                ) : null}
              </div>
              <h2 className="mb-2 text-[clamp(1.2rem,2.2vw,1.5rem)] font-bold leading-[1.2] tracking-[-0.025em] group-hover:text-accent">
                {post.title}
              </h2>
              <p className="max-w-[68ch] text-[15px] leading-[1.6] text-mute">{post.description}</p>
              {post.tags.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((item) => (
                    <span
                      key={item}
                      className="rounded-[7px] border border-line px-2.5 py-[5px] font-mono text-[11.5px] text-mute"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
