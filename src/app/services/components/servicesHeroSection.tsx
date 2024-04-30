import CallToActionButton from "@/app/components/navbar/callToActionButton";
import Circles from "@/app/components/navbar/circles";
import Image from "next/image";
import React from "react";

type Props = {};

function ServicesHeroSection({}: Props) {
  const services = [
    "Clone Website",
    "Build WordPress Website",
    "Build React Website",
    "Build Rest APIs",
    "Build Mobile Apps",
  ];
  return (
    <section className="relative h-[550px]">
      <Image
        className="absolute object-fill z-10"
        fill={true}
        src={"/hero-background.jpg"}
        alt="background image"
      />
      <div className="absolute w-full h-full px-[50px] z-10 text-white hero-background-grad">
        <div className="flex">
          <div className="w-[70%] space-y-2">
            <h1 className="text-white pb-[25px] pt-[50px]">
              Sea Rocket Services
            </h1>

            <div className="w-[600px] space-y-4 mx-auto">
              {services.map((service) => (
                <div key={service} className="flex space-x-2 items-center">
                  <Image
                    src={"/rocket-pointer.png"}
                    width={70}
                    height={50}
                    alt="rocket pointers"
                  />

                  <h4 className="text-center">{service}</h4>
                </div>
              ))}

              {/* <div className="flex items-center  justify-center">
                <div className="inline-blockmx-auto mt-8">
                  <CallToActionButton text="More" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-[30%] h-full ">
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

export default ServicesHeroSection;
