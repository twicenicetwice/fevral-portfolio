import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Expand, X, ZoomIn, ZoomOut } from "lucide-react";
import CaseImage from "./CaseImage";

export default function ProjectVisuals({ images, title, isRu }: { images: string[]; title: string; isRu: boolean }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const open = selected !== null;

  useEffect(() => {
    if (!open) return;
    const element = dialog.current!;
    const trigger = document.activeElement as HTMLElement | null;
    element.showModal();
    return () => { element.close(); trigger?.focus({ preventScroll: true }); };
  }, [open]);

  useEffect(() => {
    setZoomed(false);
    viewport.current?.scrollTo(0, 0);
  }, [selected]);

  const move = (step: number) => setSelected(current => current === null ? null : (current + step + images.length) % images.length);
  const label = (index: number) => `${title} — ${isRu ? "макет" : "design"} ${index + 1}`;

  return <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {images.map((src, index) => <button type="button" key={src} onClick={() => setSelected(index)} className="visual-preview group text-left rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/[.03] dark:bg-white/[.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400">
        <div className="aspect-[18/13] overflow-hidden relative bg-neutral-950">
          <CaseImage src={src.replace(/\.webp$/, "-preview.webp")} alt={label(index)} width={900} height={650} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]" />
          <span className="absolute right-4 top-4 rounded-full p-2.5 border border-white/20 bg-black/60 text-white backdrop-blur-md"><Expand size={16} aria-hidden="true" /></span>
        </div>
        <span className="flex items-center justify-between gap-3 px-5 py-4 text-xs font-semibold">
          <span className="opacity-60">{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
          <span>{isRu ? "Рассмотреть макет" : "Explore design"} <span aria-hidden="true">↗</span></span>
        </span>
      </button>)}
    </div>
    {open && createPortal(<dialog ref={dialog} className="visual-viewer" aria-label={isRu ? `Просмотр: ${title}` : `Design viewer: ${title}`} onCancel={event => { event.preventDefault(); event.stopPropagation(); setSelected(null); }} onKeyDown={event => {
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    }}>
      <div className="flex h-full flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
          <div className="min-w-0"><p className="truncate text-sm font-semibold">{title}</p><p className="mt-1 text-xs text-white/50" aria-live="polite">{selected + 1} / {images.length}</p></div>
          <div className="flex items-center gap-2">
            <button type="button" className="viewer-control" aria-label={zoomed ? (isRu ? "Уменьшить" : "Zoom out") : (isRu ? "Увеличить" : "Zoom in")} aria-pressed={zoomed} onClick={() => setZoomed(value => !value)}>{zoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}</button>
            {images.length > 1 && <><button type="button" className="viewer-control" aria-label={isRu ? "Предыдущий макет" : "Previous design"} onClick={() => move(-1)}><ArrowLeft size={20} /></button><button type="button" className="viewer-control" aria-label={isRu ? "Следующий макет" : "Next design"} onClick={() => move(1)}><ArrowRight size={20} /></button></>}
            <button type="button" autoFocus className="viewer-control" aria-label={isRu ? "Закрыть просмотр" : "Close viewer"} onClick={() => setSelected(null)}><X size={20} /></button>
          </div>
        </header>
        <div ref={viewport} className="min-h-0 flex-1 overflow-auto overscroll-contain p-3 sm:p-8" data-lenis-prevent="true">
          <CaseImage key={images[selected]} src={images[selected]} alt={label(selected)} loading="eager" className="block h-auto mx-auto rounded-lg shadow-2xl" style={{ width: zoomed ? "max(100%, 1600px)" : "min(100%, 1000px)", maxWidth: "none" }} />
        </div>
      </div>
    </dialog>, document.body)}
  </>;
}
