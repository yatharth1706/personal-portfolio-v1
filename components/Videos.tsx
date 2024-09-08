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
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Videos</h1>
        <Link href="https://www.youtube.com/c/YatharthVerma" target="_blank">
          <Button variant="outline" className="w-fit">
            YouTube
            <BsYoutube className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-8 w-full">
        {videos.map((video) => (
          <div
            key={video.videoId}
            className="flex flex-col gap-2 w-full border rounded-md dark:border-gray-700"
          >
            <iframe
              width="100%"
              height="415"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-t-md"
            ></iframe>
            <div className="flex flex-col gap-2 p-4">
              <h2 className="text-xl font-bold">{video.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
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
