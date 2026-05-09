import { motion } from "framer-motion";
import { scanIn } from "../animations";
import Magnetic from "./Magnetic";
import TerminalTyping from "./TerminalTyping";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 w-full items-center">
        <motion.div
          variants={scanIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-start gap-8"
        >
          <div className="inline-flex items-center gap-3 border border-accent-dim bg-accent-dim rounded-full px-4 py-1.5 text-accent font-mono text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent blink-dot" />
            Open to Internships & Collaborations
          </div>
          
          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
            Crafting trust<br />with <span className="text-accent">code.</span>
          </h1>

          <p className="font-mono text-text-muted text-lg max-w-lg leading-relaxed">
            Blockchain & full‑stack developer — student by title, builder by proof.
          </p>

          <div className="flex items-center gap-8 mt-2 font-mono text-sm uppercase tracking-widest">
            <Magnetic>
              <a href="#projects" className="text-text hover:text-accent hover:underline underline-offset-4 decoration-border-hover hover:decoration-accent transition-colors block py-2">
                View Work ↓
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="text-text hover:text-accent hover:underline underline-offset-4 decoration-border-hover hover:decoration-accent transition-colors block py-2">
                Get in Touch
              </a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          variants={scanIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-surface border border-border p-6 rounded-lg font-mono text-text-muted text-sm leading-loose w-full min-h-[220px]"
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="w-3 h-3 rounded-full bg-border" />
          </div>
          <TerminalTyping />
        </motion.div>
      </div>
    </section>
  );
}