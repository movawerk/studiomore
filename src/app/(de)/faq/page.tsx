import { FaqPage } from "@/components/pages/FaqPage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("faq", "de");
export default function Page() { return <FaqPage locale="de" />; }
