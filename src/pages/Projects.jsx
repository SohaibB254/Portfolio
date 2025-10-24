import React from 'react'
import p1 from '../assets/images/Projects/p1.jpg'
import p2 from '../assets/images/Projects/p2.jpg'
import p3 from '../assets/images/Projects/p3.jpg'
import { MoveUpRight } from 'lucide-react'

const Projects = () => {
     let tags = 'abcdef'.split('')
    let projects = [
        {id:1, title:'BookShelf',img: p1},
        {id:2, title:'Portfolio',img: p2},
        {id:3, title:'News app',img: p3},
    ]
    let projects2 = [
        {id:1, title:'BookShelf',img: p1},
        {id:2, title:'Portfolio',img: p2},
        {id:3, title:'Portfolio',img: p2},
        {id:4, title:'News app',img: p3},
        {id:5, title:'News app',img: p3},
        {id:5, title:'News app',img: p3},
    ]
  return (
    <div className='p-8 px-16'>
         <h1 className='text-4xl text-(--textLight) text-center font-bold font-dm'>My Work</h1>
         <p className='font-inter text-sm py-4 text-(--accent) italic'>
            "When love and skill work together, expect a masterpiece." <span className='text-(--textLight)'>- John Ruskin</span>
         </p>
         <div className='bg-(--sectionLight) p-8 rounded-2xl'>
             <div className='flex flex-col  gap-8' id="projects">
        {/* Projects */}
        {
            projects.map(pr =>{

                return (
                         <div key={pr.id} className={`flex gap-16 pb-2 border-gray-400 border-b   w-full `} id="project">
            {/* Project Image */}
            <div className='w-[250px] h-[200px] object-cover overflow-hidden rounded-xl bg-gray-700' id="img">
                <img className='object-cover  transition duration-500 h-full' src={pr.img} alt="" />
            </div>
            {/* Project Details */}
            <div className='flex  flex-col gap-2' id='Details'>
            <div className=' flex flex-col gap-4' id="text">
                <h1 className='font-dm font-bold text-(--textLight) text-2xl'>{pr.title}</h1>
                <p className='text-(--textSec) text-sm font-inter'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae pariatur quisquam et rerum fugit beatae a deserunt aut molestias dolorum earum voluptatum id </p>
            </div>
            {/* Project Tags */}
            <div className=' flex gap-2 flex-wrap' id="tags">
                <p className='text-sm font-medium text-(--textLight)'>Tags:</p>
                {
                    tags.map(t=>{
                        return (
                             <span className='text-(--accent)  cursor-pointer text-sm font-medium px-3 bg-(--bgLight) rounded-full'>React</span>
                        )
                    })
                }
            </div>
            {/* Live Preview Button */}
             <div id="cta">
                <button className="bg-(--shapeLight) border border-(--textLight) flex text-sm items-center gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark) mt-4 p-2 px-4 cursor-pointer text-(--textLight) transition rounded-full">
                  Live Preview<MoveUpRight className="border rounded-full p-0.5" size={20}/>
                </button>
              </div>
            </div>
                         </div>
                )
            })
        }
             </div>
             <h1 className='text-4xl text-(--textLight) my-8 font-bold font-dm'>Mini Projects</h1>
               <div className='flex flex-wrap justify-between' id="projects">
           {/* Projects */}
        {
            projects2.map(pr =>{
                return (
                         <div key={pr.id} className={`flex w-[250px] h-[420px]  flex-col gap-8 group  relative   `} id="project">
            {/* Project Image */}
            <div className='w-[250px] h-[200px] object-cover overflow-hidden rounded-b-none rounded-2xl bg-gray-700' id="img">
                <img className='object-cover  transition duration-500 h-full' src={pr.img} alt="" />
            </div>
            {/* Project Details */}
            <div className='flex shadow flex-col gap-2 absolute bg-(--bgLight) p-2 w-full rounded-t-none rounded-2xl group-hover:translate-y-50 translate-y-32 transition duration-500  ' id='Details'>
            <div className=' flex flex-col gap-2' id="text">
                <h1 className='font-dm font-bold text-(--textLight) text-xl'>{pr.title}</h1>
                <p className='text-(--textSec) text-sm font-inter'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
            </div>
            {/* Project Tags */}
            <div className=' flex gap-2 flex-wrap' id="tags">
                <p className='text-sm font-medium text-(--textLight)'>Tags:</p>
                {
                    tags.map(t=>{
                        return (
                             <span className='text-(--accent) cursor-pointer  text-sm font-medium px-3 bg-(--sectionLight) rounded-full'>React</span>
                        )
                    })
                }
            </div>
            {/* Live Preview Button */}
             <div id="cta">
                <button className="bg-(--shapeLight) border border-(--textLight) flex text-sm items-center gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark) mt-4 p-2 px-4 cursor-pointer text-(--textLight) transition rounded-full">
                  Live Preview<MoveUpRight className="border rounded-full p-0.5" size={20}/>
                </button>
              </div>
            </div>
                         </div>
                )
            })
        }
             </div>
         </div>
    </div>
  )
}

export default Projects
