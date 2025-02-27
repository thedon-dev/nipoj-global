import React from "react";
import { LuConstruction } from "react-icons/lu";
import { Link } from "react-router-dom";
import YellowMarker from "../components/YellowMarker";
import LatestProjects from "../sections/mainPage/LatestProjects";
import { Helmet } from "react-helmet";
import { FaBuilding, FaRoad, FaTasks } from "react-icons/fa";

const HomePage = () => {
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
            className="lg:w-2/3 py-32 px-[5%] lg:p-32 bg-black text-white"
            style={{ backgroundImage: `url()` }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold border-l-8 border-yellow-400 p-3 lg:p-5 text-white">
              Engineering & Construction
            </h1>
            <p className="mt-10 text-sm lg:text-xl">
              With a commitment to quality, innovation, and sustainability,{" "}
              <span className="text-2xl text-yellow-400 font-bold">NIPOJ </span>
              Global Services Ltd. delivers cutting-edge engineering and
              construction solutions for commercial, industrial, and
              infrastructure projects. Our expertise ensures durable and
              cost-effective structures that meet global standards.
            </p>
            <div className="mt-14">
              <Link className="uppercase font-bold lg:text-md px-7 py-3 bg-yellow-400 text-black">
                view our work
              </Link>
            </div>
          </div>
          <div className="bg-yellow-400 lg:w-1/3 px-[5%] py-14 lg:p-14">
            <h2 className="font-bold text-4xl">Our Service</h2>
            <div className="flex flex-col py-10 justify-center gap-10 ">
              <div className="flex gap-5 items-center mt-2">
                <FaBuilding className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] text-white" />
                <div>
                  <h4 className="font-semibold text-xl">
                    Structural & Civil Engineering
                  </h4>
                  <p className="text-sm w-4/5 text-white">
                    We design and construct residential, commercial, and
                    industrial buildings, ensuring durability, efficiency, and
                    sustainability in every project.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center mt-2">
                <FaRoad className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] text-white" />
                <div className="">
                  <h4 className="font-semibold text-xl">
                    Infrastructure Development
                  </h4>
                  <p className="text-sm w-4/5 text-white">
                    From bridges and highways to energy-efficient structures, we
                    handle critical infrastructure projects with precision and
                    expertise.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center mt-2">
                <FaTasks className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] text-white" />
                <div>
                  <h4 className="font-semibold text-xl">
                    Project Management & Execution
                  </h4>
                  <p className="text-sm w-4/5 text-white">
                    We oversee projects from design to completion, ensuring
                    timely delivery, cost efficiency, and compliance with
                    international safety standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <Link className="px-7 py-1 border-4 border-[#2a2a2a]">
                See More
              </Link>
            </div>
          </div>
        </section>
        <div className="py-8 px-[5%] lg:px-[15%]">
          <div className="2xl:container mx-auto flex flex-wrap items-center justify-between">
            <h2 className="text-sm lg:text-4xl font-semibold lg;font-bold">
              Get A Quote For Your Project
            </h2>
            <div className="">
              <Link className="text-sm lg:text-xl font-semibold border-4 border-yellow-400 px-4 py-2 lg:px-7 lg:py-3">
                Free Quote
              </Link>
            </div>
          </div>
        </div>
        <section className="bg-[#f7f7f7]">
          <div className="2xl:container flex flex-col lg:flex-row mx-auto">
            <div className="lg:w-1/3 h-[20rem]"></div>
            <div className="lg:w-2/3 mt-10 lg:mt-0">
              <div className="px-[5%] lg:px-24 lg:py-36">
                <h2 className="font-bold text-4xl">
                  No Project Too Big Or Too Small
                </h2>
                <YellowMarker />
                <div className="grid lg:grid-cols-2 text-sm gap-5 lg:gap-10 mt-10">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit nobis quod consectetur ad alias voluptatibus quas.
                    Cupiditate rerum culpa ad impedit dolor? Vero autem fugiat
                    ipsum esse, laboriosam ipsam a fugit delectus est maxime
                    laborum officiis qui consequatur! Obcaecati quam quidem
                    libero architecto consectetur quibusdam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit voluptate adipisci ut? Nostrum, autem ipsa.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit voluptate adipisci ut? Nostrum, autem ipsa.
                  </p>
                  <div className="mt-8 lg:mt-0">
                    <Link className="px-10 py-3 border-4 font-semibold border-black">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex text-black mt-10 2xl:container mx-auto">
                <div className="bg-yellow-400 w-1/2 flex flex-col items-center p-4">
                  <h3 className="font-bold text-xl lg:text-3xl">12</h3>
                  <p className="font-semibold lg:font-bold">
                    years established
                  </p>
                </div>
                <div className="bg-[#242424] w-1/2 flex flex-col items-center p-4 text-white">
                  <h3 className="font-bold text-xl lg:text-3xl">250</h3>
                  <p className="font-semibold lg:font-bold">
                    projects completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LatestProjects />
      </main>
    </>
  );
};

export default HomePage;
