import { MoveUpRight } from "lucide-react";
import React from "react";
import devPic from '../../assets/images/dev/about-card.png'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-8 sm:px-0 px-8 gap-16">
        <h1 className="md:text-4xl text-3xl text-(--textLight) font-bold font-dm">About</h1>
        <div className="flex md:flex-row flex-col bg-(--sectionLight) p-4  gap-8 rounded-2xl">
        {/* About card */}
          <div className="sm:w-[350px]  flex flex-col  gap-8" id="about">
            <div
              className="sm:w-[350px]  overflow-hidden h-[150px] rounded-2xl bg-(--shapeLight)"
              id="img"
            >
              <img className="aspect-auto" src={devPic} alt="" />
            </div>
            <div id="text" className=" text-sm flex flex-col gap-4 font-inter">
              <p className="text-(--textSec)">
             Hi! I'm Sohaib from Pakistan. I have a keen interest in both crafting and coding — and I love blending the two. From simple static landing pages to full-fledged MERN applications, I can build it all. I work by the motto:
              </p>
              <p className="font-medium text-(--accent) italic">
                 "Find something you’d do for free and make it your job."
              </p>
              <p className="font-medium text-(--textSec)  font-dm">-Warren Buffett.</p>
            </div>
            {/* Cta */}
            <div id="cta">
              <Link to={'/about'} className="bg-(--shapeLight) flex text-sm items-center w-fit gap-2 font-inter hover:text-(--btnText) hover:bg-(--btnBg) mt-4 p-2 px-4 cursor-pointer text-(--textLight) transition rounded-full">
                Read More
                <MoveUpRight className="border rounded-full p-0.5" size={20} />
              </Link>
            </div>
          </div>
          {/* Contact form */}
          <div
            id="contactForm"
            className="sm:w-[350px]  flex flex-col justify-between  p-4 rounded-2xl bg-(--bgLight)"
          >
            <div className="flex flex-col  gap-8">
              <div id="heading">
                <h1 className="text-2xl text-(--textLight) font-bold font-dm">Let's talk!</h1>
                <p className="text-(--textSec) font-inter text-sm">
                  An advice/suggestion or just a friendly hi!
                </p>
              </div>
              <form className="flex flex-col text-(--textLight) sm:text-base text-sm  gap-4 items-center">
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
                  placeholder="Your Message"
                  className="border outline-none resize-none border-gray-400 placeholder-gray-400 p-3 w-full rounded-xl"
                />
              </form>
            </div>
            <Link className="text-center">
              <button className="bg-(--bgLight) flex-1 border border-(--textLight) font-inter hover:text-(--textDark) hover:bg-(--bgDark) text-xs sm:text-base   p-1 px-6  self-center cursor-pointer text-(--textLight) transition rounded-full">
              Send
            </button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
