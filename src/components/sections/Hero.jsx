import React from "react";
import devArt from "../../assets/images/dev/hero-art.png";

const Hero = () => {
  return (
    <div className="flex justify-center transition py-8 lg:px-0 px-8">
      <div className="flex flex-col items-center lg:items-start">
        <div className="flex flex-col justify-center  duration-300 tracking-wide font-light   md:text-[75px] sm:text-[70px] text-[38px] text-(--textLight) transition-all  sm:leading-24 font-outfit">
          <span className="">
            Hi, I am
            <span className="font-semibold"> Sohaib</span>
          </span>
          <div className="flex lg:gap-4 lg:flex-row font-light     flex-col">
            Creating Digital
            <span id="expText" className="lg:tracking-wide tracking-[8px] font-sans transition  font-bold">
              Experiences
            </span>
          </div>
          <div className="lg:hidden font-light">
             with <span className="font-semibold">MERN</span> Stack.
          </div>
        </div>
        <div>
          <div className="flex  gap-4 ">
            <div className="flex flex-col items-center lg:items-start  text-(--textLight) justify-between ">
              <div className="flex flex-col  gap-1 ">
              <div className="lg:text-[75px] sm:text-[70px] hidden font-outfit font-light lg:flex text-[38px] gap-1 sm:gap-2  justify-center tracking-wide  transition ">
                with <span className="font-bold">MERN</span> Stack.
              </div>
              <p className="text-(--textSec) transition text-[10px] sm:text-base  whitespace-nowrap font-medium font-inter">
                Designing seamless web solutions with clean code and creativity.
              </p>
                </div>

              {/* Socials & CTA  */}
              <div
                id="socials"
                className="flex flex-col items-center lg:items-start gap-14 lg:gap-4"
              >
                <div id="cta" className="flex flex-col sm:gap-2 gap-1">
                  <button className="bg-(--btnBg) font-inter hover:text-(--accent) w-24 sm:w-44 lg:w-auto mt-4 p-2 text-xs sm:p-3 lg:px-10 sm:text-base cursor-pointer text-(--btnText)  transition rounded-full">
                    Hire Me!
                  </button>
                     <button className="bg-(--accent) lg:hidden block font-inter w-24 sm:w-44 hover:bg-[#744cd1] transition cursor-pointer active:shadow-sm shadow-black/70 p-2 text-xs sm:text-base sm:p-3  sm:px-8 text-(--textDark) rounded-full">
                  Resume
                </button>
                </div>

                {/* Social Icons */}
                <div className="flex flex-col gap-2">

                <p className="text-(--textMini) italic text-xs">
                  ~Check these out
                </p>

                <div className="flex gap-4">
                  <div className="h-16 w-16 p-2 cursor-pointer text-(--textLight) text-3xl flex items-center justify-center rounded-xl border-3 border-(--textLight)">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div className="h-16 w-16 p-2 cursor-pointer text-(--textLight) text-3xl flex items-center justify-center rounded-xl border-3 border-(--textLight)">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                  <div className="h-16 w-16 p-2 cursor-pointer text-(--textLight) text-3xl flex items-center justify-center rounded-xl border-3 border-(--textLight)">
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                   </div>
                </div>
              </div>
            </div>
            {/* Dev Image */}
            <div
              className="h-[350px] mt-4 hidden  lg:flex transition justify-center overflow-hidden w-[330px] bg-(--sectionLight) rounded-2xl"
              id="img"
            >
              <img className=" h-full grayscale-100  " src={devArt} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
