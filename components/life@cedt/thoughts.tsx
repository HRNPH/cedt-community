"use client";
import Image from "next/image";
import quote from "@/public/life@cedt/quote.png";
import { Thought } from "./types/type";

export function ThoughCard(props: Thought) {
  return (
    <div className="text-[#384051] bg-white border-2 border-[#FACC15] rounded-2xl w-[23%] h-[420px] relative  shadow-lg transform transition-transform duration-300 hover:scale-105">
      <div className="w-auto h-auto mr-3 ml-7 mt-10">
        <Image src={quote} alt="coursesImg" width={30} height={30} />
      </div>

      <div className="text-lg m-2 relative top-1 mr-5">
        <p>{props.thought}</p>
      </div>

      <div className="flex flex-row">
        <div className="mt-14 ml-6 text-sm">
          <div className="italic font-extralight">{props.name},</div>
          <div className="italic font-extralight">{props.position}</div>
        </div>

        <div className="w-auto h-auto mt-5 ml-12">
          <Image src={props.image} alt="coursesImg" width={90} height={90} />
        </div>
      </div>
    </div>
  );
}

export default function ThoughtSection({ thoughts }: { thoughts: Thought[] }) {
  return (
    <div className="flex flex-row space-x-10">
      {thoughts.map((thought, idx) => (
        <ThoughCard key={idx} {...thought} />
      ))}
    </div>
  );
}
