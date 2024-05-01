"use client";
import React from "react";

type Props = {
  text: string;
  action: () => void;
};

function CallToActionButton({ text, action }: Props) {
  return (
    <div
      onClick={() => {
        action();
      }}
      className="border-2 rounded-full bg-primary md:bg-secondary border-white py-2 px-10 hover:cursor-pointer"
    >
      <h4 className="text-white ">{text}</h4>
    </div>
  );
}

export default CallToActionButton;
