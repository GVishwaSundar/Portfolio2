import { motion } from "framer-motion";
import { scanIn } from "../animations";
import { certification } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        variants={scanIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="text-accent uppercase tracking-[0.15em] text-xs font-mono mb-4">
          // 04 · PROOF
        </p>

        <div className="bg-surface border border-accent p-8 rounded-sm flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-text mb-2">
              {certification.name}
            </h3>
            <p className="font-mono text-sm text-text-muted">
              {certification.issuer}
            </p>
          </div>
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-mono text-sm inline-flex items-center gap-2 hover:underline underline-offset-4 decoration-accent/50 hover:decoration-accent transition-all shrink-0"
          >
            View Certificate ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}