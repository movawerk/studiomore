import { href, type Locale } from "@/lib/i18n";
import { nav, ui, t } from "@/lib/dictionary";
import { faqGroups } from "@/data/faq";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";
import { FAQGroup } from "@/components/FAQGroup";
import { SITE_URL } from "@/lib/site";

export function FaqPage({ locale }: { locale: Locale }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Question",
        name: t(item.question, locale),
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer[locale].join(" "),
        },
      })),
    ),
    url: `${SITE_URL}${href("faq", locale)}`,
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Breadcrumbs
          locale={locale}
          items={[
            { label: t(ui.home, locale), href: href("home", locale) },
            { label: t(nav.faq, locale) },
          ]}
        />
        <h1 className="font-display mt-6 text-4xl text-ink md:text-5xl">
          {locale === "de" ? "Häufige Fragen" : "Frequently asked questions"}
        </h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          {locale === "de"
            ? "Antworten auf die häufigsten Fragen zu Ablauf, Umbau, Kosten, Energie und Genehmigung. Ihre Frage ist nicht dabei? Sprechen Sie uns an – das Erstgespräch ist kostenlos."
            : "Answers to the most common questions on process, conversion, costs, energy and permits. Can't find your question? Get in touch – the initial consultation is free."}
        </p>

        <div className="mt-14 space-y-16 lg:max-w-4xl">
          {faqGroups.map((group) => (
            <FAQGroup
              key={group.id}
              title={t(group.title, locale)}
              items={group.items.map((item) => ({
                id: item.id,
                question: t(item.question, locale),
                answer: item.answer[locale],
              }))}
            />
          ))}
        </div>
      </div>
      <ContactCta locale={locale} />
    </>
  );
}
