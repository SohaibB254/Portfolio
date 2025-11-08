import React from "react";
import html from "../../assets/images/Icons/html.png";
import css from "../../assets/images/Icons/css.png";
import tl from "../../assets/images/Icons/tw.png";
import js from "../../assets/images/Icons/js.png";
import react from "../../assets/images/Icons/React.png";
import mongo from "../../assets/images/Icons/mongo.png";
import express from "../../assets/images/Icons/Express.png";
import git from "../../assets/images/Icons/git.png";
import figma from "../../assets/images/Icons/figma.png";
import vscode from "../../assets/images/Icons/vscode.png";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";


const Skills = () => {
  let { theme } = useTheme()
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
      <h1 className="sm:text-4xl text-2xl font-bold text-(--textLight) font-dm ">
        Skills & Tools
      </h1>
      <div className="flex flex-col gap-4">
           <p className="text-(--textMini) italic  text-xs">~Checkout my skills</p>
      <div id="Skills" className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8">
        {arr.map((s,id) => {
          return (
            <div
            key={id}
              className="w-24 flex items-center flex-col hover:scale-105 transition duration-200  p-2 rounded-md border-3 border-(--textLight)"
              id="skills"
            >
              <img className={`w-12 ${theme === 'dark'?'brightness-400':''}`} src={s.image} alt="" />
              <p className="text-(--textLight)">{s.name}</p>
            </div>
          );
        })}
      </div>
         </div>
         {/* CTA  */}
      <div id="cta">
                      <Link aria-description='Button for viewing all skills' to={'/devskills'} className=" flex  items-center text-xs sm:text-base  gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark) mt-4 p-2 px-4 cursor-pointer border border-(--borderLight) text-(--textLight) transition rounded-full">
                        View More
                      </Link>
                    </div>
    </div>
  );
};

export default Skills;
