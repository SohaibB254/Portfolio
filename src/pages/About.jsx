import React, { useState } from 'react'
import school from '../assets/images/illustrations/school.png'
import person from '../assets/images/illustrations/person.png'
import devPic from '../assets/images/dev/hero-real.png'
import useFadeUpOnScroll from '../hooks/useFadeUpOnScroll'

const About = () => {
useFadeUpOnScroll('.fade-up')
  const [textShow, setTextShow ] = useState(false)
  return (
    <div className='sm:px-16 px-4 pb-8 transition-all duration-300 '>
       <h1 className='md:text-4xl text-3xl  text-(--textLight) text-center bg-(--bgLight) p-2 rounded-2xl   font-bold font-dm'>About</h1>
    <div className='mt-8 sm:p-12 p-4  sm:px-16 bg-(--sectionLight)  rounded-2xl relative font-inter'>
       <div className='flex  flex-col lg:gap-16 gap-4'>
       <div className='flex lg:flex-row flex-col lg:items-center gap-2 md:gap-16'>
            <div className='h-[300px] flex justify-center  rounded-2xl ' id="img">
                <img className='h-full object-cover grayscale hover:grayscale-0 transition duration-500' src={devPic} alt="" />
            </div>
            <div className={`flex-1 text-(--textSec)`} id="text">
               <p className={`${textShow ? 'line-clamp-none':'line-clamp-3'} fade-up line-clamp-3 lg:line-clamp-12 xl:line-clamp-none`}> Hi! I’m Sohaib Zaman, a passionate learner and aspiring web developer from Punjab, Pakistan. My journey into tech began around 7–8 years ago when I first discovered web development — and instantly got hooked.
             In 2020, I started learning the basics of HTML and CSS, but life had its ups and downs, which pulled me away for a while. In 2023, I decided to return stronger. I rebuilt my foundation and took on JavaScript — it was tough at first, with no proper guidance, but step by step, I started to get the hang of it. Like most beginners, I thought I had mastered JS early on — but soon realized there was so much more to learn.
             Later, I moved to Lahore, hoping to find an internship or job while continuing to grow. That’s when I began learning React.js, followed a structured course for two months, and even after an 8-month break, I came back more consistent than ever.
            Since July 2025, I’ve stayed committed — learning, building, and improving every day. I’ve always wanted to turn this passion into a profession, and I’m constantly driven to learn new technologies and challenge myself further.</p>

                <button onClick={()=>setTextShow(prev => !prev)} className='font-medium text-(--accent) border-b text-sm md:hidden'>{textShow ? 'Show less':'Show more'}</button>
            </div>
         </div>
         <p className='text-(--textSec) hidden md:block'>
        This is random text for design: 😁Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro rem nihil labore quo ipsa aliquam, voluptatibus consequatur accusantium dicta? Atque commodi a ut voluptas corporis distinctio ullam ea tempore voluptates aliquam. Sapiente, repudiandae at. Doloribus officiis placeat quis sapiente. Labore eveniet, obcaecati quaerat veniam quo id, cumque qui, quidem eaque nobis voluptates deleniti dolore alias velit provident natus rem! Inventore necessitatibus perferendis aut quod excepturi atque laboriosam blanditiis saepe quas libero et optio ipsa tenetur autem assumenda corporis soluta, in dicta error reiciendis tempora repellendus. Voluptatem maiores earum maxime neque hic ex deserunt magni, labore, ratione minima odio. Quis voluptatem animi impedit quibusdam quae dolorem. Recusandae porro dolore, officiis molestiae quo impedit quos dolorum illum tempore libero ipsam, quasi non enim assumenda voluptate placeat accusamus dolorem velit eius? Sint, libero cum vel adipisci accusamus esse possimus minus minima at, non nam vitae excepturi similique blanditiis nulla saepe quasi sit.
         </p>
         {/* Education Section */}
            <div className={`flex lg:flex-row-reverse  flex-col fade-up  lg:gap-44 gap-4 justify-between items-center`}>
               <div className='md:w-[300px] w-[250px]  object-cover overflow-hidden rounded-md ' id="image">
                   <img className='w-full  hover:grayscale-0 duration-500 transition grayscale-100' src={school} alt="" />
               </div>
               <div className='flex flex-col gap-4 lg:flex-1 ' id="text">
                   <h1 className='md:text-2xl text-xl text-(--textLight) font-dm font-bold'>Education</h1>
                   <p className='text-(--textLight) font-inter font-medium'>Attendant: BSCS at Virtual University of Pakistan</p>
                   <p className='text-(--textSec) font-inter lg:line-clamp-10 xl:line-clamp-none'>I’m currently pursuing a Bachelor’s degree in Computer Science (BSCS) from the Virtual University of Pakistan.
                  I chose VU for its flexible learning environment, which allows me to balance studies with my passion for web development. The freedom to learn at my own pace has helped me understand concepts more deeply and perform better in both practical work and exams.
                  I enrolled in April 2024, and my expected graduation year is 2028. This degree not only strengthens my theoretical base but also complements my growing experience in the tech field.
                   </p>
               </div>
             </div>
             {/* Hobbies and interest */}
              <div className={`flex lg:flex-row flex-col gap-4 fade-up lg:gap-44 justify-between items-center`}>
               <div className='md:w-[300px] w-[250px]  object-cover overflow-hidden rounded-md ' id="image">
                   <img className='w-full  hover:grayscale-0 hover:rotate-y-180 duration-500 transition grayscale-100' src={person} alt="" />
               </div>
               <div className='flex flex-col gap-4 lg:flex-1' id="text">
                   <h1 className='md:text-2xl text-xl text-(--textLight) font-dm font-bold'>Interests and Hobbies</h1>
                   <p className='text-(--textSec) font-inter lg:line-clamp-10 xl:line-clamp-none'>When I’m not coding, you’ll probably find me working out, gaming, or spending time with friends.
                   I believe a healthy body fuels a sharp mind, so I stay consistent with my workouts to keep both my energy and focus in check. Gaming and occasional social media breaks help me unwind, reset, and come back with fresh ideas.
                   Overall, I try to keep my routine balanced — a mix of productivity, creativity, and relaxation to keep my mind neutral and motivated.
                   </p>
               </div>
             </div>
             {/* Contact and Socials */}
              <div className={`flex flex-col-reverse  lg:gap-0 gap-8 fade-up lg:flex-row-reverse justify-between `}>
                {/* Contact form */}
          <div
            id="contactForm"
            className="lg:w-[350px] flex flex-col justify-between  p-4 rounded-2xl bg-(--bgLight)"
          >
            <div className="flex flex-col gap-8">
              <div id="heading">
                <h1 className="md:text-2xl text-xl text-(--textLight) font-bold font-dm">Let's talk!</h1>
                <p className="text-(--textSec) font-inter text-sm">
                  An advice/suggestion or just a friendly hi!
                </p>
              </div>
              <form className="flex flex-col text-(--textLight)  gap-4 items-center">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border outline-none border-gray-400 placeholder-gray-400 p-3 w-full rounded-xl"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="border outline-none border-gray-400 placeholder-gray-400 p-3 w-full rounded-xl"
                />
                <textarea
                  type="text"
                  placeholder="Your message"
                  className="border outline-none resize-none border-gray-400 placeholder-gray-400 p-3 w-full rounded-xl"
                />
              </form>
            <button className="bg-(--bgLight) border border-(--textLight) text-sm flex-1 gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark)  p-2 px-6 w-fit self-center cursor-pointer text-(--textLight) transition rounded-full">
              Send
            </button>
            </div>
          </div>
               <div className='flex flex-col gap-4 lg:w-1/2 ' id="text">
                   <h1 className='md:text-2xl text-xl text-(--textLight) font-dm font-bold'>Let's have a convo!</h1>
                   <p className='text-(--textSec) font-inter line-clamp-3 sm:line-clamp-none'>I’m always open to new opportunities, collaborations, or just a good chat about technology and creative ideas. Whether you’re looking to discuss a potential project, need help with something technical, or simply want to connect — feel free to reach out!
                   I genuinely enjoy talking about web development, design, and tech innovations, and I’m always happy to exchange thoughts or share insights.
                   You can use the form here to send me a quick message, and I’ll get back to you as soon as possible. Let’s build something amazing together!
                   </p>
                   {/* Social Icons */}
                      <div id="socials" className="flex flex-col gap-2">
                <div className="flex gap-4">
                <div className="h-16 w-16 p-2 cursor-pointer text-(--textLight) text-3xl flex items-center justify-center rounded-xl border-3 border-(--textLight)">
                    <i class="fa-brands fa-github"></i>
                </div>
                <div className="h-16 w-16 p-2 cursor-pointer text-(--textLight) text-3xl flex items-center justify-center rounded-xl border-3 border-(--textLight)">
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                <div className="h-16 w-16 p-2 cursor-pointer text-(--textLight) text-3xl flex items-center justify-center rounded-xl border-3 border-(--textLight)">
                   <i class="fa-brands fa-facebook"></i>
                </div>

                </div>
              </div>
               </div>
             </div>
          </div>

       <div>

       </div>
    </div>
    </div>
  )
}

export default About
