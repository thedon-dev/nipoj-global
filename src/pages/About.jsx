import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/HeroImage.jpg";
import { PiBuildings, PiDotBold } from "react-icons/pi";
import { GoTools } from "react-icons/go";
import { MdDesignServices } from "react-icons/md";
import YellowMarker from "../components/YellowMarker";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      heading: "Building Construction",
      icon: <PiBuildings className="w-[50px] h-[50px] text-yellow-500" />,
      description:
        "We specialize in delivering high-quality engineering and construction solutions, including infrastructure development, building construction, and project management.",
    },
    {
      heading: "Renewable Energy Solutions",
      icon: <GoTools className="w-[50px] h-[50px] text-yellow-500" />,
      description:
        "We provide sustainable energy solutions such as solar power systems, wind energy installations, and hybrid energy solutions.",
    },
    {
      heading: "Training & Capacity Development",
      icon: <MdDesignServices className="w-[50px] h-[50px] text-yellow-500" />,
      description:
        "We empower professionals and organizations through specialized training programs in engineering, safety compliance, renewable energy, and project management. ",
    },
  ];

  const howWeWork = [
    {
      heading: "Eco Friendly Construction",
      description: "",
    },

    {
      heading: "The Newest Technology Repairs",
      description: "",
    },
    {
      heading: "High Quality Construction Management",
      description: "",
    },
  ];
  return (
    <>
      <Helmet>
        <title>About Us | NIPOJ Global Services Ltd.</title>
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
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="px-[5%] lg:px-[10%] py-20 lg:py-32"
      >
        <div className="flex flex-col lg:flex-row gap-10 2xl:container mx-auto text-white">
          <div className="lg:w-2/3">
            <h1 className="text-4xl lg:text-6xl font-bold border-l-8 border-yellow-500 p-3 lg:p-5 text-white">
              About <span className="text-yellow-500">NIPOJ</span> Services
            </h1>
            <p className="mt-10 text-sm lg:text-lg">
              Established in <strong>2003</strong>,
              <span className="text-2xl text-yellow-500 font-bold">
                {" "}
                NIPOJ{" "}
              </span>
              Global Services Limited is a leading provider of innovative
              solutions across multiple industries, including
              <strong>
                {" "}
                Engineering, Construction, Marine Services, Renewable Energy,
                and Power Systems
              </strong>
              . Our mission is to develop sustainable infrastructures that drive
              economic growth while upholding the highest quality and safety
              standards.
            </p>
            <p className="mt-5 text-sm lg:text-lg">
              Backed by a team of highly skilled professionals and a strong
              network of affiliates, we ensure seamless execution of projects,
              delivering cost-effective and cutting-edge solutions that meet the
              unique needs of our clients.
            </p>
            <div className="mt-14">
              <a
                href="/NIPOJ GLOBAL PROFILE.pdf"
                download="NIPOJ_GLOBAL_profile.pdf"
                className="text-sm lg:text-base px-4 lg:px-7 py-2 border-4 border-yellow-500"
              >
                Company Brochure (PDF)
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <h2 className="text-yellow-500 text-4xl lg:text-5xl font-semibold">
              What We Do
            </h2>
            <div className="mt-10 flex flex-col gap-7">
              {services.map((service, index) => (
                <div className="flex gap-4 flex-col" key={index}>
                  <div>{service.icon}</div>
                  <div>
                    <h5 className="text-white font-semibold text-2xl">
                      {service.heading}
                    </h5>
                    <p className="lg:hidden text-sm text-gray-300">
                      {service.description}{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-[5%] lg:px-[10%] py-20 lg:py-32">
        <div className="2xl:container mx-auto">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-5xl font-semibold text-[#2a2a2a]">About Us</h1>
            <YellowMarker />
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mt-10 text-lg">
            <p>
              Founded in 2003, NIPOJ Global Services Limited is a
              multidisciplinary company committed to providing innovative
              solutions across key industries. Our expertise spans Engineering,
              Marine Services, Construction, Renewable Energy, and Power
              Systems. With a focus on quality, efficiency, and sustainability,
              we design and implement projects that drive industrial growth and
              community development.
            </p>
            <p>
              At NIPOJ, we pride ourselves on cutting-edge technology, skilled
              professionals, and strategic partnerships that enable us to
              deliver top-tier services. Whether it's large-scale infrastructure
              development, marine engineering, or renewable energy projects, we
              bring precision and excellence to every aspect of our work. Our
              certifications from COREN, DPR, and NOSDRA further reflect our
              commitment to industry standards and regulatory compliance.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="2xl:container mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-2/5 px-5 lg:px-10 py-20 bg-[#f7f7f7]">
            <h3 className="text-3xl lg:text-5xl font-bold text-[#2a2a2a]">
              Why Choose NIPOJ?
            </h3>
            <div className="mt-10">
              {howWeWork.map((work, index) => (
                <div key={index} className="flex gap-3 items-start mt-10">
                  <div>
                    <FaAngleDoubleRight className="text-yellow-500" size={45} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2a2a2a]">
                      {work.heading}
                    </h3>
                    <p className="lg:w-4/5">
                      {index === 0 &&
                        "We are committed to delivering projects with precision, efficiency, and high-quality standards. Our experienced team ensures every project meets industry best practices."}
                      {index === 1 &&
                        "With over two decades of experience, we bring a wealth of expertise in engineering, construction, energy, and marine services, ensuring seamless execution from start to finish."}
                      {index === 2 &&
                        "We believe in building lasting relationships with our clients by offering tailored solutions that align with their specific needs and business goals."}
                      {index === 3 &&
                        "Our projects prioritize safety, environmental sustainability, and compliance with national and international regulations, guaranteeing reliable and future-proof solutions."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-3/5 flex flex-col lg:ms-auto bg-[#f7f7f7]">
            <div
              className="h-[30rem] lg:h-0 flex-grow"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex">
              <div className="bg-[#242424] w-1/2 flex flex-col items-center p-4 text-white">
                <h3 className="font-bold text-xl lg:text-3xl">50+</h3>
                <p className="font-semibold lg:font-bold">projects completed</p>
              </div>
              <div className="bg-yellow-500 w-1/2 flex flex-col items-center p-4">
                <h3 className="font-bold text-xl lg:text-3xl">21</h3>
                <p className="font-semibold lg:font-bold">years established</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="2xl:container mx-auto px-[5%] lg:px-[10%] py-20 lg:py-32 text-center">
        <h1 className="text-2xl front-semibold text-[#2a2a2a] lg:w-4/5 mx-auto">
          "The secret of change is to focus all of your energy not on fighting
          the old, but on building the new."
        </h1>
        <p className="font-bold mt-10 text-[#2a2a2a]">~ Socrates</p>
      </section>
    </>
  );
};

export default About;
