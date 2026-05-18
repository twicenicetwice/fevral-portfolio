import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/i18n";
import SectionHeader from "./SectionHeader";
import FlipText from "./FlipText";
import { motion, useInView } from "motion/react";

const getHoverBorderClass = (idx: number) => {
  switch (idx) {
    case 0: return "hover:border-cyan-500/80 dark:hover:border-cyan-400/80";
    case 1: return "hover:border-indigo-500/80 dark:hover:border-indigo-400/80";
    case 2: return "hover:border-emerald-500/80 dark:hover:border-emerald-400/80";
    case 3: return "hover:border-fuchsia-500/80 dark:hover:border-fuchsia-400/80";
    case 4: return "hover:border-amber-500/80 dark:hover:border-amber-400/80";
    default: return "";
  }
};

const CapabilityCard: React.FC<{
  item: any;
  idx: number;
  isInView: boolean;
}> = ({ item, idx, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: idx * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 lg:p-12 rounded-[clamp(20px,3vw,32px)] bg-black/[0.02] hover:bg-black/[0.04] dark:bg-[#0c0c0c] dark:hover:bg-[#111111] border border-black/[0.05] dark:border-white/[0.05] transition-all duration-500 hover:-translate-y-1 overflow-hidden w-full gap-6 md:gap-12 ${getHoverBorderClass(idx)}`}
    >
      <div className="relative z-10 w-full md:w-7/12 lg:w-3/5">
        <h3 className={`font-display font-black uppercase tracking-tighter text-brutal-black dark:text-white leading-[0.95] break-words transition-transform duration-500 group-hover:translate-x-2 ${idx === 0 ? "text-[clamp(28px,5vw,60px)]" : "text-[clamp(24px,4vw,48px)]"}`}>
          {isInView ? <FlipText delay={100 + idx * 50}>{item.title}</FlipText> : item.title}
        </h3>
      </div>
      
      <div className="relative z-10 w-full md:w-5/12 lg:w-2/5">
        <p className="font-sans text-[clamp(14px,1.5vw,16px)] md:text-base opacity-70 font-medium leading-relaxed group-hover:opacity-100 transition-opacity">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function Capabilities() {
  const { language } = useLanguage();
  const tSection = translations[language].sections.capabilities;
  const items = translations[language].capabilities.items;

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="capabilities" className="relative py-20 lg:py-32 w-full z-10 transition-colors duration-700 bg-transparent">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto w-full relative z-10">
        <SectionHeader
          label={tSection.label}
          title={tSection.title}
          subtitle={tSection.subtitle}
        />

        <div className="mt-16 md:mt-24 w-full" ref={ref}>
          <div className="flex flex-col gap-4 md:gap-6 w-full lg:max-w-6xl mx-auto">
            {items.map((item, idx) => (
              <CapabilityCard
                key={idx}
                item={item}
                idx={idx}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
