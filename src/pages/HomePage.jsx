import React from "react";
import { LuConstruction } from "react-icons/lu";
import { Link } from "react-router-dom";
import YellowMarker from "../components/YellowMarker";
import LatestProjects from "../sections/mainPage/LatestProjects";

const HomePage = () => {
  return (
    <main>
      <section className="flex flex-col lg:flex-row 2xl:container mx-auto">
        <div
          className="lg:w-2/3 py-32 px-[5%] lg:p-28 bg-black text-white"
          style={{ backgroundImage: `url()` }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold border-l-8 border-yellow-400 p-5 text-white">
            Construction
          </h1>
          <p className="mt-10 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quae odio voluptatibus obcaecati. Perspiciatis modi magni hic
            officia cum error expedita a numquam eveniet? Enim, quibusdam.
          </p>
          <div className="mt-14">
            <Link className="uppercase font-bold lg:text-md px-7 py-3 bg-yellow-400 text-white">
              view our work
            </Link>
          </div>
        </div>
        <div className="bg-yellow-400 lg:w-1/3 px-[5%] py-14 lg:p-14">
          <h2 className="font-bold text-4xl">Our Service</h2>
          <div className="flex flex-col py-10 gap-10 h-full">
            <div className="flex gap-5 items-center mt-2">
              <LuConstruction
                color="white"
                className="w-[30px] h-[30px] lg:w-[70px] lg:h-[70px]"
              />
              <div>
                <h4 className="font-semibold lg:text-xl">
                  Building Construction
                </h4>
                <p className="text-sm w-4/5 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center mt-2">
              <LuConstruction
                color="white"
                className="w-[30px] h-[30px] lg:w-[70px] lg:h-[70px]"
              />
              <div>
                <h4 className="font-semibold lg:text-xl">Foundation Work</h4>
                <p className="text-sm w-4/5 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center mt-2">
              <LuConstruction
                color="white"
                className="w-[30px] h-[30px] lg:w-[70px] lg:h-[70px]"
              />
              <div>
                <h4 className="font-semibold lg:text-xl">Site Management</h4>
                <p className="text-sm w-4/5 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-8 px-[5%] lg:px-[15%]">
        <div className="2xl:container mx-auto flex items-center justify-between">
          <h2 className="text-xl lg:text-4xl font-bold">
            Get A Quote For Your Project
          </h2>
          <div className="">
            <Link className="lg:text-xl font-semibold border-4 border-yellow-400 px-4 py-2 lg:px-7 lg:py-3">
              Free Quote
            </Link>
          </div>
        </div>
      </div>
      <section className="bg-[#f7f7f7]">
        <div className="2xl:container flex flex-col lg:flex-row mx-auto">
          <div className="lg:w-1/3 h-[20rem]"></div>
          <div className="lg:w-2/3">
            <div className="px-[5%] lg:px-24 lg:py-36">
              <h2 className="font-bold text-4xl">
                No Project Too Big Or Too Small
              </h2>
              <YellowMarker />
              <div className="grid grid-cols-2 text-sm gap-10 mt-10">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit nobis quod consectetur ad alias voluptatibus quas.
                  Cupiditate rerum culpa ad impedit dolor? Vero autem fugiat
                  ipsum esse, laboriosam ipsam a fugit delectus est maxime
                  laborum officiis qui consequatur! Obcaecati quam quidem libero
                  architecto consectetur quibusdam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  voluptate adipisci ut? Nostrum, autem ipsa.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  voluptate adipisci ut? Nostrum, autem ipsa.
                </p>
                <div className="">
                  <Link className="px-10 py-3 border-4 font-semibold border-black">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex text-black mt-10 2xl:container mx-auto">
              <div className="bg-yellow-400 w-1/2 flex flex-col items-center p-4">
                <h3 className="font-bold text-2xl lg:text-3xl">12</h3>
                <p className="font-bold">years established</p>
              </div>
              <div className="bg-[#242424] w-1/2 flex flex-col items-center p-4 text-white">
                <h3 className="font-bold text-2xl lg:text-3xl">250</h3>
                <p className="font-bold">projects completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LatestProjects />
    </main>
  );
};

export default HomePage;
