import { LegalPage } from "@/components/pages/LegalPage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("privacy", "en");
export default function Page() { return <LegalPage locale="en" kind="privacy" />; }
