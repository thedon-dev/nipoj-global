import React from "react";
import YellowMarker from "../../components/YellowMarker";
import { Link } from "react-router-dom";

const LatestProjects = () => {
  const projects = [
    {
      title: "Project Title",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam natus praesentium pariatur iusto saepe quisquam quo doloribus odio eaque porro?",
      link: "",
    },
    {
      title: "Project Title",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam natus praesentium pariatur iusto saepe quisquam quo doloribus odio eaque porro?",
      link: "",
    },
    {
      title: "Project Title",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam natus praesentium pariatur iusto saepe quisquam quo doloribus odio eaque porro?",
      link: "",
    },
  ];
  return (
    <section className="px-[5%] lg:px-[10%] py-32">
      <div className="2xl:container mx-auto">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-center">
            Latest Project
          </h1>
          <div className="mx-auto">
            <YellowMarker />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          {projects.map((project, index) => (
            <div className="border p-10">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="opacity-75 mt-7">{project.desc}</p>
              <div className="mt-20">
                <Link
                  to={project.link}
                  className="font-semibold px-7 py-2 opacity-75 border-2"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
