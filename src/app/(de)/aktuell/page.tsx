import { NewsPage } from "@/components/pages/NewsPage";
import { staticPageMetadata } from "@/lib/static-metadata";
export const metadata = staticPageMetadata("news", "de");
export default function Page() { return <NewsPage locale="de" />; }
