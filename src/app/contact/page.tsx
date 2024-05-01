import React from "react";
import ContactHeroSection from "./component/heroSection";
import ContactForm from "./component/form";
import { FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactInfo from "../components/navbar/contactInfo";
import Image from "next/image";

type Props = {};

function Contact({}: Props) {
  return (
    <>
      <ContactHeroSection />
      <h1 className="pt-20 text-center text-primary">Contact Us</h1>
      <section className="pt-12 mb-4 px-0 md:px-[50px]">
        <div className="md:flex">
          <div className="md:w-1/3 text-white bg-secondary p-4">
            <ContactInfo />
          </div>
          <div className="flex-grow relative">
            <Image
              className="absolute z-0"
              fill
              src={"/hero-background.jpg"}
              alt=""
            />
            <div className="relative flex justify-center z-10 bg-white/70">
              <div className="p-2 md:w-1/2">
                <h3 className=" text-primary py-4">Send us an email</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
