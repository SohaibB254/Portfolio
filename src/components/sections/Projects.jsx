import { MoveUpRight } from 'lucide-react'
import React from 'react'
import p1 from '../../assets/images/Projects/p1.jpg'
import p2 from '../../assets/images/Projects/p2.jpg'
import p3 from '../../assets/images/Projects/p3.jpg'
import { Link } from 'react-router-dom'

const Projects = () => {
    let tags = 'abcdef'.split('')
    let projects = [
        {id:1, title:'BookShelf',img: p1},
        {id:2, title:'Portfolio',img: p2},
        {id:3, title:'News app',img: p3},
    ]
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
                         <div key={pr.id} className={`flex md:flex-row flex-col md:items-start items-center sm:w-auto w-[250px]  lg:gap-24 gap-8 ${isOdd ? 'md:flex-row-reverse':''}  w-full justify-center`} id="project">
            {/* Project Image */}
            <div className='sm:w-[350px] sm:h-[300px] w-[250px] object-cover overflow-hidden rounded-md bg-gray-700' id="img">
                <img className='object-cover grayscale-100 hover:grayscale-0 transition duration-500 h-full' src={pr.img} alt="" />
            </div>
            {/* Project Details */}
            <div className='flex sm:w-[350px] w-[250px] flex-col   gap-2' id='Details'>
            <div className=' flex flex-col sm:gap-4' id="text">
                <h1 className='font-dm font-bold text-(--textLight) text-xl sm:text-2xl'>{pr.title}</h1>
                <p className='text-(--textSec) line-clamp-3 sm:line-clamp-none text-sm font-inter'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae pariatur quisquam et rerum fugit beatae a deserunt aut molestias dolorum earum voluptatum id delectus quas excepturi architecto, odit accusamus suscipit? Doloribus cumque possimus debitis sequi.</p>
            </div>
            {/* Project Tags */}
            <div className=' flex gap-2 flex-wrap' id="tags">
                {
                    tags.map((t,idx)=>{
                        return (
                             <span key={idx} className='text-(--accent) text-xs sm:text-sm font-medium px-3 py-0.5 bg-(--bgLight) rounded-full'>React</span>
                        )
                    })
                }
            </div>
            {/* Live Preview Button */}
             <div id="cta">
                <button  className="bg-(--shapeLight) flex text-xs sm:text-sm items-center gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark) mt-4 p-2 px-4 cursor-pointer text-(--textLight) transition rounded-full">
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
