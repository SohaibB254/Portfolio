import React from "react";

const FloatingShapes = () => {
  const shapes = ["circle", "square", "triangle", "diamond", "oval"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none blur-md -z-10">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`
            shape ${shape}
            absolute blur-3xl opacity-35  bg-(--shapeLight)
            animate-drift
          `}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${20 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `scale(${0.7 + Math.random() * 0.8})`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingShapes;
