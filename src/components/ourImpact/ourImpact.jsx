import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import CountUp from "../CountUp/CountUp";
import { Association1, Association2, Association3, Association4, Association5 } from "../../assets/associactives";

const stats = [
  { id: 1, name: "Projects Done", value: 10, icon: <FaBriefcase /> },
  { id: 2, name: "Active Members", value: 100, icon: <FaUsers /> },
  { id: 3, name: "Countries", value: 3, icon: <BiWorld /> },
];

const brandLogos = [
  {
    alt: "Transistor",
    src: Association1,
  },
  {
    alt: "Reform",
    src: Association2,
  },
  {
    alt: "Tuple",
    src: Association3,
  },
  {
    alt: "SavvyCal",
    src: Association4,
  },
  {
    alt: "Statamic",
    src: Association5,
  },
];


// TODO :  - Fix the Icon size and alignment

const OurImpact = () => {



  return (
    <div id="ourimpact">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Our Impact</h1>
        <p className="text-lg mt-6  text-gray-600">
          In 2023, we worked around the world, contributing to help children,
          fighting poverty, and increasing social justice.
        </p>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white">
                  {stat.icon}
                </div>
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      
      <section className="py-24 sm:py-32">
  <div className="text-center px-6">
    <h2 className="text-3xl font-bold ">Our Associated Brands</h2>
    <p className="text-lg mt-4 text-gray-400">
      We collaborate with global partners to amplify our mission and reach.
    </p>
  </div>

  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      {brandLogos.map((brand, index) => (
        <img
          key={index}
          alt={brand.alt}
          src={brand.src}
          width={158}
          height={48}
          className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
        />
      ))}
    </div>
  </div>
</section>

     
    </div>
  );
};

export default OurImpact;
