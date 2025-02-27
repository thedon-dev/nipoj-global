import React from "react";
import YellowMarker from "../../components/YellowMarker";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="lg:w-2/5 bg-[#2a2a2a] text-white px-[5%] py-10 lg:p-20">
        <h2 className="text-3xl lg:text-4xl font-bold">
          We've Been Building For Over 10 Years
        </h2>
        <YellowMarker />
        <p className="text-sm mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          sit, consectetur eveniet consequatur minus temporibus velit neque
          numquam dolor illum!
        </p>
        <div className="mt-10">
          <Link className="lg:text-lg font-semibold px-7 py-2 border-4 border-yellow-500">
            ABOUT US
          </Link>
        </div>
      </div>
      <div className="lg:w-3/5">
        <div className="">
          <video src="" className=""></video>
        </div>
        <div className="flex w-full mt-auto">
          <div className="bg-yellow-500 w-1/2 px-5 flex flex-col justify-center">
            <h2 className="text-xl font-semibold">Call For A Quote</h2>
            <p className="text-lg">+234 (0) 8035306165</p>
          </div>
          <div className="grid place-content-center w-1/2 p-5">
            <Link className="px-7 py-2 border-4 border-[#2a2a2a]">
              Online Estimate Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
