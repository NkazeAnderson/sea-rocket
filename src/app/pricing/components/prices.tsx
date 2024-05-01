import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCircleCheck, FaFrancSign } from "react-icons/fa6";
import { services } from "../../../../constants";

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
      <div
        id={`${name.split(" ")[0]}`}
        className="rounded-2xl bg-lightGray border  border-secondary "
      >
        <h1 className="text-center text-secondary">{name}</h1>
        <hr className=" border-dashed border-t-2 border-secondary  my-2" />
        <div className="p-4">
          <div className="md:flex my-2 w-full items-center justify-center md:space-x-3">
            <div className="bg-primary text-white p-2 w-full">
              <h4 className="text-center">Domain</h4>
            </div>

            <div className="bg-white border border-4 border-primary md:bg-primary text-primary md:text-white p-2 w-full md:rounded-xl">
              <h5 className="text-center">
                <i>{domain_price} Fcfa</i>
              </h5>
            </div>
          </div>
          <div className="md:flex my-2 w-full items-center justify-center md:space-x-3">
            <div className="bg-primary text-white p-2 w-full">
              <h4 className="text-center">Hosting</h4>
            </div>
            <div className="bg-white border border-4 border-primary md:bg-primary text-primary md:text-white p-2 w-full md:rounded-xl">
              <h5 className="text-center">
                <i>{hosting_price} Fcfa</i>
              </h5>
            </div>
          </div>
          <div className="md:flex my-2 w-full items-center justify-center md:space-x-3">
            <div className="bg-primary text-white p-2 w-full">
              <h4 className="text-center">Developer</h4>
            </div>
            <div className="bg-white border border-4 border-primary md:bg-primary text-primary md:text-white p-2 w-full md:rounded-xl">
              <h5 className="text-center">
                <i>{developer_fee} Fcfa</i>
              </h5>
            </div>
          </div>
          <div className="mt-12 md:flex my-2 w-full items-center justify-center md:space-x-3">
            <div className="bg-primary text-white p-2 w-full">
              <h3 className="text-center">Total</h3>
            </div>
            <div className="mt-5 md:mt-0 text-secondary p-2 w-full rounded-xl border border-primary">
              <h4 className="text-center">
                <i>{totalPrice} FCFA</i>
              </h4>
            </div>
          </div>
        </div>
        <hr className=" border-dashed border-t-2 border-secondary  my-2" />
        <h3 className="text-center py-2">You get</h3>
        <div className="p-4">
          {includes.map((value) => (
            <div key={value} className="flex space-x-2 my-2 items-center">
              <p>
                <FaCircleCheck className="text-secondary" />
              </p>
              <p>{value}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center py-2 space-x-4 text-white">
          <button className="flex items-center space-x-4 bg-secondary rounded-xl  py-2 px-8">
            <h5 className="inline">Get Offer</h5>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

function PriceList({}: Props) {
  return (
    <section className="my-[70px] p-2 md:px-[50px]">
      <h1 className="text-center text-primary py-4">Prices</h1>
      <div className="md:flex flex-wrap">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </section>
  );
}

export default PriceList;
