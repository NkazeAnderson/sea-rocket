"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { services } from "../../../../constants";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

function ServiceCard({ service }: { service: ServiceT }) {
  const {
    name,
    domain_price,
    hosting_price,
    developer_fee,
    image,
    text1,
    text2,
    includes,
  } = service;

  const totalPrice = hosting_price + domain_price + developer_fee;
  const highPrice = totalPrice + 30000;
  return (
    <div className="w-full md:w-1/3 p-4">
      <motion.div
        initial={{ rotate: 10, y: 50 }}
        whileInView={{ rotate: 0, y: 0 }}
        transition={{ duration: 2 }}
        className="rounded-3xl text-white bg-secondary shadow-lg shadow-black my-8"
      >
        <div className="w-full flex justify-center bg-white">
          <Image width={400} height={300} src={image} alt="service image" />
        </div>
        <div className="flex justify-end py-4 px-2">
          <div className="bg-primary rounded-tr-3xl rounded-bl-3xl p-4">
            <h5 className="text-white line-through">{highPrice} FCFA</h5>
            <h5 className="text-yellow">{totalPrice} FCFA</h5>
          </div>
        </div>
        <div className="px-8">
          <h1 className="text-center">{name}</h1>
          <p>{text1}</p>
          <br />
          <p>{text2 && text2}</p>
          <br />
          <Link href={`/pricing`}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex hover:cursor-pointer justify-end items-center p-4 space-x-4 text-yellow"
            >
              <h5 className="inline underline ">More info on pricing</h5>
              <FaArrowRight />
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function ServicesList({}: Props) {
  return (
    <section className="my-[60px] px-2 md:px-[50px]">
      <h1 className="text-center text-primary pt-12">Services</h1>
      <div className="md:flex flex-wrap">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesList;
