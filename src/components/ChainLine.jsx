import { useEffect, useState } from "react";

const sections = ["hero", "projects", "experience", "skills", "certifications", "contact"];

export default function ChainLine() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let current = 0;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          current = i;
          break;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <div className="fixed left-6 top-0 h-full flex flex-col items-center z-50 hidden md:flex">
      <div className="relative h-full flex flex-col justify-center gap-6">
        {sections.map((sec, i) => {
          const isActive = i <= active;
          return (
            <div key={sec} className="flex flex-col items-center">
              <div
                className={`w-[1px] h-16 transition-colors duration-300 ${
                  isActive ? "bg-accent" : "bg-border"
                }`}
              />
              <div
                className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                  i === active
                    ? "bg-accent border-accent shadow-[0_0_10px_rgba(168,255,62,0.5)]"
                    : "bg-space border-border-hover"
                }`}
              />
              {/* Last node has no line after */}
              {i !== sections.length - 1 && (
                <div
                  className={`w-[1px] h-16 transition-colors duration-300 ${
                    isActive && i < active ? "bg-accent" : "bg-border"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}