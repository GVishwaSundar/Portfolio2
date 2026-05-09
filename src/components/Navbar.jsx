import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Path", href: "#experience" },
  { label: "Stack", href: "#skills" },
  { label: "Proof", href: "#certifications" },
  { label: "Ping", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let current = "";
      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      if (window.scrollY < 100) current = ""; // reset if at top
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-space/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 h-20 flex items-center justify-between">
        <a href="#hero" className="font-display font-extrabold text-accent text-2xl tracking-tighter">
          GVS
        </a>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative font-mono uppercase tracking-[0.12em] text-sm transition-colors ${
                  isActive ? "text-accent" : "text-text-muted hover:text-text"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}