import type { Metadata } from "next";
import "./globals.css";

// TODO: 실제 서비스 지역과 전화번호, 도메인으로 교체하세요
const PHONE = "010-0000-0000";
const SITE_URL = "https://saebitcare.kr";
const AREAS = "강남구·서초구·송파구·강동구·성동구·마포구";

export const metadata: Metadata = {
  title: `새빛케어 | ${AREAS} 에어컨 청소 전문`,
  description: `${AREAS} 에어컨 분해 청소 전문업체 새빛케어. 벽걸이 80,000원~, 스탠드 120,000원~. 친환경 세정제, 14일 AS 보증, 당일 예약 가능. 사업자등록 업체.`,
  keywords: [
    "에어컨청소", "에어컨 분해청소", "에어컨 곰팡이",
    "강남 에어컨청소", "서초 에어컨청소", "송파 에어컨청소",
    "벽걸이 에어컨청소", "스탠드 에어컨청소", "천장형 에어컨청소",
    "에어컨 냄새제거", "새빛케어",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `새빛케어 | ${AREAS} 에어컨 청소 전문`,
    description: `${AREAS} 에어컨 분해 청소. 벽걸이 80,000원~. 14일 AS 보증. 당일 예약 가능.`,
    url: SITE_URL,
    siteName: "새빛케어",
    locale: "ko_KR",
    type: "website",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "새빛케어",
  description: `${AREAS} 에어컨 분해 청소 전문업체`,
  telephone: PHONE,
  url: SITE_URL,
  email: "info@saebitcare.kr",
  address: {
    "@type": "PostalAddress",
    addressRegion: "서울특별시",
    addressCountry: "KR",
  },
  areaServed: AREAS.split("·").map((area) => ({
    "@type": "Place",
    name: area,
  })),
  priceRange: "₩80,000~",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "에어컨 청소 서비스",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "벽걸이형 에어컨 청소" }, price: "80000", priceCurrency: "KRW" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "스탠드형 에어컨 청소" }, price: "120000", priceCurrency: "KRW" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "천장형 에어컨 청소" }, price: "150000", priceCurrency: "KRW" },
    ],
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
    </html>
  );
}
