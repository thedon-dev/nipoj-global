import React, { useState } from "react";
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaLocationPin,
  FaXTwitter,
} from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { TbLocationPin } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  const [messageInfo, setMessageInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const links = [{}];
  return (
    <footer>
      <div className="2xl:container mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/2 bg-yellow-500 px-[5%] py-14">
          <h3 className="font-bold text-4xl lg:text-5xl">Contact Us</h3>
          <div className="border-[3px] border-[#2a2a2a] w-10 mt-5"></div>
          <form className="grid grid-cols-2 gap-5 mt-8">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="p-4 col-span-1 bg-white"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="p-4 col-span-1 bg-white"
            />
            <textarea
              type="text"
              name=""
              id=""
              placeholder="Message"
              className="p-4 col-span-2 resize-none h-[10rem] bg-white"
            />
            <div className="col-span-2 flex justify-end">
              <button className="uppercase border-4 border-[#2a2a2a] px-7 py-2 text-sm font-semibold">
                {" "}
                send message
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 flex flex-col-reverse lg:flex-col">
          <div className="flex justify-center gap-8 items-center py-5 bg-[#2a2a2a] text-white">
            <Link to="" className="p-3">
              <FaFacebookF />
            </Link>
            <Link to="" className="p-3">
              <FaXTwitter />
            </Link>
            <Link to="" className="p-3">
              <FaLinkedinIn />
            </Link>
          </div>

          <div className="px-[5%] lg:px-0 flex flex-col gap-3 lg:w-2/3 lg:mt-[20%] lg:mx-auto my-10">
            <div className="flex gap-3 items-center">
              <FaLocationPin className="text-gray-600" />
              <span>
                Head Office: House 1B, No. 5 Uruguay Crescent, Maitama
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <FaLocationPin className="text-gray-600" />
              <span>
                Branch: No. 30 Omerelu Street GRA, Phase II, Port Harcourt,
                Rivers State.
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <BsTelephoneFill className="text-gray-600" />
              <span>+234 (0) 8035306165</span>
            </div>
            <div className="flex gap-3 items-center">
              <MdMessage className="text-gray-600" />
              <span>info@nipojglobalservicesltd.org</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
