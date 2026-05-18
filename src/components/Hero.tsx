import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import MascotVisual from "./MascotVisual";
import NetworkBackground from "./NetworkBackground";
import FlipText from "./FlipText";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/i18n";

const HeroTitle = ({ text, delay }: { text: string; delay: number }) => {
  return (
    <h1 
      className="m-0 font-black uppercase tracking-tighter text-[clamp(28px,12vw,160px)] leading-[1.1] text-brutal-black dark:text-white drop-shadow-sm flex flex-nowrap whitespace-nowrap pt-8 pb-4"
      style={{ fontFamily: '"Unbounded", system-ui, -apple-system, sans-serif' }}
    >
      <motion.span
        className="inline-block origin-bottom"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {text}
      </motion.span>
    </h1>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = translations[language].hero;

  const hasPlayedIntro =
    typeof window !== "undefined" &&
    sessionStorage.getItem("fevral_intro_played") === "true";
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const introDelay = !hasPlayedIntro && !prefersReducedMotion ? 2.6 : 0;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const textY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textY3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full flex items-center justify-center pt-20 z-10 select-none overflow-hidden bg-transparent"
    >
      <NetworkBackground />

      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: introDelay, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full border-b-[1px] md:border-b-[2px] border-brutal-black/10 dark:border-white/10 bg-transparent flex flex-col justify-center px-6 md:px-12 py-10 sm:py-14 lg:py-20 min-h-[70vh]"
      >
        <div className="max-w-[1440px] w-full mx-auto relative z-10 flex items-center justify-between">
          
          <div className="flex flex-col justify-center items-start w-full max-w-full overflow-visible relative z-20">
            <div className="w-full flex flex-col items-start relative overflow-visible">
              
              <motion.div 
                style={{ y: textY1, opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }} 
                className="w-full flex items-center justify-start relative origin-left overflow-visible z-20"
              >
                <HeroTitle text={t.title} delay={introDelay} />
              </motion.div>

              <motion.h2
                style={{ 
                  y: textY2,
                  fontFamily: '"Unbounded", system-ui, sans-serif'
                }}
                className="mt-1 sm:mt-2 font-black text-[clamp(22px,4.2vw,52px)] m-0 tracking-tighter uppercase select-none w-full text-brutal-black dark:text-white drop-shadow-sm whitespace-pre-wrap leading-[1.05]"
              >
                <FlipText delay={introDelay * 1000 + 400}>{t.role}</FlipText>
              </motion.h2>

              <motion.div
                style={{
                  y: textY3,
                  opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0]),
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
                className="mt-5 sm:mt-6 text-[clamp(16px,1.3vw,20px)] font-medium text-brutal-black/70 dark:text-white/70 max-w-[800px] w-full tracking-tight"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: introDelay + 0.4, duration: 0.8 }}
              >
                <p className="leading-[1.5] w-full max-w-full">
                  {t.subtitle}
                </p>
              </motion.div>

            </div>
          </div>
          
          <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-full items-center justify-center z-[-1] pointer-events-none mix-blend-normal">
            <motion.div 
              style={{ y: textY2 }}
              className="relative pointer-events-none w-full flex justify-center"
            >
              <MascotVisual />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
