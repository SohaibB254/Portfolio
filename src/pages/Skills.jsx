import React from 'react'
import html from "../assets/images/Icons/html.png";
import { useTheme } from '../context/ThemeContext';
const Skills = () => {
  let { theme } = useTheme()
    let arr = 'abcde'.split('')
    let sTypes = 'abcd'.split('')
  return (
    <div className='py-8 flex flex-col px-16 gap-8'>
        <h1 className="text-4xl text-(--textLight) font-bold text-center font-dm">Skills & Tools</h1>
      <div id="bigDiv" className='rounded-2xl shadow p-8  bg-(--sectionLight)'>
        {/* Dev Skills and tools */}
        <div className='flex flex-col gap-8 '>
            {/* Frontend Skills */}
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-dm font-bold text-(--textLight) tracking-tight'>Frontend</h1>
                <div className='flex gap-4'>
                     {arr.map((s,id) => {
          return (
            <div
            key={id}
              className="w-24 flex items-center flex-col   p-2 rounded-md border-3 border-(--textLight)"
              id="skills"
            >
              <img className={`w-12 ${theme === 'dark'?'brightness-400':''} `} src={html} alt="" />
              <p className="text-(--textLight)">HTML</p>
            </div>
          );
        })}
                </div>
            </div>
            {/* Backend Skills */}
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-dm font-bold text-(--textLight) tracking-tight'>Backend</h1>
                <div className='flex gap-4'>
                     {arr.map((s,id) => {
          return (
            <div
            key={id}
              className="w-24 flex items-center flex-col   p-2 rounded-md border-3 border-(--textLight)"
              id="skills"
            >
              <img className={`w-12 ${theme === 'dark'?'brightness-400':''} `} src={html} alt="" />
              <p className="text-(--textLight)">HTML</p>
            </div>
          );
        })}
                </div>
            </div>
            {/* Databases */}
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-dm font-bold text-(--textLight) tracking-tight'>Database</h1>
                <div className='flex gap-4'>
                     {arr.map((s,id) => {
          return (
            <div
            key={id}
              className="w-24 flex items-center flex-col   p-2 rounded-md border-3 border-(--textLight)"
              id="skills"
            >
              <img className={`w-12 ${theme === 'dark'?'brightness-400':''} `} src={html} alt="" />
              <p className="text-(--textLight)">HTML</p>
            </div>
          );
        })}
                </div>
            </div>
            {/* Tools & others */}
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-dm font-bold text-(--textLight) tracking-tight'>Dev Tools</h1>
                <div className='flex gap-4'>
                     {arr.map((s,id) => {
          return (
            <div
            key={id}
              className="w-24 flex items-center flex-col   p-2 rounded-md border-3 border-(--textLight)"
              id="skills"
            >
              <img className={`w-12 ${theme === 'dark'?'brightness-400':''} `} src={html} alt="" />
              <p className="text-(--textLight)">HTML</p>
            </div>
          );
        })}
                </div>
            </div>
        {/* Soft skills */}
        <div>
             <h1 className="text-4xl text-(--textLight) font-bold  font-dm">Soft Skills</h1>
             <p className='text-(--textSec) font-inter'>1. English Communication</p>
             <p className='text-(--textSec) font-inter'>2. Problem Solving</p>
             <p className='text-(--textSec) font-inter'>3. Quick Learning</p>
        </div>
        {/* Experience*/}
        <div>
             <h1 className="text-4xl text-(--textLight) font-bold  font-dm">Experience</h1>
             <p className='text-(--textSec) font-inter'>Fresher, Self Employeed</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
