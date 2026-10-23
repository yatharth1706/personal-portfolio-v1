import fs from "node:fs";
import path from "node:path";
import { ASSET_TYPES, BLOG_DIR, getAllPosts, getPost, getPostAssets } from "@/lib/blog";

// Serves the files that live next to a post: its images, and index.md
// itself so agents can read the raw markdown.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().flatMap((post) =>
    getPostAssets(post.slug).map((file) => ({ slug: post.slug, file })),
  );
}

export function GET(
  _request: Request,
  { params }: { params: { slug: string; file: string } },
) {
  const file = path.basename(params.file);
  const type = ASSET_TYPES[path.extname(file).toLowerCase()];
  const fullPath = path.join(BLOG_DIR, params.slug, file);

  if (!type || !getPost(params.slug) || !fs.existsSync(fullPath)) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(fs.readFileSync(fullPath), {
    headers: {
      "Content-Type": type,
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
