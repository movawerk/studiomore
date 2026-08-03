import { LegalPage } from "@/components/pages/LegalPage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("privacy", "de");
export default function Page() { return <LegalPage locale="de" kind="privacy" />; }
