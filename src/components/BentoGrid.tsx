import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/i18n";
import SectionHeader from "./SectionHeader";
import FlipText from "./FlipText";

const BentoCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group overflow-hidden rounded-[clamp(20px,3vw,28px)] bg-black/[0.03] hover:bg-black/[0.05] dark:bg-[#0c0c0c] dark:hover:bg-[#111111] border border-black/[0.08] dark:border-white/[0.05] p-6 md:p-8 transition-all duration-700 hover:border-black/[0.15] dark:hover:border-white/[0.1] hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] ${className}`}
      style={{
        transform: "translateZ(0)",
        willChange: "transform, opacity",
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none overflow-hidden rounded-[clamp(20px,3vw,28px)] z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent dark:from-cyan-400/[0.05] dark:to-transparent" />
        <div className="absolute -right-24 -top-24 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-400/10 blur-[80px] rounded-full transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-10 mix-blend-normal dark:mix-blend-screen" />
        <div className="absolute -left-24 -bottom-24 w-72 h-72 bg-blue-500/10 dark:bg-blue-400/10 blur-[80px] rounded-full transition-transform duration-1000 group-hover:-translate-x-10 group-hover:-translate-y-10 mix-blend-normal dark:mix-blend-screen" />
      </div>

      {children}
    </motion.div>
  );
};

export default function BentoGrid() {
  const { language } = useLanguage();
  const tContent = translations[language].about;
  const tSection = translations[language].sections.method;

  return (
    <section id="bento" className="relative py-20 lg:py-32 w-full scroll-mt-20">
      <div className="px-6 md:px-12 max-w-[1920px] mx-auto w-full">
        <SectionHeader
          label={tSection.label}
          title={tSection.title}
          subtitle={tSection.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(280px,auto)] gap-4 md:gap-6 mt-16 lg:mt-24">
          
          <BentoCard
            className="md:col-span-7 relative flex flex-col justify-between"
            delay={0.1}
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            
            <div className="absolute top-4 right-8 text-[120px] md:text-[180px] font-display font-black leading-none text-black/[0.03] dark:text-white/[0.03] pointer-events-none select-none">
              01
            </div>

            <div className="mt-16 relative z-10 max-w-xl min-w-0">
              <h3 className="font-display text-[clamp(24px,3.5vw,56px)] font-black mb-4 md:mb-6 uppercase tracking-tighter leading-[0.9] text-brutal-black dark:text-white break-words w-full">
                <FlipText delay={200}>{tContent.cards.audience.title}</FlipText>
              </h3>
              <p className="font-sans text-[clamp(14px,1.5vw,18px)] opacity-70 font-medium leading-relaxed max-w-md">
                {tContent.cards.audience.text}
              </p>
            </div>
          </BentoCard>

          <BentoCard
            className="md:col-span-5 flex flex-col justify-between"
            delay={0.2}
          >
            <div className="absolute top-0 right-14 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 right-8 text-[100px] md:text-[140px] font-display font-black leading-none text-black/[0.04] dark:text-white/[0.04] pointer-events-none select-none">
              02
            </div>

            <div className="mt-16 relative z-10 pr-4 md:pr-8 min-w-0">
              <h3 className="font-display text-[clamp(22px,3vw,40px)] font-black mb-4 md:mb-6 uppercase tracking-tighter leading-[0.9] text-brutal-black dark:text-white break-words">
                <FlipText delay={250}>{tContent.cards.landing.title}</FlipText>
              </h3>
              <p className="font-sans text-[clamp(14px,1.5vw,16px)] opacity-60 font-medium leading-relaxed text-brutal-black dark:text-white">
                {tContent.cards.landing.text}
              </p>
            </div>
          </BentoCard>

          <BentoCard
            className="md:col-span-5 flex flex-col justify-between"
            delay={0.3}
          >
            <div className="absolute top-4 right-8 text-[100px] md:text-[140px] font-display font-black leading-none text-black/[0.03] dark:text-white/[0.03] pointer-events-none select-none">
              03
            </div>

            <div className="absolute -right-8 -top-8 w-48 h-48 border-[1px] border-black/5 dark:border-white/5 rounded-full pointer-events-none" />
            <div className="absolute -right-12 -top-12 w-64 h-64 border-[1px] border-black/5 dark:border-white/5 rounded-full pointer-events-none" />

            <div className="mt-20 relative z-10 w-full flex flex-col justify-end min-w-0">
              <h3 className="font-display text-[clamp(22px,3vw,40px)] font-black uppercase tracking-tighter leading-[0.9] mb-4 text-brutal-black dark:text-white break-words">
                <FlipText delay={200}>
                  {tContent.cards.creatives.title}
                </FlipText>
              </h3>
              <p className="font-sans text-[clamp(14px,1.5vw,16px)] opacity-70 font-medium leading-relaxed text-brutal-black dark:text-white">
                {tContent.cards.creatives.text}
              </p>
            </div>
          </BentoCard>

          <BentoCard
            className="md:col-span-7 relative transition-colors duration-700 group flex flex-col justify-between"
            delay={0.4}
          >
            <div className="absolute top-4 right-8 text-[120px] md:text-[180px] font-display font-black leading-none text-black/[0.04] dark:text-white/[0.04] pointer-events-none select-none">
              04
            </div>

            <div className="mt-20 flex-grow flex flex-col justify-end relative z-10 min-w-0">
              <h3 className="font-display text-[clamp(24px,3.5vw,56px)] font-black uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6 max-w-2xl text-brutal-black dark:text-white break-words">
                <FlipText delay={200}>{tContent.cards.ai.title}</FlipText>
              </h3>
              <p className="font-sans text-[clamp(14px,1.5vw,18px)] opacity-80 font-medium text-brutal-black/70 dark:text-white/70 max-w-xl leading-relaxed">
                {tContent.cards.ai.text}
              </p>
            </div>
          </BentoCard>

          <BentoCard
            className="md:col-span-12 h-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-12 pb-8 md:pb-10"
            delay={0.5}
          >
            <div className="absolute top-4 right-8 lg:left-8 lg:right-auto text-[120px] md:text-[180px] lg:text-[200px] font-display font-black leading-none text-black/[0.03] dark:text-white/[0.02] pointer-events-none select-none z-0">
              05
            </div>

            <div className="flex flex-col relative z-10 max-w-4xl text-left w-full mt-4 md:mt-8 lg:mt-0 lg:ml-auto lg:text-right">
              <h3 className="font-display text-[clamp(24px,3.5vw,64px)] break-words font-black uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6 text-brutal-black dark:text-white">
                <FlipText delay={200}>{tContent.cards.tech.title}</FlipText>
              </h3>
              <p className="font-sans text-[clamp(16px,2vw,20px)] opacity-70 font-medium leading-relaxed max-w-3xl text-brutal-black dark:text-white lg:ml-auto">
                {tContent.cards.tech.text}
              </p>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
