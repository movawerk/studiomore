import { HomePage } from "@/components/pages/HomePage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("home", "en");
export default function Page() { return <HomePage locale="en" />; }
