import React, { useEffect, useRef, useState } from "react";
import { BiCart } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import mainLogo from "../assets/mainLogo.jpg";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/aboutus",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Projects",
      link: "/projects",
    },

    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const navRef = useRef(null); // Reference to navbar container

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when navbar is open
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navOpen]);

  const handleOutsideClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    if (navOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navOpen]);
  return (
    <nav className="py-3 lg:py-5 response bg-white shadow sticky top-0 z-50">
      {navOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md transition-all duration-300"></div>
      )}
      <div className="2xl:container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="text-xl font-bold">
            {/* NIPOJ GLOBAL */}
            <img src={mainLogo} alt="" className="w-[200px]" />
          </Link>
        </div>
        <div
          ref={navRef}
          className={`${
            navOpen ? "left-0" : "-left-[100%] lg:left-0"
          } fixed lg:relative h-screen lg:h-fit top-0 w-2/3 pt-28 lg:pt-0 lg:w-fit bg-yellow-400 lg:bg-transparent lg:reative gap-16 lg:gap-7 flex flex-col lg:flex-row transition-all duration-300 z-50`}
        >
          <h3 className="lg:hidden top-20 text-white text-2xl font-bold text-center">
            NIPOJ GLOBAL
          </h3>
          <div className="gap-3 flex flex-col lg:flex-row">
            {links.map((lnk, index) => (
              <NavLink
                key={index}
                onClick={() => setNavOpen(false)}
                to={lnk.link}
                className={({ isActive }) =>
                  `text-black text-center px-5 lg:px-3 py-5 lg:py-1 ${
                    isActive ? "lg:border-b-4 border-yellow-500" : ""
                  } transition-all duration-300`
                }
              >
                {lnk.name}
              </NavLink>
            ))}
          </div>
          {/* <div className="flex items-center justify-center">
            <Link className="flex items-center gap-2">
              <BiCart size={30} />{" "}
              <p className="font-semibold lg:hidden">cart</p>
            </Link>
          </div> */}
        </div>
        <button
          // onClick={() => setNavOpen(!navOpen)}
          onClick={(e) => {
            e.stopPropagation();
            setNavOpen(!navOpen);
          }}
          className="flex lg:hidden cursor-pointer p-3"
        >
          {navOpen ? <FaX size={25} /> : <FaBars size={25} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
