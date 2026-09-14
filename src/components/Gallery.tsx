import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/i18n";
import SectionHeader from "./SectionHeader";
import CaseImage from "./CaseImage";
import ProjectVisuals from "./ProjectVisuals";
import { cases, CaseItem } from "../lib/cases";

const ProjectModal: React.FC<{
  project: CaseItem;
  onClose: () => void;
  language: string;
}> = ({ project, onClose, language }) => {
  const [activeSection, setActiveSection] = useState<string | null>("tasks");
  const isRu = language === "ru";
  const shouldReduceMotion = useReducedMotion();

  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current!;
    const trigger = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, []);

  const sections = [
    { id: "tasks", title: isRu ? "ЗАДАЧИ" : "TASKS", content: isRu ? project.sections.tasksRu : project.sections.tasksEn },
    { id: "tools", title: isRu ? "ИНСТРУМЕНТЫ" : "TOOLS", content: isRu ? project.sections.toolsRu : project.sections.toolsEn },
    { id: "details", title: isRu ? "ДЕТАЛИ" : "DETAILS", content: isRu ? project.sections.detailsRu : project.sections.detailsEn },
  ];

  if (project.visualImages?.length && ((isRu && project.sections.visualRu) || (!isRu && project.sections.visualEn))) {
    sections.push({ id: "visual", title: isRu ? "ВИЗУАЛ" : "VISUAL", content: isRu ? project.sections.visualRu : project.sections.visualEn });
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: shouldReduceMotion ? 0 : 16, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
  };

  const contentFadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
  };

  return createPortal(
    <dialog ref={dialogRef} className="project-dialog p-0 sm:p-6 md:p-8" aria-labelledby={`modal-title-${project.id}`} onCancel={event => { event.preventDefault(); onClose(); }}>
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10"
      />

      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative w-full max-w-[1240px] h-full sm:h-auto sm:max-h-[90vh] bg-white dark:bg-[#080808] text-brutal-black dark:text-white rounded-none sm:rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col border-0 sm:border border-black/10 dark:border-white/10"
        style={{ boxShadow: `0 20px 40px -10px rgba(0,0,0,0.3), 0 0 60px -30px ${project.accentColor}40` }}
      >
        <div className="relative z-50 flex-shrink-0 px-5 py-4 md:px-8 md:py-5 flex items-center justify-between bg-white/90 dark:bg-[#080808]/90 backdrop-blur-md border-b border-black/5 dark:border-white/5" style={{ paddingTop: 'max(env(safe-area-inset-top), 1rem)' }}>
          <div className="flex items-center gap-3 sm:gap-4 overflow-hidden min-w-0 flex-1 pr-4">
            <span id={`modal-title-${project.id}`} className="font-display font-black text-lg sm:text-xl md:text-2xl uppercase tracking-tighter truncate min-w-0">
              {isRu ? project.titleRu : project.titleEn}
            </span>
            <span className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-black/5 dark:bg-white/5 whitespace-nowrap shrink-0">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor, boxShadow: `0 0 6px ${project.accentColor}80` }} />
              {isRu ? project.categoryRu : project.categoryEn}
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-4 p-2 md:p-2.5 bg-black/5 dark:bg-white/5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors group outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            autoFocus
            aria-label={isRu ? "Закрыть проект" : "Close project"}
          >
             <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" style={{ color: "currentColor" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
          </button>
        </div>

        <div className="overflow-y-auto flex-grow w-full relative" data-lenis-prevent="true">
          <div className="px-5 md:px-10 lg:px-12 py-8 md:py-10 flex flex-col w-full">
            
            <div className="w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/7] rounded-[16px] md:rounded-[24px] overflow-hidden mb-10 md:mb-16 relative bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex-shrink-0">
               {project.imageSrc ? (
                 <CaseImage 
                   src={project.imageSrc} 
                   alt={isRu ? project.titleRu : project.titleEn} 
                   className="w-full h-full object-cover object-top" loading="eager" 
                 />
               ) : (
                 <div className="w-full h-full flex flex-col items-center justify-center opacity-40">
                   <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundColor: project.accentColor }} />
                   <svg className="w-10 h-10 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                 </div>
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-black/60 dark:to-transparent outline-none pointer-events-none" />
            </div>

            <motion.div variants={contentFadeVariants} initial="hidden" animate="visible" className="w-full flex flex-col">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 md:mb-24">
                <div className="flex-1 min-w-0">
                  <h2 className="font-display font-black text-3xl md:text-[clamp(36px,5vw,60px)] lg:text-6xl uppercase tracking-tighter leading-[0.95] mb-6 break-words">
                    {isRu ? project.titleRu : project.titleEn}
                  </h2>
                  <p className="font-sans text-base md:text-lg opacity-80 leading-relaxed max-w-2xl">
                    {isRu ? project.previewRu : project.previewEn}
                  </p>
                </div>
                
                <div className="flex flex-col gap-6 lg:min-w-[280px] shrink-0">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-50">
                      {isRu ? "Год" : "Year"}
                    </span>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="font-sans font-medium text-base md:text-lg">{project.year}</span>
                      
                      {project.websiteLink && (
                        <a 
                          href={project.websiteLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 shadow-lg" 
                          style={{ backgroundColor: project.accentColor, color: '#000000' }}
                        >
                          {isRu ? "Посетить сайт" : "Visit Website"}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="h-px w-full bg-black/10 dark:bg-white/10" />

                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-50">
                      {isRu ? "Стек / Теги" : "Stack / Tags"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {((isRu ? project.tagsRu : project.tagsEn) || []).map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-md text-xs font-semibold border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col mb-10">
                <div className="h-px w-full bg-black/10 dark:bg-white/10 mb-2" />
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  
                  return (
                    <div
                      key={section.id}
                      className="border-b border-black/10 dark:border-white/10 overflow-hidden"
                    >
                      <button
                        className="w-full text-left py-5 sm:py-6 md:py-8 group outline-none flex justify-between items-center gap-4 min-w-0"
                        aria-expanded={isActive}
                        aria-controls={`section-${project.id}-${section.id}`}
                        onClick={() => setActiveSection(isActive ? null : section.id)}
                      >
                        <h2 
                          className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter transition-colors duration-300 break-words ${isActive ? "text-brutal-black dark:text-white" : "text-brutal-black/70 dark:text-white/70 group-hover:text-brutal-black dark:group-hover:text-white"}`}
                        >
                          {section.title}
                        </h2>
                        <motion.div
                          animate={{ rotate: isActive ? 45 : 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border transition-all duration-300"
                          style={{
                            color: isActive ? project.accentColor : "currentColor",
                            borderColor: isActive ? project.accentColor : "var(--tw-border-opacity)",
                            backgroundColor: isActive ? `${project.accentColor}15` : "transparent"
                          }}
                        >
                          <svg className={`w-5 h-5 md:w-6 md:h-6 ${isActive ? '' : 'opacity-40 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                          </svg>
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            id={`section-${project.id}-${section.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="pb-8 md:pb-12 w-full">
                              {section.id === "visual" && project.visualImages && project.visualImages.length > 0 ? (
                                <div className="flex flex-col gap-8 max-w-full">
                                  <p className="text-sm md:text-base lg:text-lg font-sans font-medium opacity-80 leading-relaxed whitespace-pre-wrap max-w-3xl">
                                    {section.content}
                                  </p>
                                  <ProjectVisuals images={project.visualImages} title={isRu ? project.titleRu : project.titleEn} isRu={isRu} />
                                </div>
                              ) : (
                                <div className="max-w-3xl">
                                  <p className="text-sm md:text-base lg:text-lg font-sans font-medium opacity-80 leading-relaxed whitespace-pre-wrap">
                                    {section.content}
                                  </p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
    </dialog>,
    document.body
  );
};

export default function Gallery() {
  const { language } = useLanguage();
  const isRu = language === "ru";
  const tSection = translations[language].sections.cases;
  const [selectedProject, setSelectedProject] = useState<CaseItem | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const closeProject = useCallback(() => setSelectedProject(null), []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 40, 
      scale: shouldReduceMotion ? 1 : 0.98
    },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 1.0, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: shouldReduceMotion ? 1 : 1.08 
    },
    show: { 
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 16 
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.0,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      id="works"
      className="relative w-full z-10 flex flex-col pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 scroll-mt-20"
    >
      <div className="absolute inset-0 bg-black/[0.02] dark:bg-black/[0.15] border-t border-black/[0.02] dark:border-white/[0.02] pointer-events-none -z-10" />

      <div className="px-6 md:px-10 max-w-[1240px] w-full mx-auto mb-10 md:mb-16 shrink-0 relative z-20">
        <SectionHeader
          label={tSection.label}
          title={tSection.title}
          subtitle={isRu ? "Работы, а не визуальный шум" : "Work, not visual noise"}
        />
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-6 md:px-10 z-20 relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
        >
          {cases.map((project, index) => (
             <motion.article
               key={project.id}
               variants={itemVariants}
               className="case-card group cursor-pointer relative rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col aspect-[4/5] sm:aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] min-h-[420px] transition-all duration-700 w-full min-w-0 bg-[#050505]"
             >
                <button type="button" className="absolute inset-0 z-30 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400" aria-haspopup="dialog" aria-label={isRu ? `Открыть проект ${project.titleRu}` : `Open project ${project.titleEn}`} onClick={() => setSelectedProject(project)} />
                {project.websiteLink && <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="absolute left-5 right-5 top-5 z-40 flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4" style={{ backgroundColor: project.accentColor, color: '#050505' }} aria-label={isRu ? `Открыть сайт ${project.titleRu}` : `Visit ${project.titleEn} website`}>{isRu ? "Открыть сайт" : "Visit website"}<span aria-hidden="true">↗</span></a>}
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/60 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-[#050505] opacity-20 md:opacity-35 group-hover:opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none" />
                  
                  {project.imageSrc ? (
                    <motion.div variants={imageVariants} className="w-full h-full">
                      <CaseImage 
                        src={project.imageSrc} 
                        alt={isRu ? project.titleRu : project.titleEn} 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                      />
                    </motion.div>
                  ) : (
                    <motion.div variants={imageVariants} className="w-full h-full">
                      <div className="w-full h-full flex flex-col items-center justify-center opacity-30 relative transform scale-100 group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#080808]">
                         <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundColor: project.accentColor }} />
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10">
                  <div className="absolute inset-0 opacity-[0.15]" style={{ background: `radial-gradient(circle at bottom right, ${project.accentColor} 0%, transparent 60%)` }} />
                </div>
                
                <div className="absolute inset-0 rounded-[24px] md:rounded-[32px] border border-white/5 pointer-events-none z-20 group-hover:opacity-0 transition-opacity duration-700" />
                <div 
                  className="absolute inset-0 rounded-[24px] md:rounded-[32px] border-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-20"
                  style={{ borderColor: `${project.accentColor}90`, boxShadow: `0 0 24px -10px ${project.accentColor}80` }}
                />

                <motion.div variants={contentVariants} className="relative z-20 flex flex-col items-center justify-end h-full p-6 md:p-7 lg:p-8 overflow-hidden rounded-[24px] md:rounded-[32px] text-center pointer-events-none">
                  <div className="w-full flex flex-col items-center mt-auto text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] min-w-0">
                    <div className="mb-3 sm:mb-4 flex flex-wrap justify-center gap-1.5 sm:gap-2">
                       {((isRu ? project.tagsRu : project.tagsEn) || []).slice(0, 3).map(tag => (
                         <span key={tag} className="px-2.5 py-1 rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-lg whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-[150px]">
                           {tag}
                         </span>
                       ))}
                    </div>
                    <h3 className="font-display font-black text-xl md:text-[clamp(18px,1.5vw,22px)] lg:text-[clamp(20px,2vw,24px)] uppercase tracking-tight md:tracking-tighter leading-[1] mb-3 md:mb-4 drop-shadow-md px-2 w-full break-words">
                      {isRu ? project.titleRu : project.titleEn}
                    </h3>
                    
                    <div className="overflow-hidden w-full max-w-[95%]">
                      <div className="flex flex-col items-center transform translate-y-0 opacity-100 transition-all duration-500 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <p className="font-sans text-xs md:text-[13px] opacity-80 font-medium leading-relaxed line-clamp-2 w-full mb-5 lg:mb-6">
                          {isRu ? project.previewRu : project.previewEn}
                        </p>
                        <div 
                          className="pointer-events-auto px-5 py-2.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
                          style={{ backgroundColor: project.accentColor, color: '#000000' }}
                        >
                          {isRu ? "Подробнее" : "Learn More"}
                          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
          ))}
        </motion.div>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            language={language}
            onClose={closeProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
