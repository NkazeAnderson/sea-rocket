import React from "react";

type Props = { type: string };

function Circle() {
  return <div className="size-[100px] rounded-full bg-secondary"></div>;
}

function Circles({ type }: Props) {
  return (
    <div className="flex space-x-0 overflow-x-hidden w-screen">
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      {(type === "full" || type === "short") && (
        <>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </>
      )}
    </div>
  );
}

export default Circles;
