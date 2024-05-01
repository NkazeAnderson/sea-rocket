import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactInfo from "./contactInfo";

type Props = {};

function Footer({}: Props) {
  return (
    <section className="bg-primary text-white px-4">
      <div className="flex w-full justify-between flex-col-reverse md:flex-row">
        <div className="p-4 hidden md:block">
          <Logo />
        </div>
        <div>
          <h3>Links</h3>
          <Link href={"/home"}>
            <p className="text-[18px]">Home</p>
          </Link>
          <Link href={"/services"}>
            <p className="text-[18px]">Services</p>
          </Link>
          <Link href={"/"}>
            <p className="text-[18px]">Terms and Conditions</p>
          </Link>
        </div>
        <div>
          <ContactInfo />
        </div>
      </div>
      <p className="text-center text-[14px] py-4">copy rights @ 2024</p>
    </section>
  );
}

export default Footer;
