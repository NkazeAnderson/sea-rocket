import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Logo({}: Props) {
  return (
    <Link href={"/"}>
      <div className="md:flex flex-row space-x-2 hidden">
        <Image src={"/logo.png"} width={100} height={100} alt="logo" />
        <div>
          <h2 className="text-white leading-none">Sea</h2>
          <h2 className="text-white leading-none">Rocket</h2>
          <h2 className="text-white leading-none">Tech</h2>
        </div>
      </div>
      <div className="flex flex-row space-x-2 md:hidden">
        <Image src={"/logo.png"} width={60} height={50} alt="logo" />
        <div>
          <h3 className="text-white text-[24px] leading-none">Sea</h3>
          <h3 className="text-white text-[24px] leading-none">Rocket</h3>
          <h3 className="text-white text-[24px] leading-none">Tech</h3>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
