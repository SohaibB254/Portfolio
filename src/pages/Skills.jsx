import React from 'react'
import html from "../assets/images/Icons/html.png";
import css from "../assets/images/Icons/css.png";
import tl from "../assets/images/Icons/tw.png";
import js from "../assets/images/Icons/js.png";
import react from "../assets/images/Icons/react.png";
import mongo from "../assets/images/Icons/mongo.png";
import express from "../assets/images/Icons/express.png";
import nodejs from "../assets/images/Icons/nodejs.png";
import git from "../assets/images/Icons/git.png";
import figma from "../assets/images/Icons/figma.png";
import vscode from "../assets/images/Icons/vscode.png";
import { useTheme } from '../context/ThemeContext';
const Skills = () => {
  let { theme } = useTheme()
    const skills = [
  // 🖌️ UI
  { name: "Figma", image: figma, type: "Design Tool" },
  // 💻 Frontend
  { name: "HTML", image: html, type: "Frontend" },
  { name: "CSS", image: css, type: "Frontend" },
  { name: "Tailwind", image: tl, type: "Frontend" },
  { name: "JavaScript", image: js, type: "Frontend" },
  { name: "React", image: react, type: "Frontend" },
  // ⚙️ Backend
  { name: "Express", image: express, type: "Backend" },
  { name: "Node Js", image: nodejs, type: "Backend" },
  // 🗄️ Database
  { name: "MongoDB", image: mongo, type: "Database" },
  // 🧰 Dev Tools
  { name: "Git", image: git, type: "Dev Tools" },
  { name: "VS Code", image: vscode, type: "Dev Tools" }
];
    const GroupedSkills = skills.reduce((acc,skill)=>{
      if(!acc[skill.type]) acc[skill.type] = [];
      acc[skill.type].push(skill);
      return acc;
    },{})
  return (
    <div className='py-8  flex flex-col md:px-16 px-4 gap-8'>
        <h1 className="md:text-4xl  text-3xl text-(--textLight) font-bold text-center font-dm">Skills & Tools</h1>
      <div id="bigDiv" className='rounded-2xl shadow p-8  bg-(--sectionLight)'>
        {/* Dev Skills and tools */}
        <div className='flex flex-col gap-8 '>
          {/* Per Skill Type */}
          { Object.entries(GroupedSkills).map(([type,skills])=>(
                   <div key={type} className='flex flex-col gap-4'>
                <h1 className='text-xl font-dm font-bold text-(--textLight) tracking-tight'>{type}</h1>
                <div className='flex md:gap-4 gap-2 flex-wrap'>
                {
                  skills.map(skill =>(
                         <div key={skill.name} className="w-24 hover:scale-105 transition-all duration-200  flex items-center flex-col   p-2 rounded-md border-3 border-(--textLight)"
              id="skills"
            >
              <img className={`w-12 ${theme === 'dark'?'brightness-400':''}  `} src={skill.image} alt="" />
              <p className="text-(--textLight)">{skill.name}</p>
            </div>
                  ))

                }


                </div>
            </div>
          ))
          }

        {/* Soft skills */}
        <div>
             <h1 className="md:text-4xl  text-3xl text-(--textLight) font-bold  font-dm">Soft Skills</h1>
             <p className='text-(--textSec) font-inter'>1. English Communication</p>
             <p className='text-(--textSec) font-inter'>2. Problem Solving</p>
             <p className='text-(--textSec) font-inter'>3. Quick Learning</p>
        </div>
        {/* Experience*/}
        <div>
             <h1 className="md:text-4xl  text-3xl text-(--textLight) font-bold  font-dm">Experience</h1>
             <p className='text-(--textSec) font-inter'>Fresher, Self Employeed</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
