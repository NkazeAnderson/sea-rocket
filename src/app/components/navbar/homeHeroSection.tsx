"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CallToActionButton from "./callToActionButton";
import Circles from "./circles";
import { getPageInfo } from "../../../../utils";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Props = {};

function HomeHeroSection({}: Props) {
  const [typer, setTyper] = useState("B");
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const goToServices = () => {
    const info = getPageInfo("services");
    info && router.push(info.link);
  };
  const introText = "UILDING DIGITAL SOLUTIONS";

  useEffect(() => {
    const typing = (index: number) => {
      setTyper((prev) => {
        return `${prev}${introText.charAt(index)}`;
      });
    };
    setLoaded(true);
    if (loaded) {
      for (let index = 0; index < introText.length; index++) {
        setTimeout(() => {
          typing(index);
        }, 500 + index * 250);
      }
    }
  }, [loaded]);
  return (
    <section className="relative h-[700px] md:h-[550px]">
      <Image
        className="absolute object-fill z-10"
        fill={true}
        src={"/hero-background.jpg"}
        alt="background image"
      />
      <div className=" absolute w-full h-[700px] md:h-[550px] px-4 md:px-[50px] z-20 text-white hero-background-grad">
        <div className=" block md:flex">
          <div className="w-full md:w-[75%] space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 50, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="text-white pt-[50px] "
            >
              {typer}
            </motion.h1>
            <div className=" md:w-[600px] space-y-4 mx-auto">
              <motion.h4
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 2, delay: 7 }}
                className="text-center hidden md:block"
              >
                Dedicated team of developers to build your websites, sass and
                mobile applications...
              </motion.h4>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 2, delay: 7 }}
                className="text-center md:hidden"
              >
                Dedicated team of developers to build your websites, sass and
                mobile applications...
              </motion.p>
              <div className="flex items-center justify-center">
                <div className="inline-block mx-auto mt-8">
                  <CallToActionButton text="Services" action={goToServices} />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[25%] h-full p-10 md:p-0 ">
            <Image
              className="object-contain hidden md:block md:absolute bottom-[50px] right-[50px]"
              width={350}
              height={350}
              src={"/undraw_web_developer_re_h7ie.svg"}
              alt="background image"
            />
            <Image
              className="object-contain ml-auto md:hidden bottom-[50px] right-[50px]"
              width={200}
              height={200}
              src={"/undraw_web_developer_re_h7ie.svg"}
              alt="background image"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-50px] left-0 z-0">
        <Circles type="short" />
      </div>
    </section>
  );
}

export default HomeHeroSection;
