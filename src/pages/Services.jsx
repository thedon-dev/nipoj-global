import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FreeQuote from "../components/FreeQuote";
import heroImage from "../assets/HeroImage.jpg";
import { BiBuildings } from "react-icons/bi";
import { PiBuildings, PiDotBold } from "react-icons/pi";
import { MdDesignServices, MdHomeRepairService } from "react-icons/md";
import { GoTools } from "react-icons/go";
import YellowMarker from "../components/YellowMarker";
import LatestProjects from "../sections/mainPage/LatestProjects";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  const BuildingConstServ = [
    "residential construction",
    "Commercial Buildings",
    "Industrial Structures",
    "Road & Infrastructure Development",
    "Project Management & Consultation",
  ];

  const RepairConstServ = [
    "Electrical Repairs & Wiring",
    "Plumbing & Water Systems ",
    "Roofing Repairs & Replacement ",
    "Masonry & Concrete Work ",
    "HVAC Installation & Maintenance ",
    "Painting & Finishing",
  ];

  const DesignConstServ = [
    "Architectural & Structural Designs",
    "Interior Design & Decoration",
    "Landscaping & Outdoor Spaces",
    "Smart Home & Security Installations",
    "Modular & Prefabricated Constructions",
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
              <Link className="font-bold lg:text-md px-7 py-3 bg-yellow-500 text-black">
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
          <div className="lg:w-4/5 ms-auto bg-[#f7f7f7]">
            <div className="px-[5%] py-20 lg:p-32">
              <h2 className="text-4xl font-semibold">Building Construction</h2>
              <YellowMarker />
              <p className="lg:text-lg mt-5">
                At Nipoj Global, we specialize in the design, planning, and
                construction of high-quality buildings. Our team of experienced
                architects, engineers, and builders work together to create
                durable and aesthetically pleasing structures that meet modern
                standards.
              </p>
              <div className="grid lg:grid-cols-3 gap-y-5 gap-x-10 mt-5">
                {BuildingConstServ.map((service, index) => (
                  <p
                    key={index}
                    className="text-sm lg:text-base flex items-center"
                  >
                    <PiDotBold size={30} />
                    {service}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex">
              <div className="bg-[#2a2a2a] py-7 w-1/2 grid place-content-center">
                <Link className="border-4 text-sm border-white px-5 lg:px-10 py-1 lg:py-2 text-white">
                  Get A Quote
                </Link>
              </div>
              <div className="bg-yellow-500 py-7 w-1/2 grid place-content-center">
                <Link className="border-4 text-sm border-white px-5 lg:px-10 py-1 lg:py-2 text-white">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="2xl:container mx-auto">
          <div className="lg:w-4/5">
            <div className="px-[5%] py-20 lg:px-20 lg:py-32">
              <h2 className="text-4xl font-semibold">
                Repairs & Installations
              </h2>
              <YellowMarker />
              <p className="lg:text-lg mt-5">
                We provide expert repair and installation services to keep your
                property in top condition. Whether it’s a minor fix or a major
                renovation, our skilled technicians deliver reliable solutions
                for homes and commercial buildings.
              </p>
              <div className="grid lg:grid-cols-3 gap-y-5 gap-x-10 mt-5">
                {RepairConstServ.map((service, index) => (
                  <p
                    key={index}
                    className="text-sm lg:text-base flex items-center"
                  >
                    <PiDotBold size={30} />
                    {service}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex">
              <div className="bg-[#2a2a2a] py-7 w-1/2 grid place-content-center">
                <Link className="border-4 text-sm border-white px-5 lg:px-10 py-1 lg:py-2 text-white">
                  Get A Quote
                </Link>
              </div>
              <div className="bg-yellow-500 py-7 w-1/2 grid place-content-center">
                <Link className="border-4 text-sm border-white px-5 lg:px-10 py-1 lg:py-2 text-white">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="2xl:container mx-auto">
          <div className="lg:w-4/5 ms-auto bg-[#f7f7f7]">
            <div className="px-[5%] py-20 lg:px-20 lg:py-32">
              <h2 className="text-4xl font-semibold">Custom Design Projects</h2>
              <YellowMarker />
              <p className="lg:text-lg mt-5">
                We bring creative and innovative designs to life, tailoring each
                project to meet the unique vision of our clients. From
                architectural planning to interior styling, we ensure every
                detail is perfectly executed.
              </p>
              <div className="grid lg:grid-cols-3 gap-y-5 gap-x-10 mt-5">
                {DesignConstServ.map((service, index) => (
                  <p
                    key={index}
                    className="text-sm lg:text-base flex items-center"
                  >
                    <PiDotBold size={30} />
                    {service}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex">
              <div className="bg-[#2a2a2a] py-7 w-1/2 grid place-content-center">
                <Link className="border-4 text-sm border-white px-5 lg:px-10 py-1 lg:py-2 text-white">
                  Get A Quote
                </Link>
              </div>
              <div className="bg-yellow-500 py-7 w-1/2 grid place-content-center">
                <Link className="border-4 text-sm border-white px-5 lg:px-10 py-1 lg:py-2 text-white">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LatestProjects />
    </>
  );
};

export default Services;
