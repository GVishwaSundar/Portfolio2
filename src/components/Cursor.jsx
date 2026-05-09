import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [hovering, setHovering] = useState(false);

  // useMotionValue bypasses React state for buttery smooth performance
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // The small dot tracks instantly
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 40, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 40, mass: 0.1 });

  // The ring follows smoothly with a slight drag
  const ringX = useSpring(mouseX, { stiffness: 250, damping: 20, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 250, damping: 20, mass: 0.5 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = (e) => {
      const tag = e.target.tagName?.toLowerCase();
      const role = e.target.getAttribute?.("role");
      if (
        ["a", "button", "input", "textarea", "select"].includes(tag) ||
        role === "button"
      ) {
        setHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      const tag = e.target.tagName?.toLowerCase();
      const role = e.target.getAttribute?.("role");
      if (
        ["a", "button", "input", "textarea", "select"].includes(tag) ||
        role === "button"
      ) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full"
        style={{
          width: 8,
          height: 8,
          backgroundColor: hovering ? "transparent" : "#a8ff3e",
          x: dotX,
          y: dotY,
          marginLeft: "-4px",
          marginTop: "-4px",
        }}
      />
      {/* Ghost ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full border"
        animate={{
          width: hovering ? 60 : 32,
          height: hovering ? 60 : 32,
          marginLeft: hovering ? -30 : -16,
          marginTop: hovering ? -30 : -16,
          backgroundColor: hovering ? "rgba(168,255,62,0.15)" : "transparent",
          borderColor: hovering ? "rgba(168,255,62,0.8)" : "rgba(168,255,62,0.4)",
          scale: hovering ? 1 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
          x: ringX,
          y: ringY,
          backdropFilter: hovering ? "blur(4px)" : "none",
        }}
      />
    </>
  );
}