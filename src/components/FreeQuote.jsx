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
          <Link className="text-sm lg:text-lg font-semibold border-4 border-yellow-500 px-4 py-2 lg:px-7 lg:py-3">
            Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeQuote;
