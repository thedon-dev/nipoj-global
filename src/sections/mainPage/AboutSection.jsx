import React, { useEffect, useRef } from "react";
import YellowMarker from "../../components/YellowMarker";
import { Link } from "react-router-dom";
import video from "../../assets/VID-20250217-WA0079.mp4";

const AboutSection = () => {
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
    <section className="flex flex-col lg:flex-row 2xl:container mx-auto">
      <div className="lg:w-2/5 bg-[#2a2a2a] text-white px-[5%] py-10 lg:p-20">
        <h2 className="text-3xl lg:text-4xl font-bold">
          We've Been Building For Over 10 Years
        </h2>
        <YellowMarker />
        <p className="text-sm mt-10">
          Since 2003, NIPOJ Global Services Limited has been at the forefront of
          Engineering, Construction, Renewable Energy, and Marine Services. Our
          dedication to quality and innovation has solidified our reputation as
          a trusted industry leader.
        </p>
        <div className="mt-10 lg:mt-20">
          <Link
            to="/aboutus"
            className="lg:text-lg font-semibold px-7 py-2 border-4 border-yellow-500"
          >
            ABOUT US
          </Link>
        </div>
      </div>
      <div className="lg:w-3/5 flex flex-col">
        <div className="flex-grow">
          <video
            ref={videoRef}
            src={video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="flex w-full mt-auto">
          <div className="bg-yellow-500 w-1/2 px-5 flex flex-col justify-center">
            <h2 className="lg:text-xl font-semibold">Call For A Quote</h2>
            <p className="text-sm lg:text-lg">+234 (0) 8035306165</p>
          </div>
          <div className="grid place-content-center w-1/2 p-5">
            <Link className="text-sm lg:text-base px-4 lg:px-7 py-2 border-4 border-[#2a2a2a]">
              Estimate Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
