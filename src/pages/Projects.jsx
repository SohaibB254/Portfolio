import React from "react";
import p1 from "../assets/images/Projects/p1.jpg";
import p2 from "../assets/images/Projects/p2.jpg";
import p3 from "../assets/images/Projects/p3.png";
import { MoveUpRight } from "lucide-react";

const Projects = () => {
  let tags = "abcdef".split("");
let projects = [
  {
    id: 1,
    title: "BookShelf",
    img: p1,
    desc:
      "A fully functional MERN-based e-commerce platform featuring product listings, dynamic cart management, and secure authentication — designed for smooth and responsive shopping experiences.",
    tags: ["React", "Node.js", "Express", "MongoDB", "E-Commerce", "Full Stack", "JWT Auth"]
  },
  {
    id: 2,
    title: "Portfolio",
    img: p2,
    desc:
      "A unique and minimal developer portfolio with smooth animations, dark/light themes, and a responsive layout — built to highlight skills, experience, and projects elegantly.",
    tags: ["Figma", "UI/UX Design", "React", "Context API", "Responsive Design", "Frontend"]
  },
  {
    id: 3,
    title: "iNoteBook",
    img: p3,
    desc:
      "A secure note-taking web app built with the MERN stack, featuring user authentication, CRUD functionality, and real-time updates to help users manage notes effortlessly.",
    tags: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Authentication", "REST API"]
  }
];

  let projects2 = [
    { id: 1, title: "BookShelf", img: p1 },
    { id: 2, title: "Portfolio", img: p2 },
    { id: 3, title: "Portfolio", img: p2 },
    { id: 4, title: "News app", img: p3 },
  ];
  return (
    <div className="md:p-8 p-4 md:px-16">
      <h1 className="md:text-4xl text-3xl text-(--textLight) text-center font-bold font-dm">
        My Work
      </h1>
      <p className="font-inter text-sm py-4 text-(--accent) italic">
        "When love and skill work together, expect a masterpiece."{" "}
        <span className="text-(--textLight)">- John Ruskin</span>
      </p>
      <div className="bg-(--sectionLight) md:p-8 p-4 rounded-2xl">
        <div className="flex flex-col  gap-4 md:gap-8" id="projects">
          {/* Projects */}
          {projects.map((pr) => {
            return (
              <div
                key={pr.id}
                className={`flex md:flex-row flex-col items-center gap-4 md:gap-16 pb-2 border-gray-400 border-b   w-full `}
                id="project"
              >
                {/* Project Image */}
                <div
                  className="w-[250px] h-[200px] object-cover overflow-hidden rounded-xl bg-gray-700"
                  id="img"
                >
                  <img
                    className="object-cover  transition duration-500 h-full"
                    src={pr.img}
                    alt=""
                  />
                </div>
                {/* Project Details */}
                <div className="flex  flex-col flex-1 gap-2" id="Details">
                  <div className=" flex flex-col md:gap-4 gap-2" id="text">
                    <h1 className="font-dm font-bold text-(--textLight) text-xl md:text-2xl">
                      {pr.title}
                    </h1>
                    <p className="text-(--textSec) text-xs md:text-sm font-inter">
                   {pr.desc}
                    </p>
                  </div>
                  {/* Project Tags */}
                  <div className=" flex gap-2 flex-wrap" id="tags">
                    <p className="text-sm font-medium text-(--textLight)">
                      Tags:
                    </p>
                    {pr.tags.map((t) => {
                      return (
                        <span className="text-(--accent) p-px   cursor-pointer text-xs md:text-sm font-medium px-3 bg-(--bgLight) rounded-full">
                          {t}
                        </span>
                      );
                    })}
                  </div>
                  {/* Live Preview Button */}
                  <div id="cta">
                    <button className="bg-(--shapeLight) border border-(--textLight) flex md:text-sm text-xs items-center gap-2 font-inter hover:text-(--btnText) hover:bg-(--btnBg) mt-4 p-2 px-4 cursor-pointer text-(--textLight) transition rounded-full">
                      Live Preview
                      <MoveUpRight
                        className="border rounded-full p-0.5"
                        size={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="md:text-4xl text-3xl text-(--textLight) my-8 font-bold font-dm">
          Mini Projects
        </h1>
        <div
          className="flex flex-wrap justify-center relative gap-4 md:justify-normal "
          id="projects"
        >
          {/* Projects */}
          {projects2.map((pr) => {
            return (
              <div
                key={pr.id}
                className={`flex w-[250px]  h-[350px] shadow-sm rounded-2xl flex-col md:gap-8 group  relative   `}
                id="project"
              >
                {/* Coming soon absolute div */}
                <div className="bg-(--bgLight)/40 backdrop-blur-xs flex items-center text-xl text-(--textLight) font-bold justify-center z-30 h-full rounded-2xl w-full absolute">
                Coming Soon...</div>
                {/* Project Image */}
                <div
                  className="w-[250px] h-[200px] object-cover overflow-hidden rounded-b-none rounded-2xl bg-gray-700"
                  id="img"
                >
                  <img
                    className="object-cover  transition duration-500 h-full"
                    src={pr.img}
                    alt=""
                  />
                </div>
                {/* Project Details */}
                <div
                  className="flex shadow flex-col gap-2 absolute bg-(--bgLight) p-2 w-full rounded-t-none rounded-2xl translate-y-32  transition duration-500  "
                  id="Details"
                >
                  <div className=" flex flex-col gap-2" id="text">
                    <h1 className="font-dm font-bold text-(--textLight) text-xl">
                      {pr.title}
                    </h1>
                    <p className="text-(--textSec) text-sm font-inter">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    </p>
                  </div>
                  {/* Project Tags */}
                  <div className=" flex gap-2 flex-wrap" id="tags">
                    <p className="text-sm font-medium text-(--textLight)">
                      Tags:
                    </p>
                    {tags.map((t) => {
                      return (
                        <span className="text-(--accent) cursor-pointer  text-sm font-medium px-3 bg-(--sectionLight) rounded-full">
                          React
                        </span>
                      );
                    })}
                  </div>
                  {/* Live Preview Button */}
                  <div id="cta">
                    <button className="bg-(--shapeLight) border border-(--textLight) flex text-sm items-center gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark) mt-4 p-2 px-4 cursor-pointer text-(--textLight) transition rounded-full">
                      Live Preview
                      <MoveUpRight
                        className="border rounded-full p-0.5"
                        size={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
