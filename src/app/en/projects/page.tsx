import { ProjectsPage } from "@/components/pages/ProjectsPage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("projects", "en");
export default function Page() { return <ProjectsPage locale="en" />; }
