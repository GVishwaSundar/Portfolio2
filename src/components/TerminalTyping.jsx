import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const lines = [
  "> GVS.init()",
  "> Blockchain (Solidity | DApps)",
  "> Full-stack (React, Node, Mongo)",
  "> Open to internships",
  "> Status: Building"
];

export default function TerminalTyping() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    if (visibleLines < lines.length) {
      if (charIndex < lines[visibleLines].length) {
        const timeout = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, Math.random() * 30 + 20); // random typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setVisibleLines((prev) => prev + 1);
          setCharIndex(0);
        }, 300); // pause between lines
        return () => clearTimeout(timeout);
      }
    }
  }, [isInView, visibleLines, charIndex]);

  return (
    <div ref={ref}>
      {lines.map((line, idx) => {
        if (idx < visibleLines) {
          return (
            <p key={idx} className="flex items-center gap-1">
              <span className="text-accent">{">"}</span> {line.substring(2)}
            </p>
          );
        } else if (idx === visibleLines) {
          return (
            <p key={idx} className="flex items-center gap-1">
              <span className="text-accent">{">"}</span> {line.substring(2, charIndex)}
              <span className="inline-block w-2 h-4 bg-accent animate-[blink_1s_infinite] ml-1" />
            </p>
          );
        }
        return <p key={idx} className="opacity-0 select-none">{line}</p>; // Keep height consistent
      })}
    </div>
  );
}