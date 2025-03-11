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
      heading: "Civil, Power & Communications Engineering Construction",
      icon: <PiBuildings className="w-[50px] h-[50px] text-yellow-500" />,
      description:
        "We specialize in large-scale civil, power, and telecommunications infrastructure projects, ensuring quality and efficiency in construction.",
    },
    {
      heading: "Energy",
      icon: <GoTools className="w-[50px] h-[50px] text-yellow-500" />,
      description:
        "Our energy solutions include power generation, renewable energy systems, and grid infrastructure for sustainable and efficient energy distribution.",
    },
    {
      heading: "Marine and Consultancy",
      icon: <MdDesignServices className="w-[50px] h-[50px] text-yellow-500" />,
      description:
        "We offer expert maritime solutions, underwater engineering, and professional consultancy services tailored for offshore and marine industries.",
    },
    {
      heading: "Mining Operation",
      icon: (
        <MdHomeRepairService className="w-[50px] h-[50px] text-yellow-500" />
      ),
      description:
        "Our mining operations focus on safe, efficient extraction and processing of minerals, ensuring compliance with environmental and safety regulations.",
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
              At
              <span className="text-2xl text-yellow-500 font-bold">
                {" "}
                NIPOJ{" "}
              </span>
              Global Services Limited, we specialize in delivering comprehensive
              engineering and infrastructure solutions. Our expertise spans
              Civil, Power & Communications Engineering Construction, Energy
              Solutions, Marine Engineering & Consultancy, and Mining
              Operations. We are committed to building high-quality
              infrastructure, enhancing energy efficiency, developing marine &
              offshore projects, and ensuring sustainable mining practices all
              while maintaining the highest standards of safety, quality, and
              environmental responsibility.
            </p>
            <div className="mt-14">
              <Link className="font-bold lg:text-md px-7 py-3 bg-yellow-500 text-black">
                Get A Free Quote
              </Link>
            </div>
          </div>
          {/* <div className="lg:w-1/3 mt-10 lg:mt-0">
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
          </div> */}
        </div>
      </section>
      <FreeQuote />
      <section className="">
        <div className="2xl:container mx-auto">
          <div className="lg:w-4/5 bg-[#f7f7f7]">
            <div className="px-[5%] py-20 lg:p-32">
              <h2 className="text-4xl font-semibold">
                Civil, Power & Communications Engineering Construction
              </h2>
              <YellowMarker />
              <p className="lg:text-lg mt-5">
                Nipoj Global specializes in civil engineering, power
                infrastructure, and telecommunications construction. We deliver
                high-quality projects that enhance urban and industrial
                development, ensuring efficiency and sustainability.
              </p>
              <div className="grid lg:grid-cols-3 gap-y-5 gap-x-10 mt-5">
                {[
                  "Road & Bridge Construction",
                  "High-Rise & Commercial Buildings",
                  "Electrical Grid Infrastructure",
                  "Telecommunication Towers & Fiber Optics",
                  "Water & Waste Management Systems",
                ].map((service, index) => (
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
          <div className="lg:w-4/5 ms-auto">
            <div className="px-[5%] py-20 lg:p-32">
              <h2 className="text-4xl font-semibold">Energy</h2>
              <YellowMarker />
              <p className="lg:text-lg mt-5">
                We provide advanced energy solutions, including renewable energy
                systems and power generation infrastructure, ensuring efficient
                and sustainable energy distribution.
              </p>
              <div className="grid lg:grid-cols-3 gap-y-5 gap-x-10 mt-5">
                {[
                  "Solar & Wind Energy Solutions",
                  "Hydroelectric & Biomass Energy",
                  "High Voltage Power Distribution",
                  "Energy Storage & Backup Systems",
                  "Oil & Gas Power Solutions",
                ].map((service, index) => (
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
          <div className="lg:w-4/5 bg-[#f7f7f7]">
            <div className="px-[5%] py-20 lg:p-32">
              <h2 className="text-4xl font-semibold">Marine and Consultancy</h2>
              <YellowMarker />
              <p className="lg:text-lg mt-5">
                Our marine services and consultancy provide cutting-edge
                solutions for offshore engineering, underwater construction, and
                maritime logistics.
              </p>
              <div className="grid lg:grid-cols-3 gap-y-5 gap-x-10 mt-5">
                {[
                  "Offshore Platform Construction",
                  "Underwater Inspection & Maintenance",
                  "Port & Harbor Development",
                  "Dredging & Land Reclamation",
                  "Maritime Safety & Compliance Consulting",
                ].map((service, index) => (
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
          <div className="lg:w-4/5 ms-auto">
            <div className="px-[5%] py-20 lg:p-32">
              <h2 className="text-4xl font-semibold">Mining Operation</h2>
              <YellowMarker />
              <p className="lg:text-lg mt-5">
                We offer efficient and environmentally responsible mining
                solutions, focusing on mineral extraction, processing, and site
                rehabilitation.
              </p>
              <div className="grid lg:grid-cols-3 gap-y-5 gap-x-10 mt-5">
                {[
                  "Exploration & Surveying",
                  "Open-Pit & Underground Mining",
                  "Mineral Processing & Refining",
                  "Environmental Impact Assessments",
                  "Mining Safety & Regulatory Compliance",
                ].map((service, index) => (
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
