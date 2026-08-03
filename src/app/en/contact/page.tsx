import { ContactPage } from "@/components/pages/ContactPage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("contact", "en");
export default function Page() { return <ContactPage locale="en" />; }
