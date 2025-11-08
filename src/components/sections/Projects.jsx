import { MoveUpRight } from 'lucide-react'
import React from 'react'
import p1 from '../../assets/images/Projects/p1.jpg'
import p2 from '../../assets/images/Projects/p2.jpg'
import p3 from '../../assets/images/Projects/p3.png'
import { Link } from 'react-router-dom'
import useFadeUpOnScroll from '../../hooks/useFadeUpOnScroll'

const Projects = () => {
    let tags = 'abcdef'.split('')
    useFadeUpOnScroll('.project-card')
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
  return (
    <div className='flex flex-col bg-(--sectionLight) items-center gap-16 mt-16 py-8 transition-all duration-3  00'>
      <h1 className='lg:text-4xl text-2xl  text-(--textLight) font-bold font-dm'>Featured Projects</h1>
      <div className='flex flex-col items-center gap-4'>
  <p className="text-(--textMini) italic self-start text-xs">~See what I have done</p>
      <div className='flex flex-col items-center gap-8 sm:gap-16' id="projects">
        {/* Projects */}
        {
            projects.map(pr =>{
                let isOdd = pr.id % 2 === 0;
                return (
                         <div key={pr.id} className={`project-card flex md:flex-row flex-col md:items-start items-center sm:w-auto w-[250px]  lg:gap-24 gap-8 ${isOdd ? 'md:flex-row-reverse':''}  w-full justify-center`} id="project">
            {/* Project Image */}
            <div className='sm:w-[350px] sm:h-[300px] w-[250px] object-cover overflow-hidden rounded-md bg-gray-700' id="img">
                <img className='object-cover grayscale-100 hover:grayscale-0 transition duration-500 h-full' src={pr.img} alt="" />
            </div>
            {/* Project Details */}
            <div className='flex sm:w-[350px] w-[250px] flex-col   gap-2' id='Details'>
            <div className=' flex flex-col sm:gap-4' id="text">
                <h1 className='font-dm font-bold text-(--textLight) text-xl sm:text-2xl'>{pr.title}</h1>
                <p className='text-(--textSec) line-clamp-3 sm:line-clamp-none text-sm font-inter'>{pr.desc}</p>
            </div>
            {/* Project Tags */}
            <div className=' flex gap-2 flex-wrap' id="tags">
                {
                    pr.tags.map((t,idx)=>{
                        return (
                             <span key={idx} className='text-(--accent) text-xs sm:text-sm font-medium px-3 py-0.5 bg-(--bgLight) rounded-full'>{t}</span>
                        )
                    })
                }
            </div>
            {/* Live Preview Button */}
             <div id="cta">
                <button  className="bg-(--shapeLight) flex text-xs sm:text-sm items-center gap-2 font-inter hover:text-(--btnText) hover:bg-(--btnBg) mt-4 p-2 px-4 cursor-pointer text-(--textLight) transition rounded-full">
                  Live Preview<MoveUpRight className="border rounded-full p-0.5" size={20}/>
                </button>
              </div>
            </div>
                         </div>
                )
            })
        }


      <div id="cta">
                <Link aria-description='Button for viewing all projects' to={'/projects'} className=" flex  items-center text-xs sm:text-base  gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark) mt-4 p-2 px-4 cursor-pointer border border-(--borderLight) text-(--textLight) transition rounded-full">
                  View More
                </Link>
              </div>
      </div>
   </div>
    </div>
  )
}

export default Projects
