import React from "react";
import html from "../../assets/images/Icons/html.png";
import css from "../../assets/images/Icons/css.png";
import tl from "../../assets/images/Icons/tw.png";
import js from "../../assets/images/Icons/js.png";
import react from "../../assets/images/Icons/react.png";
import mongo from "../../assets/images/Icons/mongo.png";
import express from "../../assets/images/Icons/express.png";
import git from "../../assets/images/Icons/git.png";
import figma from "../../assets/images/Icons/figma.png";
import vscode from "../../assets/images/Icons/vscode.png";
import { MoveUpRight } from "lucide-react";

const Skills = () => {
  let arr = [
  {
    "name": "HTML",
    image: html,
  },
  {
    "name": "CSS",
    image:css,
  },
  {
    "name": "Tailwind",
    image: tl,
  },
  {
    "name": "JavaScript",
    image: js,
  },
  {
    "name": "React",
    image: react,
  },
  {
    "name": "MongoDB",
    image: mongo,
  },
  {
    "name": "Express",
    image: express
  },
  {
    "name": "Git",
    image: git
  },
  {
    "name": "Figma",
    image: figma
  },
  {
    "name": "Vs Code",
    image: vscode
  }
]
  return (
    <div className="flex flex-col items-center mt-8 gap-16">
      <h1 className="text-4xl font-bold text-(--textLight) font-dm ">
        Skills & Tools
      </h1>
      <div className="flex flex-col gap-4">
           <p className="text-gray-400 italic  text-xs">~checkout my skills</p>
      <div id="Skills" className="grid grid-cols-5 gap-8">
        {arr.map((s,id) => {
          return (
            <div
            key={id}
              className="w-24 flex items-center flex-col   p-2 rounded-md border-3 border-(--textLight)"
              id="skills"
            >
              <img className="w-12" src={s.image} alt="" />
              <p className="text-(--textLight)">{s.name}</p>
            </div>
          );
        })}
      </div>
         </div>
       <div id="cta">
                <button className="bg-(--shapeLight) flex items-center gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark) mt-4 p-3 px-8 cursor-pointer text-(--textLight) border transition rounded-full">
                  View More <MoveUpRight className="border rounded-full p-0.5" size={20}/>
                </button>
              </div>
    </div>
  );
};

export default Skills;
