import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import YellowMarker from "../components/YellowMarker";
import LatestProjects from "../sections/mainPage/LatestProjects";
import { Helmet } from "react-helmet";
import AboutSection from "../sections/mainPage/AboutSection";
import HeroImage from "../assets/HeroImage.jpg";
import image2 from "../assets/image2.jpg";
import FreeQuote from "../components/FreeQuote";
import { GoDotFill } from "react-icons/go";

const HomePage = () => {
  const Services = [
    "Civil, Power and Communications Engineering Construction",
    "Energy",
    "Marine and Consultancy",
    "Mining operation",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          NIPOJ Global Services Ltd. | Engineering & Construction Experts
        </title>
        <meta
          name="description"
          content="NIPOJ Global Services Ltd. is a leader in Engineering, Construction, Renewable Energy, and Marine Services. With a commitment to innovation, sustainability, and quality, we deliver cutting-edge solutions that drive development across industries. Partner with us for reliable and efficient infrastructure solutions."
        />
        <meta
          name="keywords"
          content="Engineering, Construction, Renewable Energy, Marine Services, Infrastructure, Sustainable Solutions"
        />
        <meta name="author" content="NIPOJ Global Services Ltd." />
        <meta
          property="og:title"
          content="NIPOJ Global Services Ltd. | Engineering & Construction Experts"
        />
        <meta
          property="og:description"
          content="Providing innovative solutions in engineering, construction, and renewable energy to drive sustainable development."
        />
        <meta
          property="og:image"
          content="https://nipojglobalservicesltd.org/images/company-banner.jpg"
        />
        <meta property="og:url" content="https://nipojglobalservicesltd.org" />
      </Helmet>
      <main>
        <section className="flex flex-col lg:flex-row 2xl:container mx-auto">
          <div
            className="lg:w-2/3 py-20 px-[5%] lg:p-32 bg-black text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${HeroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold border-l-8 border-yellow-500 p-3 lg:p-5 text-white">
              Engineering & Construction
            </h1>
            <p className="mt-10 text-sm lg:text-xl">
              With a commitment to quality, innovation, and sustainability,{" "}
              <span className="text-2xl text-yellow-500 font-bold">NIPOJ </span>
              Global Services Ltd. delivers cutting-edge engineering and
              construction solutions for commercial, industrial, and
              infrastructure projects. Our expertise ensures durable and
              cost-effective structures that meet global standards.
            </p>
            <div className="mt-14">
              <Link
                to="/projects"
                className="uppercase font-bold lg:text-md px-7 py-3 bg-yellow-500 text-black"
              >
                view our work
              </Link>
            </div>
          </div>
          <div className="bg-yellow-500 lg:w-1/3 px-[5%] py-14 lg:p-14">
            <h2 className="font-bold text-4xl">Our Service</h2>
            <div className="flex flex-col py-10 justify-center gap-5 ">
              {Services.map((service, idx) => (
                <div key={idx} className="flex flex-row gap-3 items-start mt-2">
                  <div>
                    <GoDotFill className="w-[25px] h-[25px] text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#2a2a2a] font-semibold text-xl">
                      {service}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-3">
              <Link
                to="/services"
                className="px-7 py-1 text-[#2a2a2a] border-4 border-[#2a2a2a]"
              >
                See More
              </Link>
            </div>
          </div>
        </section>
        <FreeQuote />
        <section className="bg-[#f7f7f7]">
          <div className="2xl:container flex flex-col lg:flex-row mx-auto">
            <div
              className="lg:w-2/5 hidden lg:block"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="lg:w-2/5 h-[20rem] block lg:hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="lg:w-3/5 mt-10 lg:mt-0">
              <div className="px-[5%] lg:px-24 lg:py-36">
                {/* <h2 className="font-bold text-4xl">No Project Too Big</h2> */}
                {/* <YellowMarker /> */}
                <div className="text-[#2a2a2a]  grid lg:grid-cols-2 text-sm gap-5 lg:gap-10 mt-10">
                  <p>
                    Since 2003, NIPOJ Global Services Limited has been
                    delivering cutting-edge solutions across key sectors,
                    including Engineering, Marine Services, Communications,
                    Power, and Construction. With a strong commitment to
                    innovation and sustainability, we have established ourselves
                    as a trusted leader in the industry.
                  </p>
                  <p>
                    Our experience spans over two decades, allowing us to
                    provide high-quality and cost-effective solutions tailored
                    to meet the unique needs of our clients. We take pride in
                    our ability to execute projects efficiently, ensuring timely
                    delivery without compromising on quality.
                  </p>
                  <p>
                    Backed by a strong network of partnerships and
                    certifications from regulatory bodies such as COREN, DPR,
                    and NOSDRA, we continue to push the boundaries of excellence
                    in Engineering and Construction.
                  </p>
                  <div className="mt-5">
                    <Link
                      to="/aboutus"
                      className="px-10 py-3 border-4 font-semibold border-black"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex text-[#2a2a2a] mt-10 2xl:container mx-auto">
                <div className="bg-yellow-500 w-1/2 flex flex-col items-center p-4">
                  <h3 className="font-bold text-xl lg:text-3xl">21</h3>
                  <p className="font-semibold lg:font-bold">
                    years established
                  </p>
                </div>
                <div className="bg-[#242424] w-1/2 flex flex-col items-center p-4 text-white">
                  <h3 className="font-bold text-xl lg:text-3xl">50+</h3>
                  <p className="font-semibold lg:font-bold">
                    projects completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LatestProjects />
        <AboutSection />
      </main>
    </>
  );
};

export default HomePage;
