import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const links = [
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Blog",
      link: "/projects",
    },
    {
      name: "Services",
      link: "/projects",
    },
    {
      name: "About",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/projects",
    },
  ];
  return (
    <nav className="py-5 response bg-white shadow">
      <div className="2xl:container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="text-xl font-bold">
            NIPOJ GLOBAL
          </Link>
        </div>
        <div
          className={`${
            navOpen ? "left-0" : "-left-[100%] lg:left-0"
          } fixed lg:relative h-screen lg:h-fit top-0 w-2/3 pt-28 lg:pt-0 lg:w-fit bg-yellow-400 lg:bg-transparent lg:reative gap-16 lg:gap-7 flex flex-col lg:flex-row transition-all duration-300 z-50`}
        >
          <h3 className="lg:hidden top-20 text-2xl font-bold text-center">
            NIPOJ GLOBAL
          </h3>
          <div className="gap-3 flex flex-col lg:flex-row">
            {links.map((lnk, index) => (
              <Link
                to={lnk.link}
                className="text-black text-center px-5 lg:px-3 py-3 lg:py-1"
              >
                {lnk.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Link className="flex items-center gap-2">
              <BiCart size={30} />{" "}
              <p className="font-semibold lg:hidden">cart</p>
            </Link>
          </div>
        </div>
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="flex lg:hidden cursor-pointer p-3"
        >
          {navOpen ? <FaX size={25} /> : <FaBars size={25} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
