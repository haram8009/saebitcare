import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { GoogleAnalytics } from "@next/third-parties/google";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
  weight: "45 920",
});

const areasStr = siteConfig.areas.join("·");
const wallPrice = (siteConfig.services[0].price / 10000).toFixed(0);
const standPrice = (siteConfig.services[1].price / 10000).toFixed(0);
const shortDesc = `${areasStr} 에어컨 분해 청소. 벽걸이 ${wallPrice}만원~. ${siteConfig.warrantyDays}일 AS 보증. ${siteConfig.features[1]}.`;

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${areasStr} 에어컨 청소 전문`,
  description: `${areasStr} 에어컨 분해 청소 전문업체 ${siteConfig.name}. 벽걸이 ${wallPrice}만원~, 스탠드 ${standPrice}만원~. ${siteConfig.features.join(", ")}. ${siteConfig.warrantyDays}일 AS 보증.`,
  keywords: [
    ...siteConfig.seoKeywords,
    ...siteConfig.areas.map((a) => `${a} 에어컨청소`),
    siteConfig.name,
  ],
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${siteConfig.name} | ${areasStr} 에어컨 청소 전문`,
    description: shortDesc,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ko_KR",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${areasStr} 에어컨 청소 전문`,
    description: shortDesc,
    images: ["/opengraph-image"],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: `${areasStr} 에어컨 분해 청소 전문업체`,
  telephone: siteConfig.phone,
  url: siteConfig.url,
  email: siteConfig.email,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/logo-symbol.svg`,
    width: 64,
    height: 64,
  },
  image: `${siteConfig.url}/logo-symbol.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressRegion: "경기도",
    addressLocality: "고양시 덕양구",
    addressCountry: "KR",
  },
  areaServed: siteConfig.areas.map((area) => ({ "@type": "Place", name: area })),
  priceRange: `₩${siteConfig.services[0].price.toLocaleString()}~`,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: siteConfig.hours.open,
    closes: siteConfig.hours.close,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "에어컨 청소 서비스",
    itemListElement: siteConfig.services
      .filter((s) => s.price !== null)
      .map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.koreanName },
        price: String(s.price),
        priceCurrency: "KRW",
      })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`h-full antialiased ${pretendard.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
      {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={siteConfig.gaId} />}
    </html>
  );
}
