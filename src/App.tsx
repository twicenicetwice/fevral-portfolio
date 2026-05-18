import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Capabilities from "./components/Capabilities";
import IntroSequence from "./components/IntroSequence";
import ScrollToTop from "./components/ScrollToTop";

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: any}> {
  public state: {
    hasError: boolean;
    error: any;
  };
  public props: {
    children: React.ReactNode;
  };
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.props = props;
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', background: '#bb0000', color: 'white', position: 'relative', zIndex: 9999 }}>
          <h1>React Error</h1>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error?.toString()}</pre>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: '1rem' }}>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault();
        lenis.scrollTo(anchor.hash, { offset: -100 });
      }
    };

    document.addEventListener("click", handleHashClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleHashClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-paper dark:bg-brutal-black text-brutal-black dark:text-paper selection:bg-brutal-black dark:selection:bg-neon-cyan selection:text-paper dark:selection:text-brutal-black font-sans relative transition-colors duration-700 ease-in-out">
      <IntroSequence onComplete={() => {}} />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-700">
        <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] min-w-[700px] min-h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.05)_0%,transparent_60%)]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] min-w-[600px] min-h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.04)_0%,transparent_60%)]" />
      </div>

      <Header />

      <ErrorBoundary>
        <main className="relative z-10 w-full">
          <Hero />
          <BentoGrid />
          <Gallery />
          <Services />
          <Capabilities />
          <Contact />
        </main>
      </ErrorBoundary>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
