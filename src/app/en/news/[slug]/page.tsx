import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsDetailPage } from "@/components/pages/NewsDetailPage";
import { getNewsItem, publishedNews } from "@/data/news";
import { buildMetadata } from "@/lib/metadata";
import { newsHref } from "@/lib/i18n";
import { t } from "@/lib/dictionary";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return publishedNews.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getNewsItem((await params).slug);
  if (!item?.published) return {};
  return buildMetadata({ title: t(item.title, "en"), description: t(item.intro, "en"), locale: "en", path: newsHref(item.slug, "en"), alternatePath: newsHref(item.slug, "de"), ogImage: item.image?.src });
}
export default async function Page({ params }: Props) {
  const item = getNewsItem((await params).slug);
  if (!item?.published) notFound();
  return <NewsDetailPage item={item} locale="en" />;
}
