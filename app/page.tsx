import Image from "next/image";
import dynamic from "next/dynamic";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Intro from "@/components/Intro";
import { CustomDock } from "@/components/CustomDock";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Videos from "@/components/Videos";
import ContactMe from "@/components/ContactMe";

const Meteors = dynamic(() => import("@/components/magicui/meteors"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 p-24 relative overflow-hidden w-7/12 mx-auto">
      <div className="fixed left-48 top-0 bottom-0 w-24 flex items-center justify-center">
        <CustomDock orientation="vertical" />
      </div>
      <Intro />
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
      <Videos />
      <ContactMe />
      <Meteors number={20} />
    </main>
  );
}
