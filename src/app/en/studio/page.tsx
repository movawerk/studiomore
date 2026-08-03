import { StudioPage } from "@/components/pages/StudioPage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("studio", "en");
export default function Page() { return <StudioPage locale="en" />; }
