import React from "react";
import { Link } from "react-router-dom";
import FreeQuote from "../components/FreeQuote";
import heroImage from "../assets/HeroImage.jpg";
import { BiBuildings } from "react-icons/bi";
import { PiBuildings } from "react-icons/pi";
import { MdDesignServices, MdHomeRepairService } from "react-icons/md";
import { GoTools } from "react-icons/go";

const Services = () => {
  const services = [
    {
      heading: "Building Construction",
      icon: <PiBuildings className="w-[50px] h-[50px] text-yellow-500" />,
      description: "",
    },
    {
      heading: "Building Repairs",
      icon: <GoTools className="w-[50px] h-[50px] text-yellow-500" />,
      description: "",
    },
    {
      heading: "Custom Design",
      icon: <MdDesignServices className="w-[50px] h-[50px] text-yellow-500" />,
      description: "",
    },
  ];
  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="px-[5%] lg:px-[10%] py-20 lg:py-32"
      >
        <div className="flex flex-col lg:flex-row gap-10 2xl:container mx-auto text-white">
          <div className="lg:w-2/3">
            <h1 className="text-4xl lg:text-6xl font-bold border-l-8 border-yellow-500 p-3 lg:p-5 text-white">
              Our Construction Services
            </h1>
            <p className="mt-10 text-sm lg:text-lg">
              We provide top-quality construction solutions tailored to meet the
              needs of our clients. Whether you're looking for complete building
              construction, specialized repairs, or custom design projects,
              <span className="text-2xl text-yellow-500 font-bold">
                {" "}
                NIPOJ{" "}
              </span>{" "}
              Global delivers with excellence and professionalism.
            </p>
            <div className="mt-14">
              <Link className="uppercase font-bold lg:text-md px-7 py-3 bg-yellow-500 text-black">
                Get A Free Quote
              </Link>
            </div>
          </div>
          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <h2 className="text-yellow-500 text-4xl lg:text-5xl font-semibold">
              What We Do{" "}
            </h2>
            <div className="mt-10 flex flex-col gap-7">
              {services.map((service, index) => (
                <div className="flex gap-4" key={index}>
                  <div>{service.icon}</div>
                  <div>
                    <h5 className="text-white font-semibold text-2xl">
                      {service.heading}
                    </h5>
                    <p className="text-sm lg:w-4/5 text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam, repellat.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FreeQuote />
      <section className="">
        <div className="2xl:container mx-auto">
          <div></div>
          <div className="flex">
            <div className="bg-[#2a2a2a] py-7 w-1/2 grid place-content-center">
              <Link className="border-4 border-white px-10 py-3 text-white">
                Get A Quote
              </Link>
            </div>
            <div className="bg-yellow-500 py-7 w-1/2 grid place-content-center">
              <Link className="border-4 border-white px-10 py-3">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
