import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function FlipText({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const words = children.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap cursor-default ${className}`}
      onContextMenu={(e) => e.preventDefault()}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block mr-[0.25em] last:mr-0 relative overflow-hidden pb-4 -mb-4 pt-4 -mt-4 whitespace-nowrap"
        >
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block relative z-10 transition-colors duration-150 hover:text-cyan-500"
              initial={{ y: "110%", opacity: 0, rotateZ: 3, scaleY: 1.1 }}
              animate={
                isInView ? { y: "0%", opacity: 1, rotateZ: 0, scaleY: 1 } : {}
              }
              transition={{
                duration: 0.8,
                delay: delay / 1000 + wordIndex * 0.05 + i * 0.02,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformOrigin: "bottom left" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
