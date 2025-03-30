import React from "react";
import YellowMarker from "../../components/YellowMarker";
import { Link } from "react-router-dom";
import img1 from "../../assets/IMG-20250217-WA0303.jpg";
import img2 from "../../assets/IMG-20250217-WA0305.jpg";
import img3 from "../../assets/IMG-20250217-WA0311.jpg";

const LatestProjects = () => {
  // const projects = [
  //   {
  //     title: "Project Title",
  //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam natus praesentium pariatur iusto saepe quisquam quo doloribus odio eaque porro?",
  //     link: "",
  //   },
  //   {
  //     title: "Project Title",
  //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam natus praesentium pariatur iusto saepe quisquam quo doloribus odio eaque porro?",
  //     link: "",
  //   },
  //   {
  //     title: "Project Title",
  //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam natus praesentium pariatur iusto saepe quisquam quo doloribus odio eaque porro?",
  //     link: "",
  //   },
  // ];

  const images = [img1, img2, img3];
  return (
    <section className="px-[5%] lg:px-[10%] py-20">
      <div className="2xl:container mx-auto">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl text-[#2a2a2a] lg:text-4xl font-bold text-center">
            Latest Project
          </h1>
          <div className="mx-auto">
            <YellowMarker />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          {images.map((project, index) => (
            // <div key={index} className="border p-10">
            //   <h2 className="text-xl text-[#2a2a2a] font-semibold">
            //     {project.title}
            //   </h2>
            //   <p className="opacity-75 mt-7">{project.desc}</p>
            //   <div className="mt-20">
            //     <Link
            //       to={project.link}
            //       className="font-semibold px-7 py-2 opacity-75 border-2"
            //     >
            //       View Project
            //     </Link>
            //   </div>
            // </div>
            <div key={index} className="">
              <img src={project} alt="" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            to="/projects"
            className="text-semibold px-10 py-2 border-4 text-[#2a2a2a] border-[#2a2a2a]"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
