import React, { useState } from "react";
import Solar1 from "../assets/Solar1.jpg";
import Solar2 from "../assets/Solar2.jpg";
import Solar3 from "../assets/Solar3.jpg";
import Solar4 from "../assets/Solar4.jpg";
import Solar5 from "../assets/Solar5.jpg";
import Solar6 from "../assets/Solar6.jpg";
import Solar7 from "../assets/Solar7.jpg";
import Battery from "../assets/Battery.jpg";
import Panels from "../assets/Panels.jpg";
import Setup from "../assets/Setup.jpg";
import Setup2 from "../assets/Setup2.jpg";

const Products = () => {
  const [btnIdx, setBtnIdx] = useState(0);
  const buttons = ["Solar Panels", "Images"];

  const images = [
    [
      {
        name: "JT132M 485-505W Solar panel",
        image: "https://en.ymgjln.com/Uploads/661492d5a3c1a.jpg",
      },
      {
        name: "JT132M 400-420W solar panel",
        image: "https://en.ymgjln.com/Uploads/661493217861b.jpg",
      },
      {
        name: "JT120M 350-390W solar panel",
        image: "https://en.ymgjln.com/Uploads/6614937877e33.jpg",
      },
      {
        name: "JT156P 370W solar panel",
        image: "https://en.ymgjln.com/Uploads/661493af363ed.jpg",
      },
      {
        name: "JT144M 430-450W solar panel",
        image: "https://en.ymgjln.com/Uploads/661494096eae6.jpg",
      },
      {
        name: "JT39M 150-180W solar panel",
        image: "https://en.ymgjln.com/Uploads/66149432ea8d4.jpg",
      },
      {
        name: "JT72M 190-210W solar panel",
        image: "https://en.ymgjln.com/Uploads/6614946baecc2.jpg",
      },
      {
        name: "JT60M 260-300W solar panel",
        image: "https://en.ymgjln.com/Uploads/661494a5a886e.jpg",
      },
      {
        name: "JT108M 305-340W solar panel",
        image: "https://en.ymgjln.com/Uploads/661494dd729e5.jpg",
      },
      {
        name: "JT72P 285-330W solar panel",
        image: "https://en.ymgjln.com/Uploads/653f5e874e605.jpg",
      },
      {
        name: "JT60P 250-275W solar panel",
        image: "https://en.ymgjln.com/Uploads/653f5eb4e0085.jpg",
      },
      {
        name: "JT36P 150-160W solar panel",
        image: "https://en.ymgjln.com/Uploads/60a8bee9c5b36.jpg",
      },
    ],
    [
      { image: Solar1 },
      { image: Solar2 },
      { image: Solar3 },
      { image: Solar4 },
      { image: Solar5 },
      { image: Solar6 },
      { image: Solar6 },
      { image: Solar7 },
      { image: Panels },
      { image: Setup },
      { image: Setup2 },
      { image: Battery },
    ],
  ];

  return (
    <main className="px-[5%] lg:px-[10%] py-20">
      <div className="2xl:container mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold text-center">Products</h1>

        <div className="mt-10 flex gap-5">
          {buttons.map((btn, index) => (
            <button
              onClick={() => setBtnIdx(index)}
              key={index}
              className={`${
                btnIdx === index ? "border-b-4 border-yellow-500" : ""
              } text-md lg:text-xl font-semibold px-4 py-2 cursor-pointer`}
            >
              {btn}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {images[btnIdx].map((data, index) => (
            <div key={index} className="text-center">
              <img
                src={data.image}
                alt={`Product ${index}`}
                className="w-[450px] h-[350px] object-cover mx-auto"
              />
              {btnIdx === 0 && (
                <p className="mt-3 font-semibold">{data.name}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
