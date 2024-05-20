'use client'
import { VlogPlayer } from "@/components/life@cedt/vlog";
import { FridayActivities, IntensiveCourses, Internship } from "@/components/life@cedt/learned";
import { PrameThought, NowThought, ApiThought, EstherThought } from "@/components/life@cedt/thoughts";

export default function BlogPage() {
  return (
    <div className="relative items-center">
    <VlogPlayer vdoSrc="/life@cedt/video.mp4">
        <div className="flex items-center justify-center absolute inset-0 text-white">
            <h1 className="text-inherit text-6xl">Life</h1>
            <h1 className="text-inherit text-6xl mx-2">@</h1>
            <h1 className="text-primary text-6xl">CEDT</h1>
        </div>
    </VlogPlayer>
      

      <div className="pb-16 flex flex-col items-center">
      <div className="items-center font-black text-5xl my-20">What we have learned so far</div>
      <IntensiveCourses/>
      <FridayActivities/>
      <Internship/>
      </div>


      <div className="pb-16">
        <div className="items-center font-black text-5xl my-20">Thoughts from us</div>
          <div className="flex flex-row">
          <PrameThought/>
          <NowThought/>
          <ApiThought/>
          <EstherThought/>
          </div>
      </div>

    <div className="text-xs font-thin ml-auto text-right">Credit: Video and photos sourced from the Facebook page of Computer Engineering & Digital Technology, Chulalongkorn University.</div>
  </div>
  );
}
