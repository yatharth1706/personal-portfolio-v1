import type { Metadata } from "next";
import { Rss } from "lucide-react";
import { PostList } from "@/components/blog/post-list";
import { SiteHeader } from "@/components/v2/site-header";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Deep dives on databases, system design, and the details that matter in production.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
};

export default function BlogIndex() {
  const posts = getAllPosts().map((post) => ({ ...post, displayDate: formatDate(post.date) }));

  return (
    <main className="v2-root min-h-screen">
      <SiteHeader />
      <div className="v2-wrap pb-[clamp(56px,8vw,108px)] pt-[clamp(36px,6vw,72px)]">
        <div className="mx-auto max-w-[820px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-[13px] py-1.5 font-mono text-[11.5px] tracking-[0.04em] text-mute">
            Writing
          </span>
          <div className="mt-[clamp(18px,2.6vw,26px)] flex items-center justify-between gap-4">
            <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.04em]">
              Blog
            </h1>
            <a
              href="/blog/rss.xml"
              aria-label="RSS feed"
              title="RSS feed"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-panel text-mute transition-colors hover:border-brand-bright hover:text-fog"
            >
              <Rss className="size-[18px]" />
            </a>
          </div>
          <p className="mb-[clamp(28px,4vw,44px)] mt-[clamp(12px,1.8vw,18px)] max-w-[58ch] text-[clamp(1rem,1.2vw,1.0625rem)] leading-[1.65] text-mute">
            Each week I pick one concept and go deep on it, with real code and
            diagrams. Mostly databases and system design.
          </p>
          <PostList posts={posts} />
        </div>
      </div>
    </main>
  );
}
