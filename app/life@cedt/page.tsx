"use client";
import { VlogPlayer } from "@/components/life@cedt/vlog";
import ThoughtSection from "@/components/life@cedt/thoughts";
import { pageWording } from "@/config/wording";
import WhatWeHaveLearned from "@/components/life@cedt/learned";

export default function BlogPage() {
  return (
    <div className="relative items-center">
      <VlogPlayer vdoSrc="/life@cedt/video.mp4">
        <div className="flex items-center justify-center absolute inset-0 text-white">
          <h1 className="text-inherit text-6xl">
            {pageWording.lifeAtCedt.hero.title1}
            <span className="text-primary">
              {pageWording.lifeAtCedt.hero.title2}
            </span>
          </h1>
        </div>
      </VlogPlayer>

      <div className="pb-16 flex flex-col items-center">
        <div className="items-center font-black text-5xl my-20">
          {pageWording.lifeAtCedt.whatWeHaveLearned.title}
        </div>
        <WhatWeHaveLearned
          CourseThoughts={
            pageWording.lifeAtCedt.whatWeHaveLearned.courseThoughts
          }
        />
      </div>

      <div className="pb-16">
        <div className="items-center font-black text-5xl my-20">
          {pageWording.lifeAtCedt.thought.title}
        </div>
        <ThoughtSection
          thoughts={pageWording.lifeAtCedt.thought.studentThoughts}
        />
      </div>

      <footer className="text-xs font-thin ml-auto">
        {pageWording.lifeAtCedt.footer.credit}
      </footer>
    </div>
  );
}
