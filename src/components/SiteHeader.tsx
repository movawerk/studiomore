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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href={href("home", locale)}
          className={`font-display text-xl tracking-tight transition-colors lg:text-2xl ${onHero ? "text-warm-white" : "text-ink"}`}
          aria-label={`studio more – ${t(ui.home, locale)}`}
        >
          studio<span className={onHero ? "text-intervention" : "text-intervention-ink"}>&nbsp;more</span>
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
          className="fixed inset-0 top-16 z-40 flex flex-col overflow-y-auto bg-paper px-6 pb-10 pt-6 lg:hidden"
        >
          <nav aria-label={t(ui.mainNavigation, locale)} className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.key}
                href={href(item.key, locale)}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-4 font-display text-3xl text-ink transition-colors hover:text-intervention"
              >
                <span className="meta-label mr-3">{String(i + 1).padStart(2, "0")}</span>
                {t(item.label, locale)}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-6">
            <Link
              href={href("contact", locale)}
              onClick={() => setOpen(false)}
              className="inline-flex w-fit border border-ink bg-intervention px-6 py-3 font-medium text-ink"
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
