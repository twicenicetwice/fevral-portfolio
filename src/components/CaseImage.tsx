import { useState, type ImgHTMLAttributes } from "react";
import metadata from "../lib/imageMetadata.json";

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string };

export default function CaseImage({ src, alt, className = "", ...props }: Props) {
  const [failed, setFailed] = useState(false);
  const size = (metadata as Record<string, { width: number; height: number }>)[src];
  if (failed) {
    return <span role="img" aria-label={alt} className={`flex items-center justify-center bg-neutral-900 text-neutral-400 p-6 text-center text-sm ${className}`}>{alt}</span>;
  }
  return <img src={src} alt={alt} width={size?.width} height={size?.height} loading="lazy" decoding="async" {...props} onError={() => setFailed(true)} className={className} />;
}
