import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  const getEmailLink = () => {
    const email = "twicenicetwice@gmail.com";
    const subject = language === "ru" ? "Задача для FEVRAL" : "Project for FEVRAL";
    const body = language === "ru" ? "Здравствуйте! Хочу обсудить задачу:\n\n" : "Hi! I’d like to discuss a project:\n\n";
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const directLinks = [
    { name: "Telegram", href: "https://t.me/psyhonik" },
    { name: "VK", href: "https://vk.ru/nick_februar" },
    { name: "WhatsApp", href: "https://wa.me/79690146996" },
    { name: "Email", href: getEmailLink() },
  ];

  const heading = language === "ru" ? "Напишите мне" : "Message me";
  const subtitle = language === "ru" 
    ? "Пишите, с удовольствием обсудим вашу задачу." 
    : "Drop me a message — I’ll be happy to discuss your task.";
  const actionText = language === "ru" ? "Написать" : "Message";

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 w-full z-10 transition-colors duration-700 scroll-mt-20"
    >
      <div className="flex flex-col justify-center max-w-[1600px] mx-auto w-full px-4 md:px-12">
        <motion.div
          ref={ref}
          style={{ y }}
          className="w-full rounded-[24px] md:rounded-[40px] bg-black/5 dark:bg-white/[0.02] border border-black/10 dark:border-white/10 p-8 md:p-16 relative overflow-hidden transition-colors duration-700 max-w-4xl mx-auto group"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-1000 blur-3xl pointer-events-none group-hover:opacity-100"
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-full mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-4 leading-[0.9]">
              {heading}
            </h2>
            
            <p className="text-base md:text-lg font-sans opacity-60 font-medium mb-12">
              {subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {directLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between group/card bg-white/50 dark:bg-[#030303] border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:bg-white/80 dark:hover:bg-[#111] rounded-2xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="font-display font-black uppercase tracking-widest text-sm md:text-base">
                    {link.name}
                  </span>
                  <div className="flex items-center gap-3 opacity-50 group-hover/card:opacity-100 transition-opacity">
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {actionText}
                    </span>
                    <span className="text-lg leading-none group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform duration-300">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
