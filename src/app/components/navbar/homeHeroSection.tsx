"use client";
import Image from "next/image";
import React from "react";
import CallToActionButton from "./callToActionButton";
import Circles from "./circles";
import { getPageInfo } from "../../../../utils";
import { useRouter } from "next/navigation";

type Props = {};

function HomeHeroSection({}: Props) {
  const info = getPageInfo("home");
  const router = useRouter();
  const goToServices = () => {
    const info = getPageInfo("services");
    info && router.push(info.link);
  };
  return (
    <section className="relative h-[550px]">
      <Image
        className="absolute object-fill z-10"
        fill={true}
        src={"/hero-background.jpg"}
        alt="background image"
      />
      <div className=" absolute w-full h-[550px] px-[50px] z-20 text-white hero-background-grad">
        <div className="flex">
          <div className="w-[75%] space-y-5">
            <h1 className="text-white pt-[50px]">BUILDING DIGITAL SOLUTIONS</h1>
            <h4 className="text-center mb-1">
              #1 WEB DEVELOPMENT AGENCY IN CAMEROON
            </h4>
            <div className="w-[600px] space-y-4 mx-auto">
              <p className="text-center">
                Dedicated team of developers to build your websites, sass and
                mobile applications...
              </p>
              <div className="flex items-center  justify-center">
                <div className="inline-blockmx-auto mt-8">
                  <CallToActionButton text="Services" action={goToServices} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25%] h-full ">
            <Image
              className="object-contain absolute bottom-[50px] right-[50px]"
              width={350}
              height={350}
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
