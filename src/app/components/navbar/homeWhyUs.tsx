import Image from "next/image";
import React from "react";
import { reasons } from "../../../../constants";

type Props = {};

function ReasonCard({ reason, index }: { reason: ReasonT; index: number }) {
  const { heading, text1, text2, image } = reason;
  return (
    <div className="bg-secondary p-8 rounded-lg my-8">
      <div
        className={`flex ${index % 2 !== 0 ? "flex-row-reverse" : "flex-row"} `}
      >
        <div className="bg-white rounded-lg w-1/2 relative">
          <Image
            className="rounded-lg object-contain"
            src={image}
            fill
            alt="reason card image"
          />
        </div>
        <div className=" p-4 text-white w-1/2">
          <h1>{heading}</h1>
          <p>{text1}</p>
          {text2 && <p>{text2}</p>}
        </div>
      </div>
    </div>
  );
}

function HomeWhyUs({}: Props) {
  return (
    <section className="py-12 px-[50px]">
      <h1 className="text-center text-primary py-10">Why us?</h1>
      <div className=" py-6">
        {reasons.map((value, index) => (
          <ReasonCard key={index} reason={value} index={index} />
        ))}
      </div>
    </section>
  );
}

export default HomeWhyUs;
