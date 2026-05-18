import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function IntroSequence({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const text = "FEVRAL";
  const letters = text.split("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasPlayed = sessionStorage.getItem("fevral_intro_played");

    if (prefersReducedMotion || hasPlayed) {
      setIsVisible(false);
      onComplete();
      return;
    }

    sessionStorage.setItem("fevral_intro_played", "true");

    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2800); // 2.8 seconds total

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] pointer-events-auto flex items-center justify-center overflow-hidden">
          {/* Main Background */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 z-0 bg-paper dark:bg-brutal-black"
          />

          <motion.div
            className="relative z-10 flex flex-col items-center justify-center p-6 w-full h-full"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="font-display text-6xl sm:text-7xl md:text-[150px] font-black tracking-tighter uppercase relative flex text-brutal-black/20 dark:text-white/20">
              {letters.map((letter, idx) => (
                <motion.span
                  key={`base-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                >
                  {letter}
                </motion.span>
              ))}

              <motion.div
                className="absolute inset-0 flex text-cyan-600 dark:text-cyan-400 overflow-hidden"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{
                  duration: 1,
                  ease: [0.65, 0, 0.35, 1],
                  delay: letters.length * 0.1 + 0.2
                }}
              >
                {letters.map((letter, idx) => (
                  <span key={`filled-${idx}`}>{letter}</span>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 0.5 }}
               className="mt-6 flex flex-row gap-2"
            >
                <div className="h-1 w-1 rounded-full bg-cyan-600 dark:bg-cyan-500 animate-pulse delay-75"></div>
                <div className="h-1 w-1 rounded-full bg-cyan-600 dark:bg-cyan-500 animate-pulse delay-150"></div>
                <div className="h-1 w-1 rounded-full bg-cyan-600 dark:bg-cyan-500 animate-pulse delay-300"></div>
            </motion.div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

