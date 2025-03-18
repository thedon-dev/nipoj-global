import React from "react";
import { Link } from "react-router-dom";

const FreeQuote = () => {
  return (
    <div className="py-8 px-[5%] lg:px-[15%] shadow-2xl">
      <div className="2xl:container mx-auto flex flex-wrap items-center justify-between">
        <h2 className="text-sm lg:text-3xl font-semibold lg:font-bold">
          Get A Quote For Your Project
        </h2>
        <div className="">
          <a
            href="/NIPOJ GLOBAL PROFILE.pdf"
            download="NIPOJ_GLOBAL_profile.pdf"
            className="text-sm lg:text-base px-4 lg:px-7 py-2 border-4 border-[#2a2a2a]"
          >
            Company Brochure (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default FreeQuote;
