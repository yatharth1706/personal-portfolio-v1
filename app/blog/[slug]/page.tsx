import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { renderPost } from "@/components/blog/mdx";
import { MobileTableOfContents, TableOfContents } from "@/components/blog/toc";
import { SiteHeader } from "@/components/v2/site-header";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
      types: { "text/markdown": `/blog/${post.slug}/index.md` },
    },
    robots: post.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [SITE.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const content = await renderPost(post);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    keywords: post.tags.join(", "),
    url: `${SITE.website}/blog/${post.slug}`,
    author: { "@type": "Person", name: SITE.name, url: SITE.website },
  };

  return (
    <main className="v2-root min-h-screen">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="v2-wrap pb-[clamp(56px,8vw,108px)] pt-[clamp(28px,4.5vw,56px)]">
        <div className="mx-auto grid max-w-[1080px] gap-x-14 lg:grid-cols-[minmax(0,1fr)_220px]">
          <article className="min-w-0">
            <header className="mb-[clamp(28px,4vw,40px)] max-w-[720px]">
              <Link
                href="/blog"
                className="mb-[clamp(20px,3vw,28px)] inline-flex items-center gap-1.5 text-sm font-medium text-mute transition-colors hover:text-fog"
              >
                ← All posts
              </Link>

              <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11.5px] uppercase tracking-[0.06em] text-dim">
                {post.series ? (
                  <span className="rounded-full border border-softline bg-soft px-2.5 py-0.5 normal-case tracking-normal text-accent">
                    {post.series}
                    {post.seriesPart ? ` · Part ${post.seriesPart}` : ""}
                  </span>
                ) : null}
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingMinutes} min read</span>
                {post.draft ? (
                  <span className="rounded-full border border-line px-2.5 py-0.5 text-mute">Draft</span>
                ) : null}
              </div>

              <h1 className="text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.08] tracking-[-0.035em]">
                {post.title}
              </h1>
              {post.description ? (
                <p className="mt-[clamp(12px,1.8vw,18px)] text-[clamp(1.0625rem,1.4vw,1.1875rem)] leading-[1.6] text-mute">
                  {post.description}
                </p>
              ) : null}
              {post.tags.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[7px] border border-line px-2.5 py-[5px] font-mono text-[11.5px] text-mute"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </header>

            <div className="mb-8 max-w-[720px]">
              <MobileTableOfContents headings={post.headings} />
            </div>

            <div className="blog-prose max-w-[720px]">{content}</div>

            <footer className="mt-[clamp(44px,6vw,64px)] max-w-[720px] border-t border-line pt-6">
              <p className="text-[15px] leading-[1.65] text-mute">
                Thanks for reading. If something here is wrong or unclear, I&apos;d
                like to hear about it:{" "}
                <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
                  {SITE.email}
                </a>
                .
              </p>
              <Link
                href="/blog"
                className="mt-4 inline-flex text-sm font-medium text-mute transition-colors hover:text-fog"
              >
                ← All posts
              </Link>
            </footer>
          </article>

          <aside className="hidden lg:block">
            <TableOfContents headings={post.headings} />
          </aside>
        </div>
      </div>
    </main>
  );
}
