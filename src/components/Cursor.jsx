import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const smoothX = useSpring(0, { stiffness: 300, damping: 20 });
  const smoothY = useSpring(0, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      setDotPos({ x: e.clientX, y: e.clientY });
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);
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
  }, [smoothX, smoothY]);

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full"
        style={{
          width: 8,
          height: 8,
          backgroundColor: "#a8ff3e",
          x: dotPos.x - 4,
          y: dotPos.y - 4,
        }}
      />
      {/* Ghost ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full border border-accent"
        style={{
          width: 32,
          height: 32,
          x: smoothX,
          y: smoothY,
          marginLeft: "-16px",
          marginTop: "-16px",
          borderColor: hovering ? "transparent" : "rgba(168,255,62,0.4)",
          scale: hovering ? 1.8 : 1,
          backgroundColor: hovering
            ? "rgba(168,255,62,0.15)"
            : "transparent",
          backdropFilter: hovering ? "blur(2px)" : "none",
          transition: "border-color 0.3s, transform 0.3s, background-color 0.3s, backdrop-filter 0.3s",
        }}
      />
    </>
  );
}