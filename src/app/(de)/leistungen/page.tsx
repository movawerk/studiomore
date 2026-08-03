import { ServicesPage } from "@/components/pages/ServicesPage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("services", "de");
export default function Page() { return <ServicesPage locale="de" />; }
