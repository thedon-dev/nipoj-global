import React, { useEffect } from "react";
import HeroImage from "../assets/HeroImage.jpg";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="flex flex-col lg:flex-row 2xl:container mx-auto">
        <div
          className="py-20 px-[5%] lg:p-32 bg-black text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${HeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold border-l-8 border-yellow-500 p-3 lg:p-5 text-white">
            Engineering & Construction
          </h1>
          <p className="mt-10 text-sm lg:text-xl lg:w-2/3">
            With a commitment to quality, innovation, and sustainability,{" "}
            <span className="text-2xl text-yellow-500 font-bold">NIPOJ </span>
            Global Services Ltd. delivers cutting-edge engineering and
            construction solutions for commercial, industrial, and
            infrastructure projects. Our expertise ensures durable and
            cost-effective structures that meet global standards.
          </p>
        </div>
      </section>
      <section className="px-[5%] lg:px-[10%]">
        <div className="2xl:container mx-auto"></div>
      </section>
      <section className="2xl:container mx-auto bg-yellow-500 px-[5%] lg:px-[10%] py-20">
        <h1 className="text-2xl lg:text-4xl text-center font-semibold text-[#2a2a2a]">
          Have a Project in Mind? <br /> Let's Get Building
        </h1>
      </section>
    </>
  );
};

export default Projects;
