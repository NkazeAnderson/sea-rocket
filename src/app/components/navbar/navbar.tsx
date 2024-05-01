"use client";
import React, { useState } from "react";
import Logo from "./logo";
import NavLinks from "./navLinks";
import CallToActionButton from "./callToActionButton";
import { useRouter } from "next/navigation";
import MobileMenuButton from "./mobileMenuButton";

type Props = {};

function Navbar({}: Props) {
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const goToPricing = () => {
    router.push("/pricing");
  };
  return (
    <>
      <nav className="px-[50px] py-3 md:flex flex-row justify-between items-center bg-secondary fixed w-full z-50 hidden">
        <Logo />
        <NavLinks />
        <CallToActionButton text="Pricing" action={goToPricing} />
      </nav>
      <nav className="px-[25px] py-3 flex flex-row justify-between items-center bg-secondary fixed w-full z-50 md:hidden">
        <Logo />
        <div
          onClick={() => {
            setOpened(!opened);
            console.log(opened);
          }}
        >
          <MobileMenuButton />
        </div>
      </nav>
      <div
        className={`bg-secondary ${
          opened && "hidden"
        } pt-[150px] fixed z-40 w-full md:hidden`}
      >
        <NavLinks
          hide={() => {
            // "use client";
            setOpened((prev) => !prev);
          }}
        />
      </div>
    </>
  );
}

export default Navbar;
