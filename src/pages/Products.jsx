import React, { useState } from "react";
import Solar1 from "../assets/Solar1.jpg";
import Solar2 from "../assets/Solar2.jpg";
import Solar3 from "../assets/Solar3.jpg";
import Solar4 from "../assets/Solar4.jpg";
import Solar5 from "../assets/Solar5.jpg";
import Solar6 from "../assets/Solar6.jpg";

const Products = () => {
  const [btnIdx, setBtnIdx] = useState(0);
  const buttons = ["Solar Panels"];

  const images = [[Solar1, Solar2, Solar3, Solar4, Solar5, Solar6]];
  return (
    <main className="px-[5%] lg:px-[10%] py-20">
      <div className="2xl:container mx-auto">
        <h1 className="text-6xl font-bold text-center">Products</h1>

        <div className="mt-10">
          {buttons.map((btn, index) => (
            <button
              onClick={() => setBtnIdx(index)}
              key={index}
              className={`${
                btnIdx == index ? "border-b-4 border-yellow-500" : "'"
              } text-2xl font-semibold px-4 py-2 cursor-pointer`}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 flex-wrap">
          {images[btnIdx].map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt=""
                className="w-[500px] h-[400px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
