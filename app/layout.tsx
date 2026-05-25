import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { GoogleAnalytics } from "@next/third-parties/google";

const areasStr = siteConfig.areas.join("·");

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${areasStr} 에어컨 청소 전문`,
  description: `${areasStr} 에어컨 분해 청소 전문업체 ${siteConfig.name}. 벽걸이 80,000원~, 스탠드 120,000원~. 친환경 세정제, 14일 AS 보증, 당일 예약 가능. 사업자등록 업체.`,
  keywords: [
    "에어컨청소", "에어컨 분해청소", "에어컨 곰팡이",
    ...siteConfig.areas.map((a) => `${a} 에어컨청소`),
    "벽걸이 에어컨청소", "스탠드 에어컨청소", "천장형 에어컨청소",
    "에어컨 냄새제거", siteConfig.name,
  ],
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${siteConfig.name} | ${areasStr} 에어컨 청소 전문`,
    description: `${areasStr} 에어컨 분해 청소. 벽걸이 80,000원~. 14일 AS 보증. 당일 예약 가능.`,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} | ${areasStr} 에어컨 청소 전문`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${areasStr} 에어컨 청소 전문`,
    description: `${areasStr} 에어컨 분해 청소. 벽걸이 80,000원~. 14일 AS 보증. 당일 예약 가능.`,
    images: [`${siteConfig.url}/opengraph-image`],
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
    addressRegion: "서울특별시",
    addressCountry: "KR",
  },
  areaServed: siteConfig.areas.map((area) => ({ "@type": "Place", name: area })),
  priceRange: "₩80,000~",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: siteConfig.hours.open,
    closes: siteConfig.hours.close,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "에어컨 청소 서비스",
    itemListElement: siteConfig.services.map((s) => ({
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
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
      {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId="G-2P1VY2YC6J" />}
    </html>
  );
}
