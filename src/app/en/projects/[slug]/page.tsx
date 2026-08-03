import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/pages/ProjectDetailPage";
import { getProject, publishedProjects } from "@/data/projects";
import { projectTitle } from "@/components/ProjectCard";
import { buildMetadata } from "@/lib/metadata";
import { projectHref } from "@/lib/i18n";
import { t } from "@/lib/dictionary";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return publishedProjects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project?.published) return {};
  return buildMetadata({
    title: projectTitle(project, "en"),
    description: project.summary ? t(project.summary, "en") : `${projectTitle(project, "en")} by studio more.`,
    locale: "en",
    path: projectHref(project.slug, "en"),
    alternatePath: projectHref(project.slug, "de"),
    ogImage: project.heroImage?.src,
  });
}
export default async function Page({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project?.published) notFound();
  return <ProjectDetailPage project={project} locale="en" />;
}
