import { MoveUpRight } from 'lucide-react'
import React from 'react'
import p1 from '../../assets/images/Projects/p1.jpg'
import p2 from '../../assets/images/Projects/p2.jpg'
import p3 from '../../assets/images/Projects/p3.jpg'

const Projects = () => {
    let tags = 'abcdef'.split('')
    let projects = [
        {id:1, title:'BookShelf',img: p1},
        {id:2, title:'Portfolio',img: p2},
        {id:3, title:'News app',img: p3},
    ]
  return (
    <div className='flex flex-col bg-white/80 items-center gap-16 mt-16 py-8'>
      <h1 className='text-4xl text-(--textLight) font-bold font-dm'>Featured Projects</h1>
      <div className='flex flex-col items-center gap-4'>
  <p className="text-gray-400 italic self-start text-xs">~See what I have done</p>
      <div className='flex flex-col items-center gap-16' id="projects">
        {/* Projects */}
        {
            projects.map(pr =>{
                let isOdd = pr.id % 2 === 0;
                return (
                         <div key={pr.id} className={`flex gap-24 ${isOdd ? 'flex-row-reverse':''}  w-full justify-center`} id="project">
            {/* Project Image */}
            <div className='w-[350px] h-[300px] object-cover overflow-hidden rounded-md bg-gray-700' id="img">
                <img className='object-cover h-full' src={pr.img} alt="" />
            </div>
            {/* Project Details */}
            <div className='flex w-[350px] flex-col gap-2' id='Details'>
            <div className=' flex flex-col gap-4' id="text">
                <h1 className='font-dm font-bold text-2xl'>{pr.title}</h1>
                <p className='text-(--textSec) text-sm font-inter'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae pariatur quisquam et rerum fugit beatae a deserunt aut molestias dolorum earum voluptatum id delectus quas excepturi architecto, odit accusamus suscipit? Doloribus cumque possimus debitis sequi.</p>
            </div>
            {/* Project Tags */}
            <div className=' flex gap-2 flex-wrap' id="tags">
                {
                    tags.map(t=>{
                        return (
                             <span className='text-(--accent) text-sm font-medium px-3 bg-(--bgLight) rounded-full'>React</span>
                        )
                    })
                }
            </div>
            {/* Live Preview Button */}
             <div id="cta">
                <button className="bg-(--shapeLight) flex text-sm items-center gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark) mt-4 p-2 px-4 cursor-pointer text-(--textLight) transition rounded-full">
                  Live Preview<MoveUpRight className="border rounded-full p-0.5" size={20}/>
                </button>
              </div>
            </div>
                         </div>
                )
            })
        }


      <div id="cta">
                <button className="bg-(--shapeLight) flex text-sm items-center gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark) mt-4 p-2 px-4 cursor-pointer text-(--textLight) transition rounded-full">
                  View More<MoveUpRight className="border rounded-full p-0.5" size={20}/>
                </button>
              </div>
      </div>
   </div>
    </div>
  )
}

export default Projects
