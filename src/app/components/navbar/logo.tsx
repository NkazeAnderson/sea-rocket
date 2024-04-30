import Image from "next/image";
import React from "react";

type Props = {};

function Logo({}: Props) {
  return (
    <div className="flex flex-row space-x-2">
      <Image src={"/logo.png"} width={100} height={100} alt="logo" />
      <div>
        <h2 className="text-white leading-none">Sea</h2>
        <h2 className="text-white leading-none">Rocket</h2>
        <h2 className="text-white leading-none">Tech</h2>
      </div>
      <p></p>
    </div>
  );
}

export default Logo;