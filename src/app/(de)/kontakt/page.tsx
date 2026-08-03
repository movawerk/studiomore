import { ContactPage } from "@/components/pages/ContactPage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("contact", "de");
export default function Page() { return <ContactPage locale="de" />; }
