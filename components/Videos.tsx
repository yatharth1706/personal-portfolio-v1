import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsYoutube } from "react-icons/bs";

const videos = [
  {
    title: "Build Dribble Clone using Next.js, Appwrite, TailwindCSS",
    description:
      "In this video, I will be taking you through the complete process of building a Dribble Clone using Next.js, Appwrite, TailwindCSS.",
    videoId: "isFg0IRlNq4",
  },
  {
    title: "Complete Guide to Build Rest APIs for Authentication from Scratch",
    description:
      "In this video, I will be taking you through the complete process of building a Rest API for Authentication from scratch.",
    videoId: "osLnmm5tJT4",
  },
  {
    title: "Build Facebook Reaction Animation using React and Framer Motion",
    description:
      "In this video, I will be taking you through the complete process of building a Facebook Reaction Animation using React and Framer Motion.",
    videoId: "_db5IFxEWLo",
  },
];

function Videos() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <h2 className="section-title">Videos</h2>
        <Link
          href="https://www.youtube.com/c/YatharthVerma"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outline" className="w-fit">
            YouTube
            <BsYoutube className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
      <div className="flex w-full flex-col gap-8">
        {videos.map((video) => (
          <div
            key={video.videoId}
            className="section-card flex w-full flex-col gap-2 overflow-hidden"
          >
            <iframe
              title={video.title}
              width="100%"
              height="415"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-t-md"
            ></iframe>
            <div className="flex flex-col gap-2 p-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {video.title}
              </h3>
              <p className="muted-copy">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
