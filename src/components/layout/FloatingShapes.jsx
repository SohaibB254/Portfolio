import React from "react";

const FloatingShapes = () => {
  const shapes = [
    "circle",
    "square",
    "triangle",
    "diamond",
    "oval",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`
            shape ${shape}
            absolute blur-3xl opacity-30
            bg-(--shapeLight)
            animate-float
          `}
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${index * 2}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingShapes;
