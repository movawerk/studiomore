import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";
import { ui, t } from "@/lib/dictionary";

export function NotFoundPage({ locale }: { locale: Locale }) {
  return (
    <div className="mx-auto flex min-h-[70svh] max-w-7xl items-center px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <div className="grid w-full gap-8 lg:grid-cols-12">
        <p className="font-display text-7xl text-intervention lg:col-span-3">404</p>
        <div className="lg:col-span-7">
          <h1 className="font-display text-4xl text-ink md:text-5xl">{t(ui.notFoundTitle, locale)}</h1>
          <p className="mt-4 max-w-xl text-ink/70">{t(ui.notFoundText, locale)}</p>
          <Link href={href("home", locale)} className="mt-8 inline-block border border-ink bg-ink px-5 py-3 text-sm font-medium text-warm-white hover:border-intervention hover:bg-intervention hover:text-ink">
            {t(ui.backHome, locale)}
          </Link>
        </div>
      </div>
    </div>
  );
}
