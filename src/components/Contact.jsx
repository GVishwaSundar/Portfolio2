import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { contact } from "../data/portfolio";

export default function Contact() {
  const cards = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "GitHub", value: "/GVishwaSundar", href: contact.github },
    { label: "LinkedIn", value: "G Vishwa Sundar", href: contact.linkedin },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto text-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="text-accent uppercase tracking-[0.15em] text-xs font-mono mb-4">
          // 05 · PING
        </p>

        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-text mb-12">
          Let’s connect
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {cards.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface border border-border hover:border-border-hover p-6 rounded-sm flex flex-col items-center justify-center gap-2 transition-colors min-w-[200px]"
            >
              <span className="font-mono text-xs text-text-faint uppercase tracking-widest">
                {card.label}
              </span>
              <span className="font-mono text-sm text-text-muted hover:text-text transition-colors">
                {card.value}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}