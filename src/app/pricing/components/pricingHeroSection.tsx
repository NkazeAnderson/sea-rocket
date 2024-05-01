import CallToActionButton from "@/app/components/navbar/callToActionButton";
import Circles from "@/app/components/navbar/circles";
import Image from "next/image";
import React from "react";

type Props = {};

function PricesHeroSection({}: Props) {
  const services = [
    "Clone Website",
    "Build WordPress Website",
    "Build React Website",
    "Build Rest APIs",
    "Build Mobile Apps",
  ];
  return (
    <section className="relative h-[600px]  md:h-[450px]">
      <Image
        className="absolute object-fill z-10"
        fill={true}
        src={"/hero-background.jpg"}
        alt="background image"
      />
      <div className="absolute w-full h-full p-10 md:px-[50px] z-10 text-white hero-background-grad">
        <div className="flex">
          <div className="w-full md:w-[70%] space-y-2">
            <h1 className="text-white pb-[25px] pt-[50px]">
              Sea Rocket Pricing
            </h1>

            <div className="w-full md:w-[600px] space-y-4 mx-auto">
              <h5>
                Pay for your <u className="text-yellow text-2xl">domain</u> and
                we will get to work{" "}
                <u className="text-yellow text-2xl">immediately...</u>{" "}
              </h5>
              <p className="space-y-2">
                <span> ❌ No need for full payments upfront. </span>
                <br />
                <span> ✅ Pay Progessively</span>
                <br />
                <span> ✅ We are here to serve you</span>
              </p>
              {/* <div className="flex items-center  justify-center">
                <div className="inline-blockmx-auto mt-8">
                  <CallToActionButton text="More" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="md:w-[30%] h-full hidden md:block ">
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

export default PricesHeroSection;
