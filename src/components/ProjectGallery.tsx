"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { ui, t } from "@/lib/dictionary";
import { PlanLegend } from "@/components/PlanLegend";

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GalleryRowData = {
  layout: "full" | "pair";
  images: GalleryImage[];
  caption?: string;
  legend?: boolean;
};

/**
 * Editorial project gallery: full-width photographs, image pairs
 * (e.g. existing/conversion plans) and captions, with an optional
 * keyboard-accessible lightbox.
 */
export function ProjectGallery({ rows, locale }: { rows: GalleryRowData[]; locale: Locale }) {
  const flat = useMemo(() => rows.flatMap((r) => r.images), [rows]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    lastTrigger.current?.focus();
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % flat.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + flat.length) % flat.length));
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex, flat.length, close]);

  return (
    <div className="space-y-12 md:space-y-16">
      {rows.map((row, rowIndex) => {
        const startIndex = rows
          .slice(0, rowIndex)
          .reduce((sum, previousRow) => sum + previousRow.images.length, 0);
        return (
          <figure key={rowIndex}>
            <div className={row.layout === "pair" ? "grid gap-4 sm:grid-cols-2" : ""}>
              {row.images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={(e) => {
                    lastTrigger.current = e.currentTarget;
                    setOpenIndex(startIndex + i);
                  }}
                  className="group block w-full cursor-zoom-in bg-warm-white"
                  aria-label={`${t(ui.enlargeImage, locale)}: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes={row.layout === "pair" ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 1280px) 1120px, 100vw"}
                    className="w-full transition-opacity duration-300 group-hover:opacity-90"
                  />
                </button>
              ))}
            </div>
            {(row.caption || row.legend) && (
              <figcaption className="mt-3 flex flex-col gap-2 border-l-2 border-intervention pl-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                {row.caption && <span className="text-sm text-ink/70">{row.caption}</span>}
                {row.legend && <PlanLegend locale={locale} className="shrink-0" />}
              </figcaption>
            )}
          </figure>
        );
      })}

      {openIndex !== null && flat[openIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={flat[openIndex].alt}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 p-4 sm:p-8"
          onClick={close}
        >
          <div className="flex justify-end">
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label={t(ui.closeLightbox, locale)}
              className="flex h-11 w-11 items-center justify-center text-warm-white transition-colors hover:text-intervention"
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpenIndex((i) => (i === null ? i : (i - 1 + flat.length) % flat.length))}
              aria-label={t(ui.previousImage, locale)}
              className="absolute left-0 z-10 flex h-11 w-11 items-center justify-center text-warm-white transition-colors hover:text-intervention"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <Image
              src={flat[openIndex].src}
              alt={flat[openIndex].alt}
              width={flat[openIndex].width}
              height={flat[openIndex].height}
              sizes="100vw"
              className="max-h-full w-auto max-w-full object-contain"
            />
            <button
              type="button"
              onClick={() => setOpenIndex((i) => (i === null ? i : (i + 1) % flat.length))}
              aria-label={t(ui.nextImage, locale)}
              className="absolute right-0 z-10 flex h-11 w-11 items-center justify-center text-warm-white transition-colors hover:text-intervention"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
          <p className="mt-3 text-center text-sm text-warm-white/80">
            {flat[openIndex].alt}
            <span className="ml-3 text-warm-white/50">
              {openIndex + 1} / {flat.length}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
