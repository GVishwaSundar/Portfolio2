import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-space py-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-text-muted">
          © 2025 G Vishwa Sundar
        </p>
        
        <div className="flex items-center gap-6">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}