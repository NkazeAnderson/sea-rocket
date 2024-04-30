"use client";
import React from "react";
import Logo from "./logo";
import NavLinks from "./navLinks";
import CallToActionButton from "./callToActionButton";
import { useRouter } from "next/navigation";

type Props = {};

function Navbar({}: Props) {
  const router = useRouter();
  const goToPricing = () => {
    router.push("/pricing");
  };
  return (
    <nav className="px-[50px] py-3 flex flex-row justify-between items-center bg-secondary fixed w-full z-50">
      <Logo />
      <NavLinks />
      <CallToActionButton text="Pricing" action={goToPricing} />
    </nav>
  );
}

export default Navbar;
