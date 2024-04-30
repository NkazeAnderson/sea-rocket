import Image from "next/image";
import React from "react";
import Circles from "./circles";

type Props = {};

function HomeOfferSection({}: Props) {
  return (
    <section className="bg-secondary py-10 text-white relative">
      <h1 className="text-center">What do we offer?</h1>
      <div className="w-[60%] mx-auto">
        <p className="text-center text-[24px]">
          We build and deploy engaging web or mobile applications. We work
          directly with you or your web designers to code out the
          functionalities and experiences your clients need online.
        </p>
      </div>
      <div className="flex space-x-2 my-10 mx-2 w-full overflow-x-hidden">
        <Image
          src={"/pet-site.png"}
          width={500}
          height={400}
          alt="carousel image"
        />
        <Image
          src={"/shipping-site.png"}
          width={500}
          height={400}
          alt="carousel image"
        />
        {/* <Image
          src={"/yango-site.png"}
          width={500}
          height={400}
          alt="carousel image"
        /> */}
      </div>
      <div className="absolute bottom-[-50px] left-0">
        <Circles type="full" />
      </div>
    </section>
  );
}

export default HomeOfferSection;
