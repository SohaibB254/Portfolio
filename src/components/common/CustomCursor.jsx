import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    // hide on touch/coarse pointer devices (optional but recommended)
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
      el.style.display = "none";
      return;
    }

    // Ensure the element is centered under the pointer when we animate to x/y
    gsap.set(el, { xPercent: -50, yPercent: -50 });

    // Handler uses gsap.to to smoothly move the circle to mouse coords
    const handleMove = (e) => {
      const x = e.clientX ?? (e.touches && e.touches[0].clientX);
      const y = e.clientY ?? (e.touches && e.touches[0].clientY);

      // duration controls the "lag" — smaller = snappier, larger = more delay
      gsap.to(el, {
        x,
        y,
        duration: 0.25,       // tweak this for more/less lag (0.08 - 0.30)
        ease: "power2.out",
        overwrite: true,     // allow new tweens to overwrite the previous
      });
    };

    window.addEventListener("mousemove", handleMove);
    // optional: support touch move (kept hidden on touch devices above)
    window.addEventListener("touchmove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-9999 hidden lg:block -translate-x-1/2 -translate-y-1/2"
      style={{
        width: 10,                 // tiny circle (px). Change to 8/12 if you like
        height: 10,
        borderRadius: "50%",
        background: "var(--btnBg)", // uses your css variable
        willChange: "transform",
      }}
    />
  );
}
