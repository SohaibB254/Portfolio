import React, { useEffect, useState } from "react";

const ScrollToExplore = () => {
  const [rotation, setRotation] = useState(0);
  const [isHalfScrolled, setIsHalfScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / scrollHeight;

      setRotation(scrollFraction * 360);
      setIsHalfScrolled(scrollFraction > 0.5); // flip arrow after 50%
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="hidden lg:flex items-center justify-center fixed right-10 bottom-8
      w-20 h-20  rounded-full z-9999"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.1s linear",
      }}
    >
      {/* Circular Text */}
      <svg
        viewBox="0 0 100 100"
        className={`absolute inset-0 w-full h-full transition-all duration-1000 ${isHalfScrolled?'text-green-400':'text-(--accent)'} `}
      >
        <path
          id="circlePath"
          d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
          fill="none"
        />
        <text
          fill="currentColor"
          fontSize="11.5"
          fontWeight="600"
          letterSpacing="1.5"
        >
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            • Scroll to Explore • Scroll to Explore
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default ScrollToExplore;
