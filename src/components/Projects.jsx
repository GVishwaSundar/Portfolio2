import { motion } from "framer-motion";
import { scanIn, stagger } from "../animations";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        variants={scanIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="text-accent uppercase tracking-[0.15em] text-xs font-mono mb-4">
          // 01 · SELECTED WORK
        </p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap gap-[1px] bg-border border border-border rounded-sm overflow-hidden"
        >
          {projects.map((project, index) => {
            const isFull = project.span === "full";
            return (
              <motion.div
                key={index}
                variants={scanIn}
                className={`bg-surface p-8 flex flex-col items-start gap-4 flex-1 min-w-0 ${
                  isFull ? "basis-full w-full" : "basis-full md:basis-[calc(50%-1px)]"
                }`}
              >
                <span className="font-mono text-xs text-accent uppercase tracking-widest">
                  {project.label}
                </span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-text">
                  {project.title}
                </h3>
                <p className="font-mono text-sm text-text-muted leading-relaxed flex-grow">
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