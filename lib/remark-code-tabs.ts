import type { Code, Parent, Root, RootContent } from "mdast";

export type CodeTab = { label: string; title?: string };

const TAB = /\btab="([^"]+)"/;
const TITLE = /\btitle="([^"]+)"/;

function tabOf(node: RootContent): CodeTab | null {
  if (node.type !== "code" || !node.meta) return null;
  const label = TAB.exec(node.meta)?.[1];
  if (!label) return null;
  return { label, title: TITLE.exec(node.meta)?.[1] };
}

// Back-to-back code blocks that each have tab="..." in their meta become one
// tabbed block:
//
//   ```py tab="Python" title="server.py"
//   ```ts tab="TypeScript" title="server.ts"
//
// The group renders as <div data-code-tabs="[...]"> around the code blocks,
// which components/blog/mdx.tsx swaps for <CodeTabs>.
function group(parent: Parent) {
  const out: RootContent[] = [];
  let run: Code[] = [];

  const flush = () => {
    if (run.length > 1) {
      const tabs = run.map((node) => tabOf(node)!);
      out.push({
        type: "blockquote",
        children: run,
        data: {
          hName: "div",
          hProperties: { dataCodeTabs: JSON.stringify(tabs) },
        },
      });
    } else {
      out.push(...run);
    }
    run = [];
  };

  for (const child of parent.children as RootContent[]) {
    if (tabOf(child)) {
      run.push(child as Code);
      continue;
    }
    flush();
    if ("children" in child) group(child as Parent);
    out.push(child);
  }
  flush();

  parent.children = out as Parent["children"];
}

export function remarkCodeTabs() {
  return (tree: Root) => group(tree);
}
