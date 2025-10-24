import React from "react";
import devArt from '../../assets/images/dev/hero-art.png'

const Hero = () => {
  return (
    <div className="grid place-items-center transition py-8">
      <div>
        <div
          id="text"
          className="text-[76px] text-(--textLight) transition leading-24 font-dm"
        >
          <h1>
            {" "}
            <span className="">Hi, </span>I am{" "}
            <span className="font-bold">Sohaib</span> <br />
            Creating Digital{" "}
            <span id="expText" className="tracking-wide  transition font-bold">
              Experiences
            </span>
          </h1>
        </div>
        <div>
          <div className="flex gap-4 ">
            <div className="flex flex-col text-(--textLight) justify-between ">
            <div>
              <h1 className="text-[76px] transition ">
                with <span className="font-bold">MERN</span> Stack.
              </h1>
              <p className="text-(--textSec) transition  italic font-medium font-inter">
                Designing seamless web solutions with clean code and creativity.
              </p>
              {/* CTA */}
              <div id="cta">
                <button className="bg-(--btnBg) font-inter border border-(--textLight) hover:text-(--accent) mt-4 p-3 px-8 text-xl cursor-pointer text-(--textLight) transition rounded-full">
                  Hire Me !
                </button>
              </div>
                  </div>
              {/* Socials  */}
              <div id="socials" className="flex flex-col gap-2">
                <p className="text-(--textMini) italic text-xs">~Check these out</p>
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
            {/* Dev Image */}
            <div
              className="h-[350px] mt-4 flex transition justify-center overflow-hidden w-[330px] bg-(--sectionLight) rounded-2xl"
              id="img"
            >
                <img className=" h-full grayscale-100  " src={devArt} alt="" />
            </div>
          </div>
        </div>
      </div>
      <p className="absolute text-gray-500 left-0 top-[50vh] rotate-270">&#123; Colors are distracting &#125;</p>
    </div>
  );
};

export default Hero;
