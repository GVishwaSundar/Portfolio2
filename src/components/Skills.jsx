import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import { skills } from "../data/portfolio";
import ScrambleText from "./ScrambleText";

export default function Skills() {
  const categories = Object.keys(skills);

  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ScrambleText text="// 03 · STACK" className="text-accent uppercase tracking-[0.15em] text-xs font-mono mb-4 block" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-surface border border-border p-8 rounded-sm"
            >
              <h3 className="font-display font-semibold text-lg text-accent mb-6">
                {cat}
              </h3>
              <div>
                {skills[cat].map((skill, i) => (
                  <span
                    key={i}
                    className="font-mono bg-space text-text-muted border border-border rounded-none text-xs px-3 py-1 inline-block mr-2 mb-2 uppercase tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}