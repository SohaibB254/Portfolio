import { MoveUpRight } from "lucide-react";
import React from "react";
import devPic from '../../assets/images/dev/about-card.png'

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-8 gap-16">
        <h1 className="text-4xl text-(--textLight) font-bold font-dm">About</h1>
        {/* About card */}
        <div className="flex bg-(--sectionLight) p-4  gap-8 rounded-2xl">
          <div className="w-[350px] flex flex-col  gap-8" id="about">
            <div
              className="w-[350px] overflow-hidden h-[150px] rounded-2xl bg-(--shapeLight)"
              id="img"
            >
              <img src={devPic} alt="" />
            </div>
            <div id="text" className=" text-sm flex flex-col gap-4 font-inter">
              <p className="text-(--textSec)">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid error iusto totam in maxime consequatur quaerat dolores
                voluptatem labore. Quos, veniam voluptas consequuntur hic facere
                esse exercitationem commodi porro suscipit?
              </p>
              <p className="font-medium text-(--accent) italic">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, ipsum?
              </p>
              <p className="font-medium text-(--textSec)  font-dm">Lorem, ipsum dolor.</p>
            </div>
            <div id="cta">
              <button className="bg-(--shapeLight) flex text-sm items-center gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark) mt-4 p-2 px-4 cursor-pointer text-(--textLight) transition rounded-full">
                Read More
                <MoveUpRight className="border rounded-full p-0.5" size={20} />
              </button>
            </div>
          </div>
          {/* Contact form */}
          <div
            id="contactForm"
            className="w-[350px] flex flex-col justify-between  p-4 rounded-2xl bg-(--bgLight)"
          >
            <div className="flex flex-col gap-8">
              <div id="heading">
                <h1 className="text-2xl text-(--textLight) font-bold font-dm">Let's talk!</h1>
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
                  placeholder="Your name"
                  className="border outline-none resize-none border-gray-400 placeholder-gray-400 p-3 w-full rounded-xl"
                />
              </form>
            </div>
            <button className="bg-(--bgLight) border border-(--textLight) flex text-sm items-center gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark)  p-2 px-6 w-fit self-center cursor-pointer text-(--textLight) transition rounded-full">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
