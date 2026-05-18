import React, { useState, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/i18n";
import SectionHeader from "./SectionHeader";
import FlipText from "./FlipText";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const ServiceCard: React.FC<{
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
      className="group relative flex flex-col p-8 md:p-10 rounded-[clamp(20px,3vw,28px)] bg-black/[0.03] hover:bg-black/[0.05] dark:bg-[#0c0c0c] dark:hover:bg-[#111111] border border-black/[0.08] dark:border-white/[0.05] transition-all duration-700 hover:border-black/[0.15] dark:hover:border-white/[0.1] hover:-translate-y-1 hover:shadow-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent dark:from-cyan-400/[0.05] dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -right-20 -top-20 w-56 h-56 bg-cyan-500/10 dark:bg-cyan-400/10 blur-[60px] rounded-full transition-transform duration-1000 group-hover:translate-x-4 group-hover:translate-y-4 mix-blend-normal pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full min-w-0">
        <div className="flex justify-between items-start w-full gap-3 md:gap-4 mb-6">
          <h3 className="font-display font-black uppercase text-[clamp(18px,2vw,24px)] lg:text-[clamp(20px,2vw,28px)] tracking-tighter text-brutal-black dark:text-white leading-[0.95] break-words min-w-0 pr-2">
            {isInView ? <FlipText delay={100 + idx * 50}>{item.title}</FlipText> : item.title}
          </h3>
          <span className="shrink-0 inline-flex px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase border border-cyan-500/30 dark:border-cyan-400/30 text-cyan-600 dark:text-cyan-400 bg-cyan-500/5 whitespace-nowrap">
            {item.price}
          </span>
        </div>
        
        <p className="font-sans text-sm md:text-base opacity-70 font-medium leading-relaxed mb-8 flex-grow">
          {item.desc}
        </p>

        <div className="h-px w-full bg-black/10 dark:bg-white/10 mb-6" />

        <ul className="flex flex-col gap-3">
          {item.features.map((feature: string, fIdx: number) => (
            <li key={fIdx} className="flex items-center gap-3 font-sans text-xs md:text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const FAQItem: React.FC<{ item: any; idx: number }> = ({ item, idx }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10 dark:border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 md:py-6 flex items-center justify-between text-left group gap-4 outline-none filter-none"
      >
        <span className="font-sans font-bold text-base md:text-lg text-brutal-black dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 pr-4">
          {item.q}
        </span>
        <div className="shrink-0 flex items-center justify-center text-brutal-black/50 dark:text-white/50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 font-sans text-sm md:text-base font-medium opacity-70 leading-relaxed text-brutal-black dark:text-white">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Services() {
  const { language } = useLanguage();
  const tSection = translations[language].sections.services;
  const tServices = translations[language].services;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="services" className="relative py-20 lg:py-32 w-full z-10 scroll-mt-20">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto w-full relative z-10">
        <SectionHeader
          label={tSection.label}
          title={tSection.title}
          subtitle={tSection.subtitle}
        />

        <div className="mt-16 md:mt-24" ref={ref}>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24">
            {tServices.items.map((item, idx) => (
              <ServiceCard key={idx} item={item} idx={idx} isInView={isInView} />
            ))}
          </div>

          {/* FAQ Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto flex flex-col"
          >
            <h4 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tighter mb-8 text-brutal-black dark:text-white pb-4 border-b-2 border-black/10 dark:border-white/10">
              FAQ
            </h4>
            <div className="flex flex-col">
              {tServices.faq.map((item, idx) => (
                <FAQItem key={idx} item={item} idx={idx} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
