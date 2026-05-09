import { useState } from "react";
import { motion } from "framer-motion";
import { scanIn, stagger } from "../animations";
import { projects } from "../data/portfolio";
import ScrambleText from "./ScrambleText";

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        variants={scanIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ScrambleText text="// 01 · SELECTED WORK" className="text-accent uppercase tracking-[0.15em] text-xs font-mono mb-4 block" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap gap-[1px] bg-border border border-border rounded-sm overflow-hidden"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {projects.map((project, index) => {
            const isFull = project.span === "full";
            const isHovered = hoveredIdx === index;
            const isOtherHovered = hoveredIdx !== null && !isHovered;
            
            return (
              <motion.div
                key={index}
                variants={scanIn}
                onMouseEnter={() => setHoveredIdx(index)}
                className={`bg-surface p-8 flex flex-col items-start gap-4 flex-1 min-w-0 transition-all duration-500 ease-out ${
                  isFull ? "basis-full w-full" : "basis-full md:basis-[calc(50%-1px)]"
                } ${isOtherHovered ? "opacity-30 blur-[2px]" : "opacity-100"} ${
                  isHovered ? "shadow-[inset_0_0_40px_rgba(168,255,62,0.06)]" : ""
                }`}
              >
                <span className="font-mono text-xs text-accent uppercase tracking-widest">
                  {project.label}
                </span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-text">
                  {project.title}
                </h3>
                <p className="font-mono text-sm text-text-muted leading-relaxed flex-grow transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-accent-dim text-accent border border-accent-dim rounded-none text-xs px-2 py-0.5 font-mono uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}