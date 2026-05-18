import { useState, useEffect } from "react";

export default function MascotVisual() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center pointer-events-none select-none pb-0 overflow-visible"
    >
      <div
        className="relative w-full max-w-[700px] lg:max-w-[850px] h-[clamp(500px,70vh,850px)] origin-center opacity-30 dark:opacity-20"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.25)_0%,transparent_60%)] pointer-events-none" />

        <div 
          className="relative z-10 w-full h-full"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, transparent 10%, black 40%, black 100%)',
            maskImage: 'linear-gradient(to top, transparent 0%, transparent 10%, black 40%, black 100%)',
            transform: 'translateZ(0)'
          }}
        >
          <img 
            src="/mascotte.svg" 
            alt="Mascot" 
            className="w-full h-full object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          />
        </div>

      </div>
    </div>
  );
}
