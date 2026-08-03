import { LegalPage } from "@/components/pages/LegalPage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("imprint", "de");
export default function Page() { return <LegalPage locale="de" kind="imprint" />; }
