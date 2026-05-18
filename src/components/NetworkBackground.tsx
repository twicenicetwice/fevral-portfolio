import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); // optimize
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animationFrameId: number;
    let isVisible = true;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)";
        ctx.fill();
      }
    }

    const init = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;

      const isMobile = width < 768;
      const particleCount = Math.min(Math.floor((width * height) / (isMobile ? 20000 : 10000)), isMobile ? 40 : 100);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(width, height));
      }
    };

    let isDark = document.documentElement.classList.contains("dark");
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          isDark = document.documentElement.classList.contains("dark");
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    // Ensure we don't animate when not visible
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible = true;
          animate();
        } else {
          isVisible = false;
        }
      },
      { threshold: 0 }
    );
    if (containerRef.current) {
      intersectionObserver.observe(containerRef.current);
    }

    const animate = () => {
      if (!ctx || !canvas || !isVisible) return;

      // Draw background to replace alpha: false clearing
      ctx.fillStyle = isDark ? "#050505" : "#f2f2f2";
      ctx.fillRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        particles.forEach((p) => p.update(width, height));
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(ctx, isDark);
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = isDark
              ? `rgba(255, 255, 255, ${opacity * 0.3})`
              : `rgba(0, 0, 0, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    if (isVisible) animate();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(init, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>
    </div>
  );
}
