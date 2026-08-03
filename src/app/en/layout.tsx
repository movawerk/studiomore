import type { ReactNode } from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { LocaleDocument } from "@/components/LocaleDocument";

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/logo-tab.png", type: "image/png" }],
    shortcut: [{ url: "/logo-tab.png", type: "image/png" }],
    apple: [{ url: "/logo-tab.png", type: "image/png" }],
  },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <LocaleDocument locale="en">{children}</LocaleDocument>;
}
