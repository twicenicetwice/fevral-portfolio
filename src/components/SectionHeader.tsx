import React from "react";
import FlipText from "./FlipText";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16 flex flex-col md:flex-row items-baseline md:items-end justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6">
      <div className="flex flex-col gap-2">
        <span className="font-display font-medium text-xs md:text-sm tracking-[0.2em] uppercase opacity-50 dark:opacity-40">
          <FlipText delay={200}>{label}</FlipText>
        </span>
        <h2 className="font-display text-[clamp(28px,7vw,72px)] font-black uppercase tracking-tighter text-brutal-black dark:text-white leading-[1.1] pt-4 pb-2">
          <FlipText delay={200}>{title}</FlipText>
        </h2>
      </div>
      {subtitle && (
        <p className="font-sans text-sm md:text-base font-medium opacity-60 max-w-sm md:text-right mt-2 md:mt-0">
          {subtitle}
        </p>
      )}
    </div>
  );
}
