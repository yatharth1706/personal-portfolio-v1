import Link from "next/link";
import { Button } from "./ui/button";

interface MachineCodingItem {
  title: string;
  status: "Completed" | "In Progress";
  progress: string;
  folderLink: string;
  repoLink: string;
  summary: string;
  stack: string[];
  details: {
    approach: string;
    focus: string;
    nextSteps: string;
  };
}

const machineCodingData: MachineCodingItem[] = [
  {
    title: "01 - In Memory Cache",
    status: "Completed",
    progress: "100%",
    folderLink:
      "https://github.com/yatharth1706/machine-coding-questions/tree/master/01-in-memory-cache",
    repoLink: "https://github.com/yatharth1706/machine-coding-questions",
    summary:
      "A complete machine-coding solution with modular implementation and clean separation of concerns.",
    stack: ["Python", "Problem Decomposition", "Design Patterns"],
    details: {
      approach:
        "Designed around reusable components and predictable state updates to keep behavior easy to extend.",
      focus:
        "Core logic correctness, readability, and edge-case handling while preserving maintainable code structure.",
      nextSteps:
        "Add benchmark notes and architecture diagram in README for faster interviewer walkthrough.",
    },
  },
  {
    title: "02 - Config Manager",
    status: "In Progress",
    progress: "80%",
    folderLink:
      "https://github.com/yatharth1706/machine-coding-questions/tree/master/02-config-manager",
    repoLink: "https://github.com/yatharth1706/machine-coding-questions",
    summary:
      "Work in progress implementation with most core flows done and remaining edge-case hardening underway.",
    stack: ["Python", "State Management", "Edge-case Handling"],
    details: {
      approach:
        "Built the main features first, then iterating over constraints and stress scenarios to improve reliability.",
      focus:
        "Finishing incomplete interaction states and improving error handling around complex user actions.",
      nextSteps:
        "Complete pending flows, add test coverage for corner cases, and publish final demo notes.",
    },
  },
];

function MachineCoding() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="section-title">Machine Coding</h2>
        <p className="muted-copy">
          Practice problems from my machine-coding repository with current
          completion status and implementation notes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {machineCodingData.map((item) => (
          <article key={item.title} className="section-card flex flex-col p-4">
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  item.status === "Completed"
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                }`}
              >
                {item.status} • {item.progress}
              </span>
            </div>

            <p className="muted-copy">{item.summary}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {item.stack.map((technology) => (
                <span key={technology} className="chip">
                  {technology}
                </span>
              ))}
            </div>

            <details className="mt-4 rounded-lg border border-slate-200/80 p-3 dark:border-slate-700/80">
              <summary className="cursor-pointer text-sm font-semibold text-slate-700 dark:text-slate-200">
                View implementation notes
              </summary>
              <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <p>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    Approach:
                  </span>{" "}
                  {item.details.approach}
                </p>
                <p>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    Focus:
                  </span>{" "}
                  {item.details.focus}
                </p>
                <p>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    Next:
                  </span>{" "}
                  {item.details.nextSteps}
                </p>
              </div>
            </details>

            <div className="mt-4 flex gap-2">
              <Link href={item.folderLink} target="_blank" rel="noreferrer">
                <Button>Question Folder</Button>
              </Link>
              <Link href={item.repoLink} target="_blank" rel="noreferrer">
                <Button variant="outline">Repository</Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default MachineCoding;
