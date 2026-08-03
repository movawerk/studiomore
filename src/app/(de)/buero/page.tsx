import { StudioPage } from "@/components/pages/StudioPage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("studio", "de");
export default function Page() { return <StudioPage locale="de" />; }
