import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Circles from "./circles";
import { motion, useAnimate, useInView } from "framer-motion";

type Props = {};

function HomeOfferSection({}: Props) {
  const [scope, animate] = useAnimate();
  const sectionDiv = useRef(null);
  const isInView = useInView(sectionDiv, { once: true });
  useEffect(() => {
    isInView &&
      animate(
        "img",
        { x: ["100%", "-500%", 0] },
        { duration: 18, type: "tween" }
      );
  }, [isInView, animate]);
  return (
    <section className="bg-secondary py-10 text-white relative">
      <h1 className="text-center">What do we offer?</h1>
      <div className="p-2 md:p-0 md:w-[60%] mx-auto">
        <p className="text-center text-[24px]">
          We build and deploy engaging web or mobile applications. We work
          directly with you or your web designers to code out the
          functionalities and experiences your clients need online.
        </p>
      </div>
      <div ref={sectionDiv}></div>
      <motion.div
        ref={scope}
        className="flex space-x-2 my-10 mx-2 w-full overflow-x-auto"
      >
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
        <Image
          src={"/yango-site.png"}
          width={500}
          height={400}
          alt="carousel image"
        />
        <Image src={"/gce.jpg"} width={500} height={400} alt="carousel image" />
        <Image src={"/ngo.jpg"} width={500} height={400} alt="carousel image" />
      </motion.div>
      <div className="absolute bottom-[-50px] left-0">
        <Circles type="full" />
      </div>
    </section>
  );
}

export default HomeOfferSection;
