import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const projectsData = [
  {
    title: "Invoice Generator",
    description:
      "A minimalistic invoice generator built and vibe coded with Claude Code. Fully open source, no auth required, no paywall. Export invoices to PDF and share with clients. Supports light and dark modes.",
    link: "https://invoice-generator-two-psi.vercel.app/",
    code: "https://github.com/yatharth1706/invoice-generator",
    previewVideo: "/videos/Invoice generator.mp4",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Claude Code",
    ],
  },
  {
    title: "FormVibe",
    description:
      "FormVibe is a platform that allows users to create and share forms with their friends.",
    link: "https://form-vibe.vercel.app/",
    code: "https://github.com/yatharth1706/FormVibe",
    previewVideo: "/videos/FormVibeProjectPreview.mp4",
    technologies: [
      "Next.js",
      "React",
      "Appwrite",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "EmojiGit CLI Tool",
    description:
      "EmojiGit is a CLI tool that allows you to add emojis to your git commits.",
    link: "https://github.com/yatharth1706/EmojiGit",
    code: "https://github.com/yatharth1706/EmojiGit",
    previewVideo: "/videos/EmojiGitPreview.mp4",
    technologies: ["JavaScript", "Node.js", "Git", "Emoji", "Meow", "Inquirer"],
  },
  {
    title: "CloudSpace",
    description:
      "CloudSpace is a platform that allows users to create and share spaces with their friends.",
    link: "https://cloud-space.vercel.app/",
    code: "https://github.com/yatharth1706/Cloud-Space",
    previewVideo: "/videos/CloudSpacePreview.mp4",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "BlogBuddy",
    description:
      "BlogBuddy is a platform that allows users to create and share blogs with their friends.",
    link: "https://blog-buddy-seven.vercel.app/",
    code: "https://github.com/yatharth1706/BlogBuddy",
    previewVideo: "/videos/BlogBuddyPreview.mp4",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
];

function Projects() {
  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="section-card flex flex-col overflow-hidden"
          >
            <video
              src={project.previewVideo}
              controls
              muted
              preload="metadata"
              playsInline
              className="aspect-video w-full"
              aria-label={`${project.title} project preview`}
            />
            <div className="flex grow flex-col gap-3 p-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>
              <p className="muted-copy">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="chip">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.link} target="_blank" rel="noreferrer">
                  <Button variant="default">View</Button>
                </Link>
                <Link href={project.code} target="_blank" rel="noreferrer">
                  <Button variant="outline">Code</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
