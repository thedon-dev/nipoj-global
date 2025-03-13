import React, { useEffect, useRef } from "react";
import HeroImage from "../assets/HeroImage.jpg";
import img1 from "../assets/IMG-20250217-WA0303.jpg";
import img2 from "../assets/IMG-20250217-WA0304.jpg";
import img3 from "../assets/IMG-20250217-WA0305.jpg";
import img4 from "../assets/IMG-20250217-WA0306.jpg";
import img5 from "../assets/IMG-20250217-WA0307.jpg";
import img6 from "../assets/IMG-20250217-WA0308.jpg";
import img7 from "../assets/IMG-20250217-WA0309.jpg";
import img8 from "../assets/IMG-20250217-WA0310.jpg";
import img9 from "../assets/IMG-20250217-WA0311.jpg";
import img10 from "../assets/IMG-20250221-WA0170.jpg";
import img11 from "../assets/IMG-20250221-WA0175.jpg";
import img12 from "../assets/IMG-20250221-WA0162.jpg";

import video from "../assets/VID-20250217-WA0078.mp4";
import video2 from "../assets/New_Video.mp4";

import { Helmet } from "react-helmet";

const Projects = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects | NIPOJ Global Services Ltd.</title>
        <meta
          name="description"
          content="NIPOJ Global Services Ltd. is a leader in Engineering, Construction, Renewable Energy, and Marine Services. With a commitment to innovation, sustainability, and quality, we deliver cutting-edge solutions that drive development across industries. Partner with us for reliable and efficient infrastructure solutions."
        />
        <meta
          name="keywords"
          content="Engineering, Construction, Renewable Energy, Marine Services, Infrastructure, Sustainable Solutions"
        />
        <meta name="author" content="NIPOJ Global Services Ltd." />
        <meta
          property="og:title"
          content="NIPOJ Global Services Ltd. | Engineering & Construction Experts"
        />
        <meta
          property="og:description"
          content="Providing innovative solutions in engineering, construction, and renewable energy to drive sustainable development."
        />
        <meta
          property="og:image"
          content="https://nipojglobalservicesltd.org/images/company-banner.jpg"
        />
        <meta property="og:url" content="https://nipojglobalservicesltd.org" />
      </Helmet>
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
      <section className="px-[5%] lg:px-[10%] py-32">
        <h1 className="text-5xl font-semibold text-[#2a2a2a] text-center">
          Our Projects
        </h1>
        <div className="2xl:container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-2 mt-14">
          {images.map((img, idx) => (
            // <div>
            //   {idx !== 5 && idx !== 6 ? (
            //     <img
            //       src={img}
            //       alt=""
            //       className="object-cover col-span-1 row-span-1"
            //     />
            //   ) : (
            //     <video
            //       ref={videoRef}
            //       src={video}
            //       className="w-full h-full object-cover col-span-2 row-span-1"
            //       autoPlay
            //       controls
            //       loop
            //       muted
            //       playsInline
            //     ></video>
            //   )}
            // </div>
            <img src={img} alt="" className="object-cover" />
          ))}
        </div>
        <div className="2xl:container mx-auto">
          <video
            ref={videoRef}
            src={video}
            className="w-full h-full mt-5"
            autoPlay
            controls
            loop
            muted
            playsInline
          ></video>
          <video
            ref={videoRef}
            src={video2}
            className="w-[20rem] h-full mx-auto mt-5"
            autoPlay
            controls
            loop
            muted
            playsInline
          ></video>
        </div>
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
