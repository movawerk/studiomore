"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchLocalePath, type Locale } from "@/lib/i18n";
import { ui, t } from "@/lib/dictionary";

export function LanguageSwitcher({
  locale,
  className = "",
  inverted = false,
}: {
  locale: Locale;
  className?: string;
  inverted?: boolean;
}) {
  const pathname = usePathname() ?? "/";

  return (
    <nav
      aria-label={t(ui.languageSwitch, locale)}
      className={`language-switcher flex items-stretch border text-ink ${
        inverted ? "border-warm-white/45 text-warm-white" : "border-ink/25"
      } ${className}`}
    >
      {(["de", "en"] as const).map((target) => {
        const active = target === locale;
        return (
          active ? (
            <span
              key={target}
              aria-current="page"
              lang={target}
              className="language-switcher__option bg-intervention text-ink"
            >
              <span className="text-[0.625rem] font-semibold tracking-[0.16em]">{target.toUpperCase()}</span>
              <span className="mt-1 text-[0.4375rem] tracking-[0.12em] opacity-55" aria-hidden="true">
                {target === "de" ? "01" : "02"}
              </span>
            </span>
          ) : (
            <Link
              key={target}
              href={switchLocalePath(pathname, target)}
              lang={target}
              hrefLang={target}
              className={`language-switcher__option transition-colors hover:bg-intervention hover:text-ink ${
                target === "en" ? "border-l border-current/25" : ""
              } ${inverted ? "text-warm-white/75" : "text-ink/65"}`}
            >
              <span className="text-[0.625rem] font-semibold tracking-[0.16em]">{target.toUpperCase()}</span>
              <span className="mt-1 text-[0.4375rem] tracking-[0.12em] opacity-55" aria-hidden="true">
                {target === "de" ? "01" : "02"}
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
