import React from "react";
import { LuConstruction } from "react-icons/lu";
import { Link } from "react-router-dom";
import YellowMarker from "../components/YellowMarker";
import LatestProjects from "../sections/mainPage/LatestProjects";
import { Helmet } from "react-helmet";
import { FaBuilding, FaRoad, FaTasks } from "react-icons/fa";
import AboutSection from "../sections/mainPage/AboutSection";
import HeroImage from "../assets/HeroImage.jpg";
import image2 from "../assets/image2.jpg";
import FreeQuote from "../components/FreeQuote";

const Contact = () => {
  return (
    <main>
      <section className="flex flex-col lg:flex-row 2xl:container mx-auto">
        <div
          className="lg:w-2/3 py-32 px-[5%] lg:p-32 bg-black text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${HeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold border-l-8 border-yellow-500 p-3 lg:p-5 text-white">
            Contact Us
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
            <Link className="uppercase font-bold lg:text-md px-7 py-3 bg-yellow-500 text-black">
              Send a message
            </Link>
          </div>
        </div>
        <div className="bg-yellow-500 lg:w-1/3 px-[5%] py-14 lg:p-14">
          <h2 className="font-bold text-4xl text-[#2a2a2a]">Contact Info</h2>
          <div className="flex flex-col py-10 justify-center gap-8 ">
            <div className="flex flex-col gap-2 mt-2">
              <h4 className="text-[#2a2a2a] font-semibold">Our Office</h4>
              <p>
                No. 30 Omerelu Street GRA, Phase II, Port Harcourt, Rivers State
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h4 className="text-[#2a2a2a] font-semibold">
                Open Office Hours
              </h4>
              <p>Mon - Fri: 9am - 6pm</p>
              <p>Sat - Sun: 10am - 4pm</p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <h4 className="text-[#2a2a2a] font-semibold">Get In Touch</h4>
              <Link to="https://nipoj-global.vercel.app" className="underline">
                nipoj-global.vercel.app
              </Link>
              <p>+234 (0) 8035306165</p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-8 px-[5%] lg:px-[15%] shadow-2xl">
        <div className="2xl:container mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
          <div>
            <h2 className="text-xl lg:text-3xl text-yellow-500 font-semibold lg:font-bold">
              Call: +234 (0) 8035306165
            </h2>
            <p className="text-sm lg:text-lg w-2/3">
              We Can’t Wait to Make Your Ideas a Reality
            </p>
          </div>

          <div className="mt-5">
            <Link className="text-sm lg:text-lg font-semibold border-4 border-yellow-500 px-4 py-2 lg:px-7 lg:py-3">
              Online Estimate Form
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
