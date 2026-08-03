import localFont from "next/font/local";

export const geist = localFont({
  src: "../app/fonts/geist-latin.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-geist-sans",
});

export const newsreader = localFont({
  src: "../app/fonts/newsreader-variable.ttf",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-newsreader",
});
