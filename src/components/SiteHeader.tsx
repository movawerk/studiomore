"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { href, type Locale, type RouteKey } from "@/lib/i18n";
import { nav, ui, t } from "@/lib/dictionary";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const NAV_ITEMS: { key: RouteKey; label: { de: string; en: string } }[] = [
  { key: "projects", label: nav.projects },
  { key: "services", label: nav.services },
  { key: "studio", label: nav.studio },
  { key: "research", label: nav.research },
  { key: "news", label: nav.news },
  { key: "contact", label: nav.contact },
];

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Focus management + escape handling for the mobile menu.
  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    if (!menu) return;
    const focusables = menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    focusables[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/" || pathname === "/en";
  const solid = scrolled || !isHome || open;
  const onHero = !solid;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-ink/10 bg-paper" : "bg-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href={href("home", locale)}
          onClick={() => {
            setOpen(false);
            if (isHome) {
              window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
            }
          }}
          className={`inline-flex flex-col items-center font-display text-[1.55rem] leading-[0.72] tracking-tight transition-colors sm:text-[1.7rem] lg:text-[1.8rem] ${onHero ? "text-warm-white" : "text-ink"}`}
          aria-label={`studio more – ${t(ui.home, locale)}`}
        >
          <span>studio</span>
          <span className={onHero ? "text-intervention" : "text-intervention-ink"}>more</span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label={t(ui.mainNavigation, locale)} className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={href(item.key, locale)}
              className={`text-sm transition-colors hover:text-intervention ${onHero ? "text-warm-white/85" : "text-ink/80"}`}
            >
              {t(item.label, locale)}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} inverted={onHero} />
          <Link
            href={href("contact", locale)}
            className={`border px-4 py-2 text-sm font-medium transition-colors hover:border-intervention hover:bg-intervention hover:text-ink ${
              onHero ? "border-warm-white/70 text-warm-white" : "border-ink text-ink"
            }`}
          >
            {t(nav.cta, locale)}
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          ref={triggerRef}
          type="button"
          className={`flex h-11 w-11 items-center justify-center transition-colors lg:hidden ${onHero ? "text-warm-white" : "text-ink"}`}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? t(ui.closeMenu, locale) : t(ui.openMenu, locale)}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile full-screen menu */}
      {open && (
        <div
          ref={menuRef}
          id={menuId}
          className="fixed inset-x-0 bottom-0 top-16 z-40 flex h-[calc(100svh-4rem)] flex-col overflow-hidden bg-paper px-6 pb-[clamp(1rem,3svh,2.5rem)] pt-[clamp(0.75rem,2svh,1.5rem)] lg:hidden"
        >
          <nav aria-label={t(ui.mainNavigation, locale)} className="flex min-h-0 flex-1 flex-col justify-center">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.key}
                href={href(item.key, locale)}
                onClick={() => setOpen(false)}
                className="flex min-h-0 max-h-[4.75rem] flex-1 items-center border-b border-ink/10 py-[clamp(0.45rem,1.5svh,1rem)] font-display text-[clamp(1.65rem,4.2svh,3rem)] leading-none text-ink transition-colors hover:text-intervention"
              >
                <span className="meta-label mr-3">{String(i + 1).padStart(2, "0")}</span>
                {t(item.label, locale)}
              </Link>
            ))}
          </nav>
          <div className="mt-[clamp(1rem,2.5svh,2rem)] flex shrink-0 flex-wrap items-end gap-4">
            <Link
              href={href("contact", locale)}
              onClick={() => setOpen(false)}
              className="inline-flex min-h-15 w-fit items-center border border-ink bg-intervention px-6 py-3 font-medium text-ink"
            >
              {t(nav.cta, locale)}
            </Link>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      )}
    </header>
  );
}
