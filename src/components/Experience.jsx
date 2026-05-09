import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { experience, education } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="text-accent uppercase tracking-[0.15em] text-xs font-mono mb-4">
          // 02 · PATH
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Experience Card */}
          <div className="bg-surface border border-border p-8 rounded-sm flex flex-col gap-6">
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div>
                <h3 className="font-display font-bold text-xl text-text mb-1">
                  {experience.role}
                </h3>
                <p className="font-mono text-sm text-text-muted">
                  {experience.company}
                </p>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-amber border border-amber/30 bg-amber/10 px-2 py-1">
                Work
              </span>
            </div>
            <p className="font-mono text-xs text-text-faint">{experience.duration}</p>
            <ul className="list-disc list-inside font-mono text-sm text-text-muted leading-relaxed flex flex-col gap-2 marker:text-accent">
              {experience.details.map((detail, idx) => (
                <li key={idx} className="pl-1">{detail}</li>
              ))}
            </ul>
          </div>

          {/* Education Card */}
          <div className="bg-surface border border-border p-8 rounded-sm flex flex-col gap-6">
            <h3 className="font-display font-bold text-xl text-text mb-2">Education</h3>
            <div className="flex flex-col gap-6 relative">
              <div className="absolute left-[5px] top-2 bottom-4 w-[1px] bg-border" />
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-space border-2 border-accent" />
                  <h4 className="font-display font-semibold text-text text-base">
                    {edu.degree}
                  </h4>
                  <p className="font-mono text-sm text-text-muted mt-1 leading-relaxed">
                    {edu.school}
                  </p>
                  {edu.note && (
                    <p className="font-mono text-xs text-text-faint mt-1">
                      {edu.note}
                    </p>
                  )}
                  <p className="font-mono text-xs text-text-faint mt-2">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}