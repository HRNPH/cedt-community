"use client";
import Image from "next/image";
import { CourseThought } from "./types/type";

export function CourseCard(props: CourseThought) {
  const { title, description, image, alignment } = props;
  return (
    <div className="border-3 border-[#E7E7E7] bg-white rounded-xl w-[60%] h-[200px] relative flex flex-row shadow-lg mb-14 transform transition-transform duration-300 hover:scale-105">
      {alignment === "left" ? (
        <div className="h-full w-[40%] relative rounded-lg">
          <Image
            src={image}
            alt="coursesImg"
            fill={true}
            className="object-cover rounded-l-lg"
          />
        </div>
      ) : null}
      {/* ----- Content ---- */}
      <div className="text-[#384051] text-lg m-2 relative top-2 mr-5 flex-1">
        <h2 className="font-bold mb-5">{title}</h2>
        <p className="font-medium">{description}</p>
      </div>
      {/* ------------------ */}
      {alignment === "right" ? (
        <div className="h-full w-[40%] relative rounded-lg right-0">
          <Image
            src={image}
            alt="coursesImg"
            fill={true}
            className="object-cover rounded-r-lg"
          />
        </div>
      ) : null}
    </div>
  );
}

export default function WhatWeHaveLearned(props: {
  CourseThoughts: CourseThought[];
}) {
  return (
    <>
      {props.CourseThoughts.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </>
  );
}
