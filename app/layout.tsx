import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono, Noto_Serif_SC } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jingtangma.com";
const SITE_TITLE = "Jingtang Ma (马敬唐) · Computer Vision Engineer at AWS · Arthur";
const SITE_DESCRIPTION =
  "Jingtang Ma (马敬唐 · Arthur) — Software Development Engineer at Amazon Web Services (AWS) on Just Walk Out and Amazon Go. Computer vision, deep learning, brain–computer interfaces, and a photographer. UIUC Master of Computer Science · UMKC B.S. Summa Cum Laude. Personal portfolio, research, and photography.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Jingtang Ma",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Project Arthur",
  authors: [{ name: "Jingtang Ma", url: SITE_URL }],
  creator: "Jingtang Ma",
  publisher: "Jingtang Ma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Project Arthur · Jingtang Ma",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    firstName: "Jingtang",
    lastName: "Ma",
    username: "arthurmjt",
    images: [
      {
        url: "/media/me.jpg",
        alt: "Jingtang (Arthur) Ma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/media/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jingtang Ma",
  alternateName: ["马敬唐", "Arthur", "Jingtang Arthur Ma"],
  givenName: "Jingtang",
  familyName: "Ma",
  jobTitle: "Software Development Engineer · Computer Vision",
  worksFor: {
    "@type": "Organization",
    name: "Amazon Web Services",
    url: "https://aws.amazon.com/",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Illinois Urbana-Champaign",
      url: "https://illinois.edu/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Missouri–Kansas City",
      url: "https://www.umkc.edu/",
    },
  ],
  knowsAbout: [
    "Computer Vision",
    "Deep Learning",
    "Machine Learning",
    "Artificial General Intelligence",
    "Brain–Computer Interface",
    "Hyperspectral Imaging",
    "Software Engineering",
    "Space Exploration",
  ],
  knowsLanguage: ["en", "zh-Hans"],
  nationality: { "@type": "Country", name: "China" },
  homeLocation: { "@type": "Place", name: "Seattle, WA, USA" },
  image: `${SITE_URL}/media/me.jpg`,
  url: SITE_URL,
  sameAs: [
    "https://github.com/arthurmjt",
    "https://www.linkedin.com/in/jingtang-ma-259673174",
    "https://www.instagram.com/arthurmjt",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Project Arthur",
  alternateName: ["Jingtang Ma · Personal Website", "马敬唐 · 个人主页"],
  url: SITE_URL,
  inLanguage: ["en", "zh-Hans"],
  author: { "@type": "Person", name: "Jingtang Ma", url: SITE_URL },
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
