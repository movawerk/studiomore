import { HomePage } from "@/components/pages/HomePage";
import { staticPageMetadata } from "@/lib/static-metadata";

export const metadata = staticPageMetadata("home", "de");

export default function Page() {
  return <HomePage locale="de" />;
}
