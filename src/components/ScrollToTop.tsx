import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 md:p-4 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-lg transition-all duration-300 transform outline-none flex items-center justify-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      } hover:scale-110 active:scale-95`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;
