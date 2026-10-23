import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

// https://llmstxt.org — a plain index of the site for AI agents. Each post
// links to its raw markdown.
export function GET() {
  const posts = getAllPosts();
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.role}. Full-stack engineer working on the UI, the APIs, and the jobs that have to keep running. Writes deep dives on databases and system design.`,
    "",
    "## Pages",
    "",
    `- [Home](${SITE.website}/): Work, experience, stack and contact`,
    `- [Blog](${SITE.website}/blog): All posts`,
    "",
    "## Blog posts",
    "",
    ...posts.map(
      (post) => `- [${post.title}](${SITE.website}/blog/${post.slug}/index.md): ${post.description}`,
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
