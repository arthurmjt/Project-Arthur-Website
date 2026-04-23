import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const notoSC = Noto_Serif_SC({
  variable: "--font-cn",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: false,
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PROJECT ARTHUR · Jingtang Ma",
  description: "Designer · Researcher · Photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} ${notoSC.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
