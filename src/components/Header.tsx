import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/i18n';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].header;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsMobile(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
    } else {
      // @ts-ignore - Fallback for older browsers
      mediaQuery.addListener(handler);
    }
    
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
      } else {
        // @ts-ignore - Fallback for older browsers
        mediaQuery.removeListener(handler);
      }
    };
  }, []);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      root.classList.add('dark');
    } else {
      setIsDark(false);
      root.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-600 dark:bg-cyan-500 origin-left z-[120] pointer-events-none mix-blend-difference"
        style={{ scaleX }}
      />
      <header className="fixed top-0 inset-x-0 h-20 px-6 md:px-12 flex items-center justify-between pointer-events-auto transition-colors duration-700 bg-white dark:bg-[#050505] border-b border-black/10 dark:border-white/10 shadow-sm z-[110]">
        <a href="#hero" onClick={closeMenu} className="font-display font-black text-xl md:text-2xl tracking-tighter uppercase select-none cursor-pointer text-brutal-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 group z-[70]">
          FEVRAL
        </a>
        
        <nav className="flex items-center gap-3 md:gap-6 z-[70]">
          <div className="hidden lg:flex gap-4 xl:gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold opacity-70 text-brutal-black dark:text-white transition-colors duration-700 whitespace-nowrap">
            <a href="#bento" className="relative group hover:opacity-100 transition-opacity pb-1">
              {t.method}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#works" className="relative group hover:opacity-100 transition-opacity pb-1">
              {t.cases}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="relative group hover:opacity-100 transition-opacity pb-1">
              {t.services}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#capabilities" className="relative group hover:opacity-100 transition-opacity pb-1">
              {t.capabilities}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative group hover:opacity-100 transition-opacity pb-1">
              {t.contact}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-2 border-l border-black/10 dark:border-white/10 pl-6 ml-2 transition-colors duration-700">
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-brutal-black dark:text-white mr-4">
              <button
                onClick={() => setLanguage('ru')}
                className={`transition-colors duration-300 hover:opacity-100 ${language === 'ru' ? 'opacity-100 text-cyan-600 dark:text-cyan-400' : 'opacity-40'}`}
              >
                RU
              </button>
              <span className="opacity-20 font-normal pointer-events-none select-none">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors duration-300 hover:opacity-100 ${language === 'en' ? 'opacity-100 text-cyan-600 dark:text-cyan-400' : 'opacity-40'}`}
              >
                EN
              </button>
            </div>
            
            <button
              onClick={toggleTheme}
              className="w-14 md:w-16 h-7 md:h-8 bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center px-1 relative cursor-pointer border border-black/10 dark:border-white/20 transition-all hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] group shrink-0"
              aria-label="Toggle Theme"
            >
              <div className="absolute inset-0 flex justify-between items-center px-[4px] md:px-[6px] pointer-events-none text-black/30 dark:text-white/30">
                 <Sun className="w-3 md:w-3.5 h-3 md:h-3.5 group-hover:text-amber-500/80 transition-colors duration-300" />
                 <Moon className="w-3 md:w-3.5 h-3 md:h-3.5 group-hover:text-cyan-400/80 transition-colors duration-300" />
              </div>
              <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] pointer-events-none" />
              <motion.div 
                 className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_rgba(34,211,238,0.3)] relative z-10 transition-colors duration-500 overflow-hidden ${isDark ? 'bg-[#111] border border-cyan-500/50' : 'bg-white border border-black/10'}`} 
                 layout 
                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
                 animate={{ x: isDark ? (isMobile ? 24 : 32) : 0 }} 
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    scale: isDark ? 1 : 0, 
                    rotate: isDark ? 0 : 90,
                    opacity: isDark ? 1 : 0
                  }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="absolute"
                >
                  <Moon strokeWidth={2.5} className="w-3.5 h-3.5 text-cyan-400" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ 
                    scale: isDark ? 0 : 1, 
                    rotate: isDark ? -90 : 0,
                    opacity: isDark ? 0 : 1
                  }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="absolute"
                >
                  <Sun strokeWidth={2.5} className="w-3.5 h-3.5 text-amber-500" />
                </motion.div>
              </motion.div>
            </button>
          </div>
          
          <button 
            className="lg:hidden p-2 text-brutal-black dark:text-white ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 min-h-[100dvh] pt-20 bg-white dark:bg-[#050505] z-[100] pointer-events-auto lg:hidden flex flex-col items-center overflow-hidden"
          >
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
              <div className="absolute -top-[20vh] w-[150vw] left-[-25vw] h-[100vh] opacity-30 dark:opacity-20 animate-spin-slow origin-center"
                    style={{
                      background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, var(--tw-colors-cyan-500) 90deg, transparent 180deg)'
                    }}
              />
            </div>

            <div className="relative z-10 flex flex-col gap-10 text-[18px] uppercase tracking-[0.2em] font-bold text-brutal-black dark:text-white text-center flex-1 justify-center">
              <a href="#bento" onClick={closeMenu} className="py-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {t.method}
              </a>
              <a href="#works" onClick={closeMenu} className="py-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {t.cases}
              </a>
              <a href="#services" onClick={closeMenu} className="py-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {t.services}
              </a>
              <a href="#capabilities" onClick={closeMenu} className="py-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {t.capabilities}
              </a>
              <a href="#contact" onClick={closeMenu} className="py-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {t.contact}
              </a>
            </div>

            <div className="relative z-10 w-full px-8 py-6 flex justify-center items-center gap-8 border-t border-black/10 dark:border-white/10 mt-auto">
              <div className="flex items-center gap-3 text-[13px] font-bold tracking-[0.2em] text-brutal-black dark:text-white">
                <button
                  onClick={() => setLanguage('ru')}
                  className={`transition-colors duration-300 hover:opacity-100 ${language === 'ru' ? 'opacity-100 text-cyan-600 dark:text-cyan-400' : 'opacity-40'}`}
                >
                  RU
                </button>
                <span className="opacity-20 font-normal pointer-events-none select-none">/</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`transition-colors duration-300 hover:opacity-100 ${language === 'en' ? 'opacity-100 text-cyan-600 dark:text-cyan-400' : 'opacity-40'}`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="w-16 h-8 bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center px-1 relative cursor-pointer border border-black/10 dark:border-white/20 transition-all hover:border-cyan-500/50 dark:hover:border-cyan-400/50 group shrink-0"
                aria-label="Toggle Theme"
              >
                <div className="absolute inset-0 flex justify-between items-center px-[6px] pointer-events-none text-black/30 dark:text-white/30">
                   <Sun className="w-3.5 h-3.5 group-hover:text-amber-500/80 transition-colors duration-300" />
                   <Moon className="w-3.5 h-3.5 group-hover:text-cyan-400/80 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] pointer-events-none" />
                <motion.div 
                   className={`w-6 h-6 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_rgba(34,211,238,0.3)] relative z-10 transition-colors duration-500 overflow-hidden ${isDark ? 'bg-[#111] border border-cyan-500/50' : 'bg-white border border-black/10'}`} 
                   layout 
                   transition={{ type: "spring", stiffness: 400, damping: 25 }}
                   animate={{ x: isDark ? 32 : 0 }} 
                >
                  <motion.div
                    initial={false}
                    animate={{ 
                      scale: isDark ? 1 : 0, 
                      rotate: isDark ? 0 : 90,
                      opacity: isDark ? 1 : 0
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className="absolute"
                  >
                    <Moon strokeWidth={2.5} className="w-3.5 h-3.5 text-cyan-400" />
                  </motion.div>
                  <motion.div
                    initial={false}
                    animate={{ 
                      scale: isDark ? 0 : 1, 
                      rotate: isDark ? -90 : 0,
                      opacity: isDark ? 0 : 1
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className="absolute"
                  >
                    <Sun strokeWidth={2.5} className="w-3.5 h-3.5 text-amber-500" />
                  </motion.div>
                </motion.div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
