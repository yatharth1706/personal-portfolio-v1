import fs from "node:fs";
import path from "node:path";
import {
  Children,
  isValidElement,
  type ComponentProps,
  type ReactElement,
  type ReactNode,
} from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { BLOG_DIR, type Post } from "@/lib/blog";
import { remarkCodeTabs, type CodeTab } from "@/lib/remark-code-tabs";
import { CodeTabs } from "./code-tabs";
import { CopyButton } from "./copy-button";

const LANGUAGE_LABELS: Record<string, string> = {
  ts: "TypeScript",
  tsx: "TSX",
  js: "JavaScript",
  jsx: "JSX",
  json: "JSON",
  sql: "SQL",
  py: "Python",
  python: "Python",
  bash: "Shell",
  sh: "Shell",
  yaml: "YAML",
};

type ElementProps = { children?: ReactNode; [key: string]: unknown };

// rehype-pretty-code wraps every code block in a <figure> holding an
// optional <figcaption> (from title="...") and the <pre>. We swap that for
// the same window chrome as the hero console: dots, a title, copy button.
function CodeFigure(props: ComponentProps<"figure">) {
  if (!("data-rehype-pretty-code-figure" in props)) {
    return <figure {...props} />;
  }

  const children = Children.toArray(props.children).filter(isValidElement) as ReactElement<ElementProps>[];
  const caption = children.find((child) => "data-rehype-pretty-code-title" in child.props);
  const pre = children.find((child) => child !== caption);
  const language = String(pre?.props["data-language"] ?? "");
  const label = caption?.props.children ?? LANGUAGE_LABELS[language] ?? language;

  return (
    <div data-code-block className="blog-code not-prose">
      <div className="blog-code-bar flex items-center gap-2 border-b border-inset bg-panel py-1.5 pl-3.5 pr-1.5">
        <span className="size-2.5 shrink-0 rounded-full bg-window" />
        <span className="size-2.5 shrink-0 rounded-full bg-window" />
        <span className="size-2.5 shrink-0 rounded-full bg-window" />
        {label ? (
          <span className="ml-1.5 truncate font-mono text-[11.5px] text-dim">{label}</span>
        ) : null}
        <CopyButton />
      </div>
      {pre}
    </div>
  );
}

function Heading({ as: Tag, id, children }: { as: "h2" | "h3"; id?: string; children?: ReactNode }) {
  return (
    <Tag id={id} className="group scroll-mt-6">
      {children}
      {id ? (
        <a
          href={`#${id}`}
          aria-label="Link to this section"
          className="ml-2 text-dim opacity-0 transition-opacity hover:text-accent group-hover:opacity-100"
        >
          #
        </a>
      ) : null}
    </Tag>
  );
}

function components(slug: string) {
  return {
    figure: CodeFigure,
    // Groups made by remarkCodeTabs; any other div passes through.
    div: ({ children, ...props }: ComponentProps<"div">) => {
      const tabs = (props as Record<string, unknown>)["data-code-tabs"];
      if (typeof tabs !== "string") return <div {...props}>{children}</div>;
      return <CodeTabs tabs={JSON.parse(tabs) as CodeTab[]}>{children}</CodeTabs>;
    },
    h2: (props: { id?: string; children?: ReactNode }) => <Heading as="h2" {...props} />,
    h3: (props: { id?: string; children?: ReactNode }) => <Heading as="h3" {...props} />,
    a: ({ href = "", children }: { href?: string; children?: ReactNode }) =>
      href.startsWith("http") ? (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      ),
    // Images sit inside <p>, so the wrapper has to be inline-level markup.
    img: ({ src = "", alt = "", title }: { src?: string; alt?: string; title?: string }) => {
      const local = src.startsWith("./") ? path.basename(src) : null;
      const caption = title ? <span className="blog-caption">{title}</span> : null;

      // Our own SVG diagrams are inlined so they can use the site's theme
      // colors and switch with the dark/light toggle.
      if (local?.endsWith(".svg")) {
        const svg = fs.readFileSync(path.join(BLOG_DIR, slug, local), "utf8");
        return (
          <span className="blog-figure">
            <span dangerouslySetInnerHTML={{ __html: svg }} className="contents" />
            {caption}
          </span>
        );
      }

      return (
        <span className="blog-figure">
          {/* eslint-disable-next-line @next/next/no-img-element -- sizes vary per image; next/image needs them up front */}
          <img src={local ? `/blog/${slug}/${local}` : src} alt={alt} loading="lazy" decoding="async" />
          {caption}
        </span>
      );
    },
    table: (props: ComponentProps<"table">) => (
      <div className="blog-table">
        <table {...props} />
      </div>
    ),
  };
}

export async function renderPost(post: Post) {
  const { content } = await compileMDX({
    source: post.source,
    components: components(post.slug),
    options: {
      mdxOptions: {
        format: post.format,
        remarkPlugins: [remarkGfm, remarkCodeTabs],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: { dark: "github-dark-default", light: "github-light-default" },
              keepBackground: false,
              defaultLang: { block: "plaintext" },
            },
          ],
        ],
      },
    },
  });
  return content;
}
