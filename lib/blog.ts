import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

// Each post is a folder: content/blog/<slug>/index.md(x), with its images
// next to it. Relative image paths like ./diagram.svg are served from
// /blog/<slug>/diagram.svg by app/blog/[slug]/[file]/route.ts.
export const BLOG_DIR = path.join(process.cwd(), "content/blog");

export const ASSET_TYPES: Record<string, string> = {
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".avif": "image/avif",
  ".md": "text/markdown; charset=utf-8",
};

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  series?: string;
  seriesPart?: number;
  draft: boolean;
  readingMinutes: number;
};

export type Heading = { id: string; text: string; level: 2 | 3 };

export type Post = PostMeta & {
  source: string;
  format: "md" | "mdx";
  headings: Heading[];
};

// Drafts show up in `next dev` so they can be previewed, never in a build.
const SHOW_DRAFTS = process.env.NODE_ENV !== "production";

function sourceFile(slug: string) {
  for (const name of ["index.mdx", "index.md"]) {
    const file = path.join(BLOG_DIR, slug, name);
    if (fs.existsSync(file)) return file;
  }
  return null;
}

function allSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && sourceFile(entry.name))
    .map((entry) => entry.name);
}

function readingMinutes(source: string) {
  const words = source.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

// Plain-text version of a heading, matching what rehype-slug sees once
// the markdown is rendered, so the ids line up.
function headingText(raw: string) {
  return raw
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/(\*\*|__|\*|_)(.+?)\1/g, "$2")
    .trim();
}

function extractHeadings(source: string): Heading[] {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  let inFence = false;

  for (const line of source.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence) continue;

    const match = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;

    const text = headingText(match[2]);
    const id = slugger.slug(text);
    const level = match[1].length;
    if (level === 2 || level === 3) headings.push({ id, text, level });
  }
  return headings;
}

function toDateString(value: unknown) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

function readPost(slug: string): Post | null {
  const file = sourceFile(slug);
  if (!file) return null;

  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const post: Post = {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: toDateString(data.date),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    series: data.series ? String(data.series) : undefined,
    seriesPart: data.seriesPart ? Number(data.seriesPart) : undefined,
    draft: Boolean(data.draft),
    readingMinutes: readingMinutes(content),
    source: content,
    format: file.endsWith(".mdx") ? "mdx" : "md",
    headings: extractHeadings(content),
  };

  return post.draft && !SHOW_DRAFTS ? null : post;
}

export function getPost(slug: string) {
  return readPost(slug);
}

export function getAllPosts(): PostMeta[] {
  return allSlugs()
    .map(readPost)
    .filter((post): post is Post => post !== null)
    .map(({ source, format, headings, ...meta }) => meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostAssets(slug: string) {
  const dir = path.join(BLOG_DIR, slug);
  return fs
    .readdirSync(dir)
    .filter((name) => path.extname(name).toLowerCase() in ASSET_TYPES);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
