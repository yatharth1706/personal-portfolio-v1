import dynamic from "next/dynamic";
import Intro from "@/components/Intro";
import { CustomDock } from "@/components/CustomDock";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Videos from "@/components/Videos";
import ContactMe from "@/components/ContactMe";
import MachineCoding from "@/components/MachineCoding";

const Meteors = dynamic(() => import("@/components/magicui/meteors"), {
  ssr: false,
});

export default function ClassicHome() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 overflow-hidden px-5 pb-28 pt-12 sm:px-8 md:gap-12 md:px-12 md:pt-16 lg:px-16">
      <div className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/10 dark:bg-black/10" />
      <CustomDock />

      <section id="home" className="scroll-mt-24">
        <Intro />
      </section>
      <section id="experience" className="scroll-mt-24">
        <WorkExperience />
      </section>
      <section id="education" className="scroll-mt-24">
        <Education />
      </section>
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>
      <section id="machine-coding" className="scroll-mt-24">
        <MachineCoding />
      </section>
      <section id="videos" className="scroll-mt-24">
        <Videos />
      </section>
      <section id="contact" className="scroll-mt-24">
        <ContactMe />
      </section>
      <Meteors number={20} />
    </main>
  );
}
