import { ResearchPage } from "@/components/pages/ResearchPage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("research", "de");
export default function Page() { return <ResearchPage locale="de" />; }
